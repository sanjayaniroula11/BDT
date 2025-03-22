import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import {FaRegHeart} from 'react-icons/fa'

function Home() {
  return (
    <>
      <div className="bg-white flex-col items-center justify-center px-4 text-center space-y-10 py-10">
        <h1 class="text-4xl font-bold">SAVE LIVES THROUGH BLOOD DONATION</h1>
        <h5 class="font-bold bg-[#D32F2F] text-white">
          Join our community of life-savers. Every doantion counts in making a
          difference
        </h5>
        <Button />
      </div>
      <hr />
      <div className="font-bold flex flex-col justify-center items-center space-y-3 py-10">
        <h3 className="text-[#D32F2F]">FEATURES</h3> <br />
        <h2 className="text-2xl">A better way to donate blood </h2>

        <div className="flex flex-wrap justify-center items-center space-x-5">
          <Card
          icon={FaRegHeart}
          title='Digital Donor Card'
          description='Keep track of your donations, digitally, no more physical card needed'
          bgColor="#D32F2F"
          />
          <Card
          icon={FaRegHeart}
          title='Digital Donor Card'
          description='Keep track of your donations, digitally, no more physical card needed'
          bgColor="#D32F2F"
          />
            <Card
          icon={FaRegHeart}
          title='Digital Donor Card'
          description='Keep track of your donations, digitally, no more physical card needed'
          bgColor="#D32F2F"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
