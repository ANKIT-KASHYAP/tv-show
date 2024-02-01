// components/ShowList/ShowList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  }, []);

  return (
    <>
      <div className="main_container">
        <h1>TV Shows</h1>
        <div className="show-list-container">
          {shows.map((show) => (
            <div key={show.show.id} className="show-card">
              <h2 className="show-title">{show.show.name}</h2>
              <p className="show-summary">{show.show.summary}</p>
              <Link to={`/details/${show.show.id}`} className="details-btn">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowList;
