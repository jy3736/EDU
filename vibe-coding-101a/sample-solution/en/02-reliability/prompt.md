# Exercise 02 prompt - Reliability

> Sequential messages in one chat. Send them one at a time; later turns build on the
> earlier ones without repeating the setup.

**Message 1** | set the scene and build subscale scores
> For this one I'd like your help checking the survey's reliability. Work it out behind the scenes and read the files I cleaned last time, `_results/clean_pre.csv` and `clean_post.csv`. The subscale-to-item mapping is: IM=Q1,Q5,Q9,Q13; IR=Q2,Q6,Q10,Q14; ER=Q3,Q7,Q11,Q15; AM=Q4,Q8,Q12,Q16. First, for each student work out the 4 subscale scores (each the mean of that subscale's four items), saving pre and post separately: `subscale_scores_pre.csv`, `subscale_scores_post.csv` (columns 帳號, IM, IR, ER, AM).

**Message 2** | now the reliability (reuse the mapping above)
> Now, from those scores, compute a Cronbach's alpha (a reliability index, closer to 1 is better) for each subscale in both pre and post, put it in `reliability.csv` (columns subscale, pre_alpha, post_alpha), and print the table for me.

**Message 3** | let the agent help interpret
> Flag any alpha below 0.7 and guess why, then tell me in one sentence whether the survey is trustworthy overall and where to be careful.

**Message 4** | chase one follow-up (bonus)
> What if we drop Q11 from the pre-test ER and keep only Q3, Q7, Q15: does the alpha improve? Try it for me.
