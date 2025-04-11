import React from "react";

const DonorCard = ({ name, donorId, bloodType, dob }) => {
  return (
    <div className="w-[340px] rounded-2xl shadow-xl bg-white text-gray-800 font-sans p-6 border border-red-200">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold text-red-600">Blood Donor Card</div>
        <div className="w-15 h-15 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
          {bloodType}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-600">Name:</span>
          <div className="text-gray-900 text-lg">{name}</div>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Gender:</span>
          <div className="text-gray-900 text-lg">{name}</div>
        </div>

        <div>
          <span className="font-semibold text-gray-600">Donor ID:</span>
          <div className="text-gray-900">{donorId}</div>
        </div>

        <div>
          <span className="font-semibold text-gray-600">Date of Birth:</span>
          <div className="text-gray-900">{dob}</div>
        </div>
      </div>

      <div className="mt-6 border-t pt-3 text-center text-sm text-gray-500">
        Thank you for your life-saving contribution ❤️
      </div>
    </div>
  );
};

export default DonorCard; 

// Example usage:
// <BloodDonorCard name="Sanjaya Niroula" donorId="DN-20250411" bloodType="A+" dob="2004-05-17" />
