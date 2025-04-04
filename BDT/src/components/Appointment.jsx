import React from "react";
import { useLocation } from "react-router-dom";

function Appointment() {
  const location = useLocation();
  const selectedLocation = location.state?.location || "Unknown Location";

  return (
    <div className="text-3xl bg-amber-200 p-5">
      <h1 className="font-bold">Appointment at {selectedLocation}</h1>
    </div>
  );
}

export default Appointment;
