import React from "react";
import PlaceList from "./PlaceList";

function DonateModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="z-10 fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className="p-[10%] w-[70%] h-[50%] rounded-md border border-white/40 bg-yellow-200 backdrop-blur-lg shadow-lg text-red-400 relative">
        {children}
        <button
          className="fixed top-0 right-0 px-1 py-1 hover:bg-red-500 transition text-white rounded-md"
          onClick={onClose}
        >
          👎🏿
        </button>

        <div className="p-3 absolute top-0 left-0 text-left">
          <h3 className="text-2xl font-bold">Locations available for donation</h3>
          <PlaceList>
            <ul>
              <li>Hospital A</li>
              <li>Community Center B</li>
              <li>Mobile Donation Van C</li>
              <li>Blood Bank D</li>
            </ul>
          </PlaceList>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;