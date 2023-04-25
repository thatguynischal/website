import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Capabilities = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (


    <div className="h-screen flex-col p-5">
      <div className="flex justify-center items-center">
        <p className="my-4 text-5xl font-bold">
          <span className="text-button">Our</span> Capabilities
        </p>
      </div>


      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        <div className=" flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Design & Development 1</p>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className=" flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Design & Development 2</p>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className=" flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Design & Development 3</p>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className=" flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Design & Development 4</p>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div><div className=" flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./icon1.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Design & Development 5</p>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </Carousel>

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
