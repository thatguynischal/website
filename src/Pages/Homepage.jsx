import React from 'react';
import Menu from '../Components/Menu';

const Homepage = () => {
  return (
    <div className='mainDiv h-screen flex-col relative' style={{background: "url('./homepage.png')"}}>
      <div className=''>
        <Menu />
        <div className='flex'>
          <div className='lg:w-1/2 flex justify-center items-center z-10'>
            <div className='p-20'>
              <p className='text-4xl'>Learning Management System</p>
              <p className='text-4xl my-2'>for all <span className='text-button'>Academic based Industries</span></p>
              <p className='my-6'>The software fits different business sectors and their variable <br />
                processes and setup. It is THE solution to grow your business by <br />
                enhancing customer engagement via all your sales channels.</p>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative text-lg font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Check LMS Features
                </span>
              </button>
            </div>
          </div>
          <div className='w-1/2 hidden lg:flex'>
            <img src="./header-bg.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage;
