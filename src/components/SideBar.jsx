import React from "react";
import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as Schedule } from "../assets/images/schedule.svg";
import { ReactComponent as Courses } from "../assets/images/courses.svg";
import { ReactComponent as Gradebook } from "../assets/images/gradebook.svg";
import { ReactComponent as Performance } from "../assets/images/performance.svg";
import { ReactComponent as Announcements } from "../assets/images/announcement.svg";

const SideBar = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        class=" w-[100%] h-screen transition-transform -translate-x-full sm:translate-x-0 h-screen min-h-[100vh] sticky top-0"
        aria-label="Sidebar"
      >
        <div class="min-h-[100vh] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-3 font-medium">
            <div className="mb-10 xl:ml-10">
              <li>
                <a
                  href="#"
                  class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white group"
                >
                  <span class="ml-2 text-xl xl:text-4xl">Coligo</span>
                </a>
              </li>
            </div>

            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Home className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Dashboard
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Schedule className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Schedule
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Courses className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Courses
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Gradebook className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Gradebook
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Performance className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Performance
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-100 group"
              >
                <Announcements className="w-7 h-7" stroke={1.5} />
                <span class="ml-3 text-m xl:text-xl hidden lg:block">
                  Announcements
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
