import React from "react";
import { Carousel } from "flowbite-react";

const Capabilities = () => {
  return (
    <div className="h-screen flex-col p-5">
      <div className="flex justify-center items-center">
        <p className="my-4 text-3xl">
          <span className="text-button">OUR</span> CAPABILITIES
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="">
          We believe in creating solutions that are tailored to your unique
          needs, so you can focus on what you do{" "}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="">
          {" "}
          best. Our goal is to help you maximize your potential with Our Digital
          Solutions.
        </p>
      </div>
      <div className="flex justify-center gap-20 my-6">
        <div className="flex-col justify-center items-center">
          <div className=" flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <p className="text-lg font-semibold">Design & Development</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex-col justify-center items-center">
          <div className=" flex justify-center items-center">
            <img src="./icon3.png" alt="" />
          </div>
          <p className="text-lg font-semibold">Design & Development</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex-col justify-center items-center">
          <div className=" flex justify-center items-center">
            <img src="./icon3.png" alt="" />
          </div>
          <p className="text-lg font-semibold">Design & Development</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex-col justify-center items-center">
          <div className=" flex justify-center items-center">
            <img src="./icon3.png" alt="" />
          </div>
          <p className="text-lg font-semibold">Design & Development</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <img src="./pc-laptop.png" alt="" className="h-1/6" />
        <img src="./header.png" alt="" className="absolute top-16" />
        <div className="absolute top-40">
          <p className="text-2xl font-bold">Transform Your Online <br />
            Presence <span className="text-button">with TekGro</span></p>
        </div>
        <div className="absolute top-56 flex-col my-3 justify-center">
          <div>
            <span>Build Your Dream Website with Tekgro Today! Customize, Create,</span>
          </div>
          <div className="flex justify-center items-center">
            <span>and Launch Your Online Presence with Ease.</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-bold">Contact Us to Get Started.</span>
          </div>
          <div className="flex justify-center items-center my-5">
            <button type="button" class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GET STARTED</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Capabilities;
