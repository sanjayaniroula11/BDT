import React from "react";

function PlaceList({ locations, navigate }) {
  return (
    <ol className="list-decimal list-inside space-y-2 text-black font-bold">
      {locations.map((location) => (
        <li
          key={location.id}
          className="bg-green-400 px-5 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/appointment", { state: { location: location.name } })}
        >
          {location.name}
        </li>
      ))}
    </ol>
  );
}

export default PlaceList;
