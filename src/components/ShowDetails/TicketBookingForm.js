//TicketBookingForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TicketBookingForm = ({ movieDetails, props }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Load user details from local storage if available
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleBooking = () => {
    // Save user details to local storage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    navigate("/");
    // Clear the form after booking
    setUserDetails({
      name: "",
      email: "",
      phoneNumber: "",
    });

    // You can also redirect the user or perform other actions as needed
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.header}>Book Movie Ticket</h2>
      <form style={styles.form}>
        <label style={styles.label} htmlFor="name">
          <input
            placeholder="your name"
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label} htmlFor="email">
          <input
            placeholder="aman@gmail.com"
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            style={{ ...styles.input, width: "110%" }}
          />
        </label>

        <label style={styles.label} htmlFor="phoneNumber">
          <input
            placeholder="phone number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleInputChange}
            style={{ ...styles.input, width: "100%" }}
          />
        </label>
        <br />

        <button type="button" onClick={handleBooking} style={styles.button}>
          Book Ticket for {movieDetails.name}
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{ marginTop: "10px" }}
        >
          Go Back to Home
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "8px",
    // margin: "20px 0",
    maxWidth: "300px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    margin: "10px 0",
    textAlign: "left",
    color: "#555",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginLeft: "5px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TicketBookingForm;
