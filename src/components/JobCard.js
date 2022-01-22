import React from "react";
import classes from "./JobCard.module.css";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  return (
    // <a href={job.url} target="_blank" className={classes.link}>
    <div className={classes.jobCard}>
      <h3 className={classes.name}>{job.company_name}</h3>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={
            job.company_logo_url
              ? job.company_logo_url
              : "https://janejacksoncoach.com/wp-content/uploads/2015/01/JJC-JOB-SEARCH-ONLINE-PIC.jpg"
          }
          alt=""
        />
      </div>
      <h3 className={classes.category}>{job.category}</h3>
      <h4 className={classes.title}>{job.title}</h4>
      <button className={classes.btn}>
        {/* <a href={job.url} target="_blank" className={classes.link}>
          Apply
        </a> */}
        <Link
          to={`/apply/${job.company_name}/${job.id}`}
          job={job}
          className={classes.link}
        >
          Apply
        </Link>
      </button>
    </div>
  );
};

export default JobCard;
