import React from "react";
import { useGlobalContext } from "../context";

// import { Rooms, Activities, Budget } from "./";

const Main = () => {
  // let element = document.querySelector(".active");
  const {
    displayRooms,
    displayActivity,
    displayBudget,
    showRooms,
    showBudget,
    showActivities,
  } = useGlobalContext();
  return (
    <div className="flex gap-1">
      <aside className="w-[50vw] md:w-[30vw] bg-[#f2f2f2] my-0  rounded-tr-lg rounded-br-lg">
        <div className=" flex flex-col mt-12 mx-3 relative">
          <h2>
            {/* {`QUESTION ${element ? element.id : " "} OF 6`} */}
          QUESTION 1 OF 6
          </h2>
          <div>
            <button
              id="rooms"
              onClick={displayRooms}
              className="flex gap-3 text-left my-8 cursor-pointer"
            >
              <div
                id="one"
                className={`rounded-[50%] bg-black w-2 h-2 lg:w-5 lg:h-5 my-1 ${
                  showRooms ? "active" : ""
                }`}
              />
              <h1 className="font-bold text-[10px] lg:text-base lg:font-extrabold">
                Which Room's are you shopping for new Flooring?
              </h1>
            </button>
          </div>
          <div>
            <button
              id="activity"
              onClick={displayActivity}
              className="flex gap-3 text-left my-8"
            >
              <div
                id="two"
                className={`rounded-[50%] bg-black w-2 h-2 lg:w-5 lg:h-5 my-1 ${
                  showActivities ? "active" : ""
                }`}
              />
              <h1 className="font-bold text-[10px] lg:text-base lg:font-extrabold">
                What Does Your Day to Day Activity Level Look Like?
              </h1>
            </button>
          </div>
          <div>
            <button
              id="budget"
              onClick={displayBudget}
              className="flex gap-2 text-left my-8"
            >
              <div
                id="three"
                className={`rounded-[50%] bg-black w-2 h-2 lg:w-5 lg:h-5 my-1 ${
                  showBudget ? "active" : ""
                }`}
              />
              <h1 className="font-bold text-[10px] lg:text-base lg:font-extrabold">
                What is Your Budget?
              </h1>
            </button>
          </div>
          <div>
            <button className="flex gap-2 items-start my-8">
              <div className="rounded-[50%] bg-black w-2 h-2 lg:w-5 lg:h-5 my-1" />
            </button>
          </div>
          <div>
            <button className="flex gap-2 items-start my-8">
              <div className="rounded-[50%] bg-black w-2 h-2 lg:w-5 lg:h-5 my-1" />
            </button>
          </div>
        </div>
        <div className="w-[1px] h-[450px] lg:h-[425px] top-[100px] left-[17px] bg-black absolute lg:top-[110px] lg:left-[21px]" />
      </aside>
  
    </div>
  );
};

export default Main;
