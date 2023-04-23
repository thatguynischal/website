import React from "react";

const Products = () => {
  return (
    <div className="h-screen flex-col ">
      <div className="flex justify-center items-center">
        <p className="my-8 text-3xl">
          <span className="text-button">TEKGRO</span> PRODUCTS
        </p>
      </div>
      <div className="my-2 flex justify-center items-center">
        <div class="max-w-9xl mx-auto">
          <div class=" border-gray-200 dark:border-gray-700 mb-4">
            <ul
              class="flex justify-center flex-wrap -mb-px"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  LMS
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 "
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  CRM
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
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
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
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
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="flex">
                <img src="./left.png" alt="" style={{ height: "400px" }} />
             
                <img src="./lms.png" style={{ height: "600px" }} alt="" />
              </div>
            </div>
            <div
              class="bg-gray-50 p-4 flex rounded-lg dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
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
