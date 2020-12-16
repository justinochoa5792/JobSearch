import React, { useState, useEffect } from "react";
import Axios from "axios";
import JobList from "./components/JobList";
import "./App.css";

const App = () => {
  const [job, setJobs] = useState("");
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    const response = await Axios.get(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code"
    );
    setJobs(response.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredJobs = job.filter((eachJob) => {
    return eachJob.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Jobs that are Hiring</h1>
      <p>Use search bar to filter through jobs</p>
      <input type="search" placeholder="Search Jobs" onChange={handleChange} />
      <JobList job={filteredJobs} />
    </div>
  );
};

export default App;
// "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code"
// "https://www.breakingbadapi.com/api/characters"
