import React from "react";
import { useGlobalContext } from "../context";
const Budget = () => {
  const { nextHandler, prevHandler } = useGlobalContext();

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 px-5 py-5 rounded-t-full rounded-b-full">
          <p className="text-lg">$</p>
          <div className="w-4 h-4 border border-solid border-gray-500 rounded-full" />
        </div>
        <div className="flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 px-5 py-5 rounded-t-full rounded-b-full">
          <p className="text-lg">$$</p>
          <div className="w-4 h-4 border border-solid border-gray-500 rounded-full" />
        </div>
        <div className="flex flex-col min-h-[12rem] w-[5rem] sm:hidden md:block justify-between items-center bg-white mx-6 px-5 py-5 rounded-t-full rounded-b-full">
          <p className="text-lg">$$$</p>
          <div className="w-4 h-4 border border-solid border-gray-500 rounded-full" />
        </div>
        <div className="flex flex-col min-h-[12rem] w-[5rem] sm:hidden md:block justify-between items-center bg-white mx-6 px-5 py-5 rounded-t-full rounded-b-full">
          <p className="text-lg">$$$$</p>
          <div className="w-4 h-4 border border-solid border-gray-500 rounded-full" />
        </div>
      </div>
      <div className="flex justify-between gap-5 px-10 my-4">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <div className="flex gap-3 items-center">
          <p>
            Products Available (728){" "}
            <span>
              {" "}
              <a href="/" className="text-underline underline">
                Skip to results
              </a>{" "}
            </span>
          </p>
          <button
            onClick={nextHandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-bold bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
