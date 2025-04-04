import React from "react";
import PlaceList from "./PlaceList";
import { useNavigate } from "react-router-dom";

function DonateModal({ open, onClose, children }) {
  const navigate = useNavigate();

  if (!open) return null;

  const locations = [
    { id: 1, name: "Hospital A, Koteshwor" },
    { id: 2, name: "Community Center B, Baneshwor" },
    { id: 3, name: "Mobile Donation Van C, Sundhara" },
    { id: 4, name: "Blood Bank D, Balaju" }

  ];

  return (
    <div className="z-10 fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className=" p-[10%] w-[70%] h-[50%] rounded-md border border-white/40 bg-green-300 backdrop-blur-lg shadow-lg text-red-400 relative">
        {children}
        <button
          className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={onClose}
        >
          ❌
        </button>

        <div className="p-3 absolute top-0 left-0 text-left">
          <h3 className="text-2xl font-bold mb-3">Locations available for donation</h3>
          <PlaceList locations={locations} navigate={navigate} />
        </div>
      </div>
    </div>
  );
}

export default DonateModal;
