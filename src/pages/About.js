import React from "react";
import classes from "../styles/About.module.css";
const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.header}>
        <div className={classes.image1}>
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/linkedin-jobs-603f44d5ef182-760x400.png"
            alt="img"
            className={classes.img1}
          />
        </div>
        <div className={classes.description}>
          <p>
            Working causes you to feel better and hence in this job essay we
            have explained why having a job is important in our life. Regardless
            of whether it’s paid or neglected, a job is indispensable for
            keeping up great wellbeing. When all is said and done, our physical
            and emotional wellness improves when we work. Having a job can help
            your confidence and certainty by giving you reason, and it’s a lot
            simpler to be content when you feel your value.
          </p>
          <p>
            It helps you master new abilities while working, you’ll unavoidably
            get new abilities and develop personally. You may acquire insight
            with hands-on preparation, which could make you ready for other job
            openings or future advancement. Keeping a task in your field
            additionally guarantees you stay refreshed with the most recent
            patterns in your industry.
          </p>
          <p>
            Working helps you to set yourself up for what’s to come. Working can
            advance your monetary circumstance and give you the opportunity to
            carry on with your life how you decide to. Retirement may not be on
            the cards at this moment, yet preparing for monetary solidness in
            years to come implies you’ll have the option to help yourself when
            it’s an ideal opportunity to hang up the boots. We hope you must
            have got all the answers to your doubts by reading this job essay.
          </p>
        </div>
      </div>
      <h1 className={classes.heading}>Some of The Top IT Companies</h1>
      <div className={classes.brands}>
        <div className={classes.brand}>
          <i class="fab fa-google"></i>
        </div>
        <div className={classes.brand}>
          <i class="fab fa-facebook-f"></i>
        </div>
        <div className={classes.brand}>
          <i class="fas fa-apple-alt"></i>
        </div>
        <div className={classes.brand}>
          <i class="fab fa-amazon"></i>
        </div>
        <div className={classes.brand}>
          <i class="fab fa-google"></i>
        </div>
        <div className={classes.brand}>
          <i class="fab fa-google"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
