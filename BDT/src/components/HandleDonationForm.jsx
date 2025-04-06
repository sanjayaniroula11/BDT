import React, { useState } from 'react';

function HandleDonationForm() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [hasDonated, setHasDonated] = useState(false);
  const [donationDate, setDonationDate] = useState('');

  const handleBloodGroupChange = (e) => setBloodGroup(e.target.value);
  const handleDonationStatusChange = (e) => setHasDonated(e.target.value === 'yes');
  const handleDonationDateChange = (e) => setDonationDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      bloodGroup,
      hasDonated,
      donationDate: hasDonated ? donationDate : 'N/A',
    });

    // Reset fields
    setBloodGroup('');
    setHasDonated(false);
    setDonationDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Blood Group:</label>
        <select
          value={bloodGroup}
          onChange={handleBloodGroupChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Have you donated blood recently?</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="donated-yes"
            name="donated"
            value="yes"
            checked={hasDonated === true}
            onChange={handleDonationStatusChange}
            className="mr-2"
          />
          <label htmlFor="donated-yes" className="mr-4">Yes</label>
          <input
            type="radio"
            id="donated-no"
            name="donated"
            value="no"
            checked={hasDonated === false}
            onChange={handleDonationStatusChange}
            className="mr-2"
          />
          <label htmlFor="donated-no">No</label>
        </div>
      </div>
      {hasDonated && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Donation Date:</label>
          <input
            type="date"
            value={donationDate}
            onChange={handleDonationDateChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      )}
      <div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Submit</button>
      </div>
    </form>
  );
}

export default HandleDonationForm;
