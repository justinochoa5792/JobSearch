import React from "react";
import "../App.css";

const JobList = ({ job }) => {
  console.log(job);
  const cardArray = job.map((user, i) => {
    return (
      <ul>
        <img
          src={job[i].company_logo}
          alt={job[i].title}
          style={{ height: "20vh" }}
        />
        <li>
          <strong>Company: </strong>
          {job[i].company}
        </li>
        <li>
          <strong>Job Title: </strong>
          {job[i].title}
        </li>
        <li>
          <strong>Location: </strong>
          {job[i].location}
        </li>
        <li>
          <strong>How to apply: </strong>
          <a href={job[i].url}>{job[i].url}</a>
        </li>
      </ul>
    );
  });
  return <div>{cardArray}</div>;
};

export default JobList;
