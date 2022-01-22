import React, { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const url = "https://remotive.io/api/remote-jobs?limit=5";
  const fetchData = async () => {
    const response = await fetch(url);
    //get json data
    const data = await response.json();
    setJobs(data.jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.img1}>
        <img
          className={classes.img}
          src="https://www.manipalhospitals.com/uploads/page_banners/careers.png"
          alt=""
        />
      </div>
      <div className={classes.jobCardCont}>
        {jobs.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
      <div className={classes.btn}>
        <Link to="/jobs" className={classes.link}>
          Find More
        </Link>
      </div>
    </div>
  );
};

export default Home;
