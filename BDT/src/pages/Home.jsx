import React, {useState} from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { FaRegHeart } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import { IoMdAlert } from "react-icons/io";
import Footer from "../components/Footer";
import DonateModal from "../components/DonateModal";
function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="">
        <div className="bg-white flex-col items-center justify-center text-center space-y-5 py-5">
          <h1 class="text-3xl font-bold">SAVE LIVES THROUGH BLOOD DONATION</h1>
          <h5 class="font-bold bg-[#D32F2F] text-white py-2">
            Join our community of life-savers. Every doantion counts in making a
            difference
          </h5>
          <Button onClick={()=>{
            console.log("Opening modal...");
            setIsOpen(true); }} > Donate Now </Button >
          <DonateModal open={isOpen} onClose={() => setIsOpen(false)}></DonateModal>

        </div>
        <hr />
        <div className="font-bold flex flex-col justify-center items-center space-y-2 py-5">
          <h3 className="text-[#D32F2F]">FEATURES</h3> <br />
          <h2 className="text-2xl">A better way to donate blood </h2>
          <div className="flex flex-wrap justify-center items-center space-x-5">
            <Card
              icon={FaRegHeart}
              title="Digital Donor Card"
              description="Keep track of your donations, digitally, no more physical card needed."
              bgColor="#D32F2F"
            />
            <Card
              icon={LuMedal}
              title="Reward Points"
              description="If you donate blood regularly and significantly more than other donors, you will be rewarded."
              bgColor="#D32F2F"
            />
            <Card
              icon={IoMdAlert}
              title="Get Alerts"
              description="Get notified when you are elligible to donate again."
              bgColor="#D32F2F"
            />
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
