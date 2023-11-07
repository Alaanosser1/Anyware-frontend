import React, { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch announcements
    axios
      .get("http://localhost:3000/announcements/list")
      .then((response) => {
        setAnnouncements(response.data);
        console.log(response, "LOLOLOLO");
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <>
      <div className=" p-5 flex-col overflow-scroll md:h-[520px] w-[90%] lg:w-[100%] lg:w-[60%] justify-between rounded-lg shadow-md m-auto mt-5">
        <div className="primary-text mt-3 ml-10">
          <p className="text-xl font-extrabold md:text-4xl">Announcements</p>
        </div>
        <div className="mt-10 ">
          <table className="table">
            <tr>
              <th></th>
              <th></th>
            </tr>
            {announcements.map((announcement, index) => (
              <tr key={index}>
                <td className="border-r-4 p-2 border-indigo-500 mt-1">
                  <div class="row">
                    <p className="ml-10 text-slate-500 text-sm">
                      {announcement.title}
                    </p>
                  </div>
                </td>
                <td>
                  <div class="row">
                    <p className="ml-2 text-slate-500 text-sm">
                      {announcement.content}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Announcements;
