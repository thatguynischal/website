import React from "react";
import { SlBookOpen } from 'react-icons/sl'

const Products = () => {
  return (
    <div className=" flex-col ">
      <div className="flex justify-center items-center">
        <p className="my-8 text-5xl font-bold">
          <span className="text-button">Tekgro</span> Products
        </p>
      </div>
      <div className="my-2 flex justify-center items-center">
        <div className="max-w-9xl mx-auto">
          <div className=" border-gray-200 dark:border-gray-700 mb-4">
            <ul
              className="flex justify-center flex-wrap -mb-px"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium 
                  text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  LMS
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium 
                  text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="true"
                >
                  CRM
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium 
                  text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Mobile Apps
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium 
                  text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  CMS
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className="bg-gray-50 p-4 my-10 rounded-lg dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="flex justify-center items-center">
                <div className="bg-icolor p-6 lg:w-1/3 flex flex-col gap-1">
                  <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                    <SlBookOpen className="text-fcolor my-" size={90} />
                    <p>
                      <strong>Course management: </strong>
                      Allows instructors to create and manage course content, including uploading documents, creating quizzes, and managing discussion forums.
                    </p>
                  </div>
                  <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                    <SlBookOpen className="text-fcolor my-" size={90} />
                    <p>
                      <strong>User management:</strong> Allows administrators to manage user accounts, including creating new accounts, setting permissions, and managing user roles.
                    </p>
                  </div>
                  <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                    <SlBookOpen className="text-fcolor my-" size={90} />
                    <p>
                      <strong>Assessment and grading:</strong>  Allows instructors to create and manage assessments, such as quizzes and exams, and assign grades to students.
                    </p>
                  </div>
                  <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                    <SlBookOpen className="text-fcolor my-" size={90} />
                    <p>
                      <strong>Progress tracking:</strong>  Allows instructors and administrators to track the progress of learners, including course completion rates, assessment results, and overall performance.
                    </p>
                  </div>

                </div>
                <img src="./tekgro-graphics-lms-illustration.png" className="h-max hidden xl:flex" alt="" />
              </div>
            </div>
           
            <div
              className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
