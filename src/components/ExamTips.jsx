import React from "react";
import Exam from "../assets/images/exam.svg";

const ExamTips = () => {
  return (
    <>
      <div className="flex overflow-hidden md:h-[250px] w-[90%] lg:w-[100%] justify-between rounded-lg shadow-md m-auto mt-5 ">
        <div className="text-wrapper">
          <div className="primary-text mt-3 ml-10">
            <p className="text-xl font-extrabold md:text-4xl">Exam Tips</p>
          </div>
          <div className="secondary-text">
            <p className="mt-3 ml-10 text-slate-500">
              Here we are, Are you ready to fight? Don't worry, we prepare some
              tips to be ready for your exams.
            </p>
            <p className="mt-3 ml-10 text-slate-400">
              "Nothing happens until something moves"{" "}
              <span className="italic">-Albert Einstein</span>
            </p>
          </div>
          <div className="button mt-10 ml-10">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View exams tips
            </button>
          </div>
        </div>
        <div
          className="hidden md:block min-w-[30%]"
          style={{
            backgroundImage: `url(${Exam})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </>
  );
};

export default ExamTips;
