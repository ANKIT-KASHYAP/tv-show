import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import ShowList from "./components/ShowLists/ShowList";
import TicketBookingForm from "./components/ShowDetails/TicketBookingForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/book/:id" component={TicketBookingForm} />
      </Routes>
    </Router>
  );
};

export default App;
