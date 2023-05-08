import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carouseltem from "../Components/Carouseltem";

const Capabilities = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselData = [
    {
      id: 1,
      img: "./lotti1.gif",
      title: "Design & Development",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
    {
      id: 2,
      img: "./lotti2.gif",
      title: "Security",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
    {
      id: 3,
      img: "./lotti3.gif",
      title: "Web Optimization",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
    {
      id: 4,
      img: "./lotti4.gif",
      title: "Tech Support",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
    {
      id: 5,
      img: "./lotti5.gif",
      title: "Digital Solutions",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
    {
      id: 6,
      img: "./lotti6.gif",
      title: "Software Solutions",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit conse adipiscing elit.",
    },
  ];

  const realData = carouselData.map((item) => (
    <Carouseltem img={item.img} title={item.title} text={item.text} />
  ));

  return (
    <div className="flex-col p-5">
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold">
          <span className="text-button">Our</span> Capabilities
        </p>
      </div>
      <div className="lg:px-6">
        <Carousel
          swipeable={false}
          draggable={true}
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
          itemClass="carousel-item-padding-50-px"
        >
          {realData}
        </Carousel>
      </div>

      <div className="flex flex-col justify-center items-center my-5">
        <div className="lg:w-2/3 text-center">
          <p>
            We believe in creating solutions that are tailored to your unique
            needs, so you can focus on what you do best. Our goal is to help you
            maximize your potential with Our Digital Solutions.
          </p>
        </div>
      </div>

      <div className="justify-center relative hidden lg:flex">
        <img src="./pc-laptop.png" alt="" className="h-1/6" />
        <img src="./header.png" alt="" className="absolute top-16" />
        <div className="absolute top-40">
          <p className="text-2xl font-bold">
            Transform Your Online <br />
            Presence <span className="text-button">with TekGro</span>
          </p>
        </div>
        <div className="absolute top-56 flex-col my-3 justify-center">
          <div>
            <span>
              Build Your Dream Website with Tekgro Today! Customize, Create,
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span>and Launch Your Online Presence with Ease.</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-bold">Contact Us to Get Started.</span>
          </div>
          <div className="flex justify-center items-center my-5">
            <button
              type="button"
              className="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
