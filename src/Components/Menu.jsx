import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaSearch } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs'
const Menu = () => {
	return (
		<div className='flex-col'>
			<nav class="bg-transparent dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div class="max-w-screen flex flex-wrap items-center justify-between mx-4 p-4">
					<div className='flex gap-14 justify-center items-center'>
						<a href="#" class="flex items-center flex-col p-2">
							<img src="./logo.svg" alt="" className='h-12' />
						</a>
						<div className='hidden md:block'>
							<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
								<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
									Products
								</span>
							</button>
							<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
								Solutions
							</span>
							<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
								TekGro
							</span>
							<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
								Blogs
							</span>
							<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
								Customers
							</span>
							<span class="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
								Contact
							</span>
						</div>
					</div>

					<div class="flex md:order-2">
						<div className='hidden lg:flex'>
							<div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
								<span class="flex text-button relative justify-center items-center gap-6 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full ">
									<FaFacebookF className='text-lg cursor-pointer hover:text-black'/>
									<FaInstagram className='text-lg cursor-pointer hover:text-black' />
									<FaLinkedin className='text-lg cursor-pointer hover:text-black' />
									<FaYoutube className='text-xl cursor-pointer hover:text-black' />
								</span>
							</div>
							<div className='flex justify-center items-center'>
								<button type="button" class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaSearch/></button>
								<button type="button" class="text-white bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
							</div>
						</div>
						<button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
						</button>
					</div>
				</div>
			</nav>
			<div class="bg-transparent hidden lg:flex dark:bg-gray-900 w-full z-20 top-24 left-0 p-3 px-11">
				<ul className='flex gap-5'>
					<li>
						<span class="relative bold font-bold px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
							PRODUCTS
						</span>
					</li>
					<li>
						<span class="flex justify-center items-center relative transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
							<BsDot />
							Mobile Application Development
						</span>
					</li>
					<li>
						<span class="flex justify-center items-center relative transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
							<BsDot />
							Content Management System						
							</span>
					</li>
					<li>
						<span class="flex justify-center items-center relative transition-all ease-in duration-75 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
							<BsDot />
							Customer Relationship Management						</span>
					</li>
				
				</ul>
			</div>
		</div>
	)
}

export default Menu