import React from 'react'

const Ads = () => {
    return (
        <div className="flex gap-2 flex-col p-5 relative">
            <img src="./dec1.png" alt="" className='absolute h-56 -left-1 hidden lg:flex' />
            <img src="./dec2.png" alt="" className='absolute h-56 bottom-0 right-0 hidden lg:flex' />
            <div className='flex justify-center gap-32'>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-3 flex-col'>
                        <p className='text-4xl font-bold'>Do you want more <span className='text-button'>bookings</span> <br /> from more channels?</p>
                        <p>Maximize your online impact with our full-service digital <br /> marketing solutions. From SEO and PPC to social media and <br /> content marketing, we have the expertise to help you succeed.</p>
                        <div>
                            <button type="button" class="text-white p-2 bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='text-xl'>CHECK DETAILS</span></button>
                        </div>
                        <p className='text-fcolor cursor-pointer'>Click to explore more about our <br /> digital marketing services</p>
                    </div>
                </div>
                <div className='hidden lg:flex p-5'>
                    <img src="./tekgro-graphics-digital-marketing.png" alt="" className='h-96' />
                </div>
            </div>
            <div className='flex justify-center items-center gap-32 my-10 lg:my-0'>
                <div className='hidden lg:flex'>
                    <img src="./tekgro-graphics-blogs-02.png" alt="" className='h-96' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-3 flex-col'>
                            <p className='text-4xl font-bold'> <span className='text-button'>Check out our blogs</span> for the <br /> latest tips and tricks
                            </p>
                            <p>Discover the latest tips and tricks for boosting your website performance! <br /> We help you stay ahead of the curve in the ever-evolving world of digital <br /> solutions with our tips and tricks.</p>
                            <div>
                                <button type="button" class="text-white p-2 bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='text-xl'>CHECK OUR BLOGS</span></button>
                            </div>
                            <p className='text-fcolor cursor-pointer'>Click to explore more about our <br /> digital marketing services</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ads