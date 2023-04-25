import React from "react";

const Carouseltem = (props) => {
  return (
    <div>
      <div className=" flex-col justify-center items-center w-fit p-7 ">
        <div className="flex justify-center items-center">
          <img src= {props.img} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">{props.title}</p>
          <div className="flex justify-center items-center">
          <p>{props.text}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carouseltem;
