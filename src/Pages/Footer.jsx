import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import Flags from "../Components/Flags";

const Footer = () => {
  const flagData = [
    {
      id: 1,
      img: "./Australian_Aboriginal.png",
    },
    {
      id: 2,
      img: "./torres-strait-flag.png",
    },
  ];

  const myFlagData = flagData.map((item) => <Flags img={item.img} />);
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-10 my-24 ">
      <div className="relative flex flex-col justify-center items-center ">
        <img
          src="./Rectangle.png"
          alt=""
          className="rounded-3xl h-96 md:h-56 absolute -z-50 w-full"
        />
        <div className="px-20 flex flex-col justify-center items-center">
          <p className="text-2xl text-white text-center font-bold">
            Get access to the best digital solutions all in one place.
          </p>
          <p className="text-2xl text-white text-center font-bold">
            Start your <span className="text-black">Premium Plan</span> today!
          </p>
          <div className="lg:flex gap-3  my-6">
            <input
              type="text"
              className="h-10 rounded-full block mx-auto p-6"
              placeholder="Enter Your Email"
            />
            <button
              type="button"
              class="text-button lg:ml-0 ml-3  lg:mt-0 mt-3 bg-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-7 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="text-xl">SUBSCRIBE NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex grid gap-16 p-10 lg:px-36">
        <div className="flex flex-col gap-4">
          <p className="text-fcolor text-lg font-bold">Ready to get started?</p>
          <p className="text-button text-3xl font-bold">
            We will help you built your Online platform
          </p>
          <p className="text-lg">
            If you're looking for a reliable and experienced partner for your
            digital needs. Contact us today and help your business grow.
          </p>
          <div className="mx-auto lg:mx-0">
            <button
              type="button"
              class="text-white p-2  bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="text-xl ">CALL US</span>
            </button>
          </div>{" "}
        </div>
        <div className="flex  flex-col gap-4">
          <img src="./xo2.gif" alt="" className="h-16 w-16 mx-auto" />
          <p className="text-fcolor text-lg font-bold text-center">
            Check Pricing
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit a corporis architecto quidem? Aliquam, ut.
          </p>
          <div className="flex text-button mx-auto ">
            <span className="font-bold  ">Pricing</span>
            <MdKeyboardDoubleArrowRight className="my-1" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img src="./xo.gif" alt="" className="h-16 w-16 mx-auto" />
          <p className="text-fcolor text-lg font-bold text-center">
            24/7 Support
          </p>
          <p className="text-center">
            We are on standby to answer any of your questions
          </p>
          <div className="flex text-button mx-auto">
            <span className="font-bold ">View More</span>
            <MdKeyboardDoubleArrowRight className="my-1" />
          </div>
        </div>
      </div>
      <div className="lg:flex flex-col p-5 lg:p-20 gap-10 border-t-2 border-b-2">
        <div className="lg:flex gap-5">
          <div className="p-4 flex justify-center">
            <img
              src="./tekgro-logo.png"
              alt=""
              className="lg:w-96 w-36"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div>
            <p className="leading-6">
              Tekgro specializes in providing comprehensive digital solutions.
              We are a team of experts who are dedicated to helping businesses
              grow by leveraging the latest technology and digital marketing
              techniques. Our core services include software development, web
              development, and design. Our team of developers and designers work
              together to create custom software and web applications that are
              tailored to meet the unique needs of each of our clients. Our goal
              is to help you reach your target audience and increase your online
              visibility, so that you can grow your business and succeed in
              today's digital landscape.
            </p>
          </div>
        </div>

        <div className=" gap-5 lg:gap-10  md:grid md:grid-cols-2 grid grid-cols-1 lg:flex justify-center">
          <div className=" ">
            <p className="text-xl   flex items-center text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Quick Link
            </p>
            <div className="flex lg:ml-12   md:block  lg:block">
              <p>
                Tekgro Overview<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Career<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Blogs<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Knowledge Base<span className="mx-1  lg:hidden">|</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl flex items-center  text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Tekgro Capability
            </p>
            <div className="flex  lg:ml-11  md:block  lg:block">
              <p>
                Design & Development<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Security, Tech Support<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Web Optimization<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Digital Solution<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Software Solution<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Domain & SSL<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Digital Marketing<span className="mx-1  lg:hidden">|</span>
              </p>
              <p>
                Web Hosting<span className="mx-1  lg:hidden">|</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl flex items-center   text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Legal
            </p>
            <div className=" lg:ml-11  md:block  lg:block">
              <p>Privacy Policy</p>
              <p>Disclaimer</p>
              <p>Terms & Condition</p>
            </div>
          </div>
          <div>
            <p className="text-xl flex items-center   text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Social Media
            </p>
            <div className=" lg:ml-10  md:block  lg:block">
              <p>Youtube</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
              <p>LinkedIn</p>
            </div>
          </div>

          <div>
            <p className="text-xl flex items-center   text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Australia
            </p>
            <div className="lg:ml-10  md:block  lg:block">
              <p>0280 743 892</p>
              <p>support@tekgro.com.au</p>
              <p>43 Cremin Street, Upper</p>
              <p>Mount Gravatt QLD 4122</p>
              <p>ABN : 52 631 588 611</p>
            </div>
          </div>
          <div>
            <p className="text-xl flex items-center   text-button font-bold">
              <BsDot size={50} className="font-extrabold " /> Nepal
            </p>
            <div className=" lg:ml-8   md:block  lg:block">
              <p>+977-9802330080</p>
              <p>support@tekgro.com.au</p>
              <p>Old Baneshwor</p>
              <p>Kathmandu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex p-5 lg:px-44 justify-center items-center text-center">
        <p>
          Copyright @2023 Upvivid Pty Ltd Trading as TekGro Australia. ACN : 631
          588 611
        </p>
        <p className="my-5">
          At Tekgro, we acknowledge and pay respect to the Indigenous peoples of
          Australia, the Torres Strait Islanders and the Aboriginals, who have a
          rich cultural heritage that dates back thousands of years. As an
          organization, we believe in promoting inclusiveness and diversity, and
          recognizing the unique contributions of Indigenous peoples to the
          world.
        </p>
      </div>
      <div className="flex gap-2">{myFlagData}</div>
    </div>
  );
};

export default Footer;
