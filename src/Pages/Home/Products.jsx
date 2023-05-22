import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Products = () => {
  return (
    <div className=" flex-col ">
      <div className="flex justify-center items-center">
        <p className="my-8 text-5xl font-bold">
          <span className="text-button">Tekgro</span> Products
        </p>
      </div>
      <Tabs>
        <div className=" border-gray-200 dark:border-gray-700 mb-4">
          <ul className="flex justify-center flex-wrap -mb-px">
            <TabList>
              <div className="lg:flex">
                <Tab
                  selectedClassName="bg-gradient-to-br from-teal-300 to-lime-300"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full dark:text-white dark:hover:text-gray-900 "
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in cursor-pointer duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-90">
                    Learning Managemnet System{" "}
                  </span>
                </Tab>
                <Tab
                  selectedClassName="bg-gradient-to-br from-teal-300 to-lime-300"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full dark:text-white dark:hover:text-gray-900 "
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in cursor-pointer duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-90">
                    Customer Relationship Manager{" "}
                  </span>
                </Tab>
                <Tab
                  selectedClassName="bg-gradient-to-br from-teal-300 to-lime-300"
                  className="border-none relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full dark:text-white dark:hover:text-gray-900 "
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in cursor-pointer duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-90">
                    Content Management System{" "}
                  </span>
                </Tab>
              </div>
            </TabList>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 my-10 rounded-lg dark:bg-gray-800">
          <TabPanel>
            <div className="flex justify-center items-center">
              <div className="bg-icolor p-6 lg:w-1/3 flex flex-col gap-1">
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Course management: </strong>
                    Allows instructors to create and manage course content,
                    including uploading documents, creating quizzes, and
                    managing discussion forums.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>User management:</strong> Allows administrators to
                    manage user accounts, including creating new accounts,
                    setting permissions, and managing user roles.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Assessment and grading:</strong> Allows instructors
                    to create and manage assessments, such as quizzes and exams,
                    and assign grades to students.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Progress tracking:</strong> Allows instructors and
                    administrators to track the progress of learners, including
                    course completion rates, assessment results, and overall
                    performance.
                  </p>
                </div>
              </div>
              <img
                src="./tekgro-graphics-lms-illustration.png"
                className="h-max hidden xl:flex"
                alt=""
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <p>Contents Will Be Here</p>
            </div>
          </TabPanel>{" "}
          <TabPanel>
            <div className="flex justify-center items-center">
              <div className="bg-icolor p-6 lg:w-1/3 flex flex-col gap-1">
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Course management: </strong>
                    Allows instructors to create and manage course content,
                    including uploading documents, creating quizzes, and
                    managing discussion forums.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>User management:</strong> Allows administrators to
                    manage user accounts, including creating new accounts,
                    setting permissions, and managing user roles.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Assessment and grading:</strong> Allows instructors
                    to create and manage assessments, such as quizzes and exams,
                    and assign grades to students.
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center hover:bg-white p-4 rounded-lg cursor-pointer">
                  <SlBookOpen className="text-fcolor my-" size={90} />
                  <p>
                    <strong>Progress tracking:</strong> Allows instructors and
                    administrators to track the progress of learners, including
                    course completion rates, assessment results, and overall
                    performance.
                  </p>
                </div>
              </div>
              <img
                src="./tekgro-graphics-lms-illustration.png"
                className="h-max hidden xl:flex"
                alt=""
              />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Products;
