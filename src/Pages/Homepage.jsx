import React from "react";
import Menu from "../Components/Menu";
import ReactAudioPlayer from "react-audio-player";

const style = {};
const Homepage = () => {
  return (
    <div className="mainDiv  relative  ">
      <div className="h-screen flex flex-col">
        <div>
          <Menu />
        </div>
        <div className="flex flex-grow">
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="px-9  py-12 lg:px-20 lg:py-20 flex flex-col gap-4">
              <p className="text-5xl font-bold ">
                <span className="text-button">Tekgro:</span> The Ultimate <br />{" "}
                Solution for Your Digital <br /> Problems.
              </p>
              <p className="">
                Join the ranks of successful businesses with our premium digital{" "}
                solutions platform. Upgrade to our premium plan today and start{" "}
                seeing real results.
              </p>
              <ReactAudioPlayer
                src="audio.mp3"
                autoPlay
                controls
                style={style}
              />
              <div className="">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative text-lg font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Check All Solutions
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
