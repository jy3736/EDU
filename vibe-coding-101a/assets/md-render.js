/* 共用的 Markdown / CSV 渲染器（index.html 的資料瀏覽器與 view.html 都用這支）。
   純前端、無相依套件。對外提供 window.VibeMD.mdToHtml(src) 與 window.VibeMD.csvToHtml(text)。 */
(function(){
  "use strict";
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  function mdInline(s){
    s=s.replace(/`([^`]+)`/g,function(_,c){return "<code>"+c+"</code>";});
    s=s.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
    s=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a class="link" href="$2" target="_blank" rel="noopener">$1</a>');
    // 還原少數安全的行內 HTML 標籤（文件原本就用 <b> <strong> <em> <code> <br> 等做粗體/換行）
    s=s.replace(/&lt;(\/?)(b|strong|em|i|u|mark|code|br)\s*\/?&gt;/gi,function(_,sl,tag){return "<"+sl+tag.toLowerCase()+">";});
    return s;
  }
  function splitRow(line){return line.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(function(c){return c.trim();});}
  function isSep(ln){return !!ln && /-/.test(ln) && /^\s*\|?[\s:|-]+\|/.test(ln);}
  function isSpecial(ln,nx){
    return /^\s*$/.test(ln)||/^#{1,6}\s/.test(ln)||/^```/.test(ln)||
      /^\s*([-*]|\d+\.)\s+/.test(ln)||/^\s*>\s?/.test(ln)||/^\s*---\s*$/.test(ln)||
      (ln.indexOf("|")>=0&&isSep(nx));
  }
  function mdToHtml(src){
    var lines=src.replace(/\r\n?/g,"\n").split("\n"),html="",i=0;
    while(i<lines.length){
      var line=lines[i];
      if(/^```/.test(line)){var code=[];i++;while(i<lines.length&&!/^```/.test(lines[i])){code.push(lines[i]);i++;}i++;html+='<pre class="md-pre"><code>'+esc(code.join("\n"))+"</code></pre>";continue;}
      var hm=line.match(/^(#{1,6})\s+(.*)$/);
      if(hm){var lv=hm[1].length;html+="<h"+lv+">"+mdInline(esc(hm[2]))+"</h"+lv+">";i++;continue;}
      if(/^\s*---\s*$/.test(line)){html+="<hr>";i++;continue;}
      if(line.indexOf("|")>=0&&isSep(lines[i+1])){
        var header=splitRow(line);i+=2;var rows=[];
        while(i<lines.length&&lines[i].indexOf("|")>=0&&lines[i].trim()!==""){rows.push(splitRow(lines[i]));i++;}
        html+='<table class="md-table"><thead><tr>'+header.map(function(c){return "<th>"+mdInline(esc(c))+"</th>";}).join("")+"</tr></thead><tbody>"+
          rows.map(function(r){return "<tr>"+r.map(function(c){return "<td>"+mdInline(esc(c))+"</td>";}).join("")+"</tr>";}).join("")+"</tbody></table>";
        continue;
      }
      if(/^\s*>\s?/.test(line)){var q=[];while(i<lines.length&&/^\s*>\s?/.test(lines[i])){q.push(lines[i].replace(/^\s*>\s?/,""));i++;}html+="<blockquote>"+mdInline(esc(q.join(" ")))+"</blockquote>";continue;}
      if(/^\s*([-*]|\d+\.)\s+/.test(line)){
        var ordered=/^\s*\d+\.\s+/.test(line),items=[];
        while(i<lines.length&&/^\s*([-*]|\d+\.)\s+/.test(lines[i])){
          var it=lines[i].replace(/^\s*([-*]|\d+\.)\s+/,""),cb=it.match(/^\[([ xX])\]\s+(.*)$/);
          if(cb){items.push('<li class="md-task"><input type="checkbox" disabled '+(cb[1].toLowerCase()==="x"?"checked":"")+">"+mdInline(esc(cb[2]))+"</li>");}
          else{items.push("<li>"+mdInline(esc(it))+"</li>");}
          i++;
        }
        html+=(ordered?"<ol>":"<ul>")+items.join("")+(ordered?"</ol>":"</ul>");continue;
      }
      if(/^\s*$/.test(line)){i++;continue;}
      var buf=[];while(i<lines.length&&!isSpecial(lines[i],lines[i+1])){buf.push(lines[i]);i++;}
      if(buf.length) html+="<p>"+mdInline(esc(buf.join(" ")))+"</p>";
    }
    return html;
  }
  function parseCSV(text){
    text=text.replace(/\r\n?/g,"\n").replace(/\n+$/,"");
    var rows=[],row=[],field="",q=false;
    for(var i=0;i<text.length;i++){var ch=text[i];
      if(q){if(ch==='"'){if(text[i+1]==='"'){field+='"';i++;}else q=false;}else field+=ch;}
      else{if(ch==='"')q=true;else if(ch===","){row.push(field);field="";}else if(ch==="\n"){row.push(field);rows.push(row);row=[];field="";}else field+=ch;}
    }
    row.push(field);rows.push(row);return rows;
  }
  function csvToHtml(text){
    var rows=parseCSV(text);if(!rows.length)return "<p>（空檔案）</p>";
    var head=rows[0],body=rows.slice(1);
    return '<div class="csv-meta">共 '+body.length+' 列資料</div><table class="md-table"><thead><tr>'+
      head.map(function(c){return "<th>"+esc(c)+"</th>";}).join("")+"</tr></thead><tbody>"+
      body.map(function(r){return "<tr>"+r.map(function(c){return "<td>"+esc(c)+"</td>";}).join("")+"</tr>";}).join("")+"</tbody></table>";
  }
  window.VibeMD={mdToHtml:mdToHtml,csvToHtml:csvToHtml,esc:esc};
})();
