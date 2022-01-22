import React, { useState, useEffect } from "react";
import classes from "../styles/Jobs.module.css";
import JobCard from "../components/JobCard";
const Jobs = () => {
  const [allJob, setAllJob] = useState([]);
  const [limit, setLimit] = useState(5);
  const url = `https://remotive.io/api/remote-jobs?limit=${limit}`;
  const fetchData = async () => {
    const response = await fetch(url);
    //get json data
    const data = await response.json();
    setAllJob(data.jobs);
    // console.log(data.jobs);
  };

  useEffect(() => {
    fetchData();
  }, [limit]);
  const handleClick = () => {
    setLimit(limit + 5);
  };
  return (
    <div className={classes.jobMain}>
      <div className={classes.jobHeading}>
        <h2 className={classes.quotes}>
          <span className={classes.dQuotes}>"</span> Id opportunity doesn't
          Knock,
          <br /> build a door <span className={classes.dQuotes}>"</span>
        </h2>
        <p className={classes.dQuotesWriter}>
          <span className={classes.quotesWriter}>"</span>Milton Berle
          <span className={classes.quotesWriter}>"</span>
        </p>
      </div>
      <div className={classes.jobCardCont}>
        {allJob.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
      <button onClick={handleClick} className={classes.loadBtn}>
        Load more . . .
      </button>
    </div>
  );
};

export default Jobs;
