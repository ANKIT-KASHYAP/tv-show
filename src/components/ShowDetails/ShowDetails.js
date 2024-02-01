// ShowDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TicketBookingForm from "./TicketBookingForm";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch show details based on the id
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div>
      {showDetails ? (
        <div>
          <h2>{showDetails.name}</h2>
          <img
            src={showDetails.image && showDetails.image.medium}
            alt={showDetails.name}
          />
          <p>{showDetails.summary}</p>
          {/* Additional details can be displayed here */}

          {/* Render the TicketBookingForm component with movie details */}
          <TicketBookingForm movieDetails={showDetails} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
