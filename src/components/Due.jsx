import React, { useEffect, useState } from "react";
import axios from "axios";

const Due = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Define the API endpoint to fetch quizzes
    const apiUrl = "http://localhost:3000/quiz/quizzes";

    // Make the Axios GET request
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
      });
  }, []);
  return (
    <>
      <div className="flex-col overflow-scroll md:h-[520px]  lg:w-[39%] w-[90%] lg:w[100%] lg:ml-5 rounded-lg shadow-md m-auto mt-5">
        <div className="primary-text mt-3 text-center">
          <p className="text-xl font-extrabold md:text-4xl">Quizzes</p>
        </div>
        <div className="mt-10 flex flex-col justify-center">
          {quizzes.map((quiz, index) => (
            <div
              key={index}
              className="m-10 mt-2 max-w-sm p-6 bg-white rounded-lg shadow-lg dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {quiz.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                {quiz.description}
              </p>
              <div className="flex justify-center"></div>
              <a
                href="#"
                className="inline-flex w-[100%] items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <p>Start Quiz</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Due;
