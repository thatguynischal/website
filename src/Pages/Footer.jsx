import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import {CiShoppingTag} from 'react-icons/ci'
import {TfiSupport} from 'react-icons/tfi'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className='relative flex flex-col justify-center items-center'>
                <img src="./Rectangle.png" alt="" className='rounded-3xl h-56 absolute -z-50 w-full' />
                <div className='px-48 flex flex-col justify-center items-center'>
                    <p className='text-2xl text-white font-bold'>Get access to the best digital solutions all in one place.</p>
                    <p className='text-2xl text-white font-bold'>Start your <span className='text-black'>Premium Plan</span> today!</p>
                    <div className='flex gap-2 my-6'>
                        <input type="text" className='h-10 rounded-full p-6' placeholder='Enter Your Email' />
                        <button type="button" class="text-button p-2 bg-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='text-xl'>SUBSCRIBE NOW</span></button>
                    </div>

                </div>
            </div>
            <div className='flex gap-16 p-28'>
                <div className='flex flex-col gap-4'>
                    <p className='text-fcolor text-lg font-bold'>Ready to get started?</p>
                    <p className='text-button text-xl font-bold'>We are on standby to answer any of your <br /> questions</p>
                    <p>If you require further assistance in any action,  please feel free to  contact us anytime.</p>
                    <div>
                        <button type="button" class="text-white p-2 bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='text-xl'>CALL US</span></button>
                    </div>                </div>
                <div className='flex flex-col gap-4'>
                    <CiShoppingTag className='text-fcolor' size={40}/>
                    <p className='text-fcolor text-lg font-bold'>Check Pricing</p>
                    <p className=''>Lorem ipsum dolor sit amet conseipisci nisi <br /> aliquid in pariatur ipsam illo,  <br />corporis architecto quidem? Aliquam, ut.</p>
                    <div className='flex'>
                        <span className='text-fcolor font-bold'>Pricing</span>
                        <MdKeyboardDoubleArrowRight className='text-fcolor my-1' />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <TfiSupport className='text-fcolor' size={40}/>
                    <p className='text-fcolor text-lg font-bold'>24/7 Support</p>
                    <p className=''>We are on standby to answer any of your questions</p>
                    <div className='flex'>
                        <span className='text-fcolor font-bold'>Pricing</span>
                        <MdKeyboardDoubleArrowRight className='text-fcolor my-1' />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="./tekgro-logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer