import React, { useEffect, useState } from "react";
import classes from "../styles/Apply.module.css";
import { useParams } from "react-router-dom";
const Apply = ({ match }) => {
  let { id, name } = useParams();
  const [job, setJob] = useState([]);
  const url = `https://remotive.io/api/remote-jobs?company_name=${name}`;
  const fetchData = async () => {
    const response = await fetch(url);
    //get json data
    const data = await response.json();
    console.log(data);
    const job1 = await data.jobs.filter((job) => job.id == id);
    setJob(job1[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("avi", job);
  // document.getElementById("description").innerHTML = job[0].description;
  const fhtml = job.description;
  return (
    <div className={classes.main}>
      <div className={classes.companyName}>{job.company_name}</div>
      <div className={classes.badgeContainer}>
        <div className={classes.badge}>{job.title}</div>
        <div className={classes.badge}>{job.job_type}</div>
        <div className={classes.badge}>{job.salary}</div>
        <div className={classes.badge}> {job.publication_date}</div>
      </div>
      <div className={classes.heading}>Job Requirements</div>
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: fhtml }}
      />
      <div className={classes.btnContainer}>
        <a className={classes.link} href={job.url} target="_blank">
          Apply Here
        </a>
      </div>
    </div>
  );
};

export default Apply;
