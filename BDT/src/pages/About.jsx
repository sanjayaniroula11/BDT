import React from 'react';

function About() {
  return (
    <section className="bg-white py-10 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold bg-red-600 text-white mb-4 bg-">Why did i built this platform ?</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I built this platform to make blood donation easier, smarter, and more human. Whether you're a regular donor or just starting, this site helps you track eligibility and donate with confidence. It's simple, fast, and made with care — because saving lives shouldn’t be complicated.
        </p>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          — Sanjaya Niroula
        </p>
      </div>
    </section>
  );
}

export default About;
