import React from 'react';
import { useLocation } from 'react-router-dom';
import HandleDonationForm from './HandleDonationForm';

const InputField = ({ id, label, type, name }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      aria-label={label}
    />
  </div>
);

function Appointment() {
  const location = useLocation();
  const selectedLocation = location.state?.location || 'Unknown Location';

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Book your appointment at {selectedLocation}
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h5 className="text-lg font-medium text-gray-700 mb-4">Pick a date</h5>
          <InputField
            id="user-date-selector"
            label="Select a Date"
            type="date"
            name="user_selected_date"
          />
        </div>
        <div>
          <h5 className="text-lg font-medium text-gray-700 mb-4">Pick a time</h5>
          <InputField
            id="user-time-selector"
            label="Select a Time"
            type="time"
            name="user_selected_time"
          />
        </div>
      </div>
      <HandleDonationForm />
    </div>
  );
}

export default Appointment;
