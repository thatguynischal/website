import React from 'react'
import Partners from '../Components/Partners'


const Academy = () => {
    const partnersData = [
        {
            id: 1,
            img: "./wisecrave-partner-tekgro.jpg"
        },
        {
            id: 2,
            img: "./jamun-partner-tekgro.jpg"
        },
        {
            id: 3,
            img: "./tg-tekgro-academy-partner-tekgro.jpg"
        },
        {
            id: 4,
            img: "./all-tidy-partner-tekgro.jpg"
        }
    ];
    const myData = partnersData.map((item) => (
        <Partners img={item.img} />
    ));
    return (
        <div className="h-screen flex gap-20 flex-col p-5 relative justify-center items-center">
            <img src="./bigcircle.png" alt="" className='absolute' />
            <img src="./smallcircle.png" alt="" className='absolute top-44 left-2/4 -z-50' />
            <img src="./smallcircle.png" alt="" className='absolute bottom-1/4 left-1/3 -z-50 h-36' />
            <div className='flex flex-col justify-center items-center font-bold gap-3'>
                <p className='text-slate-500 text-xl'>We are proud to work with Top-Performing companies,
                </p>
                <span className='text-button text-xl'>TekGro Customers! </span>
            </div>
            <div className='flex justify-center items-center'>
                <img src="./logoss.png" alt="" />
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src="./academy-logo.png" alt="" />
                    </div>
                    <p className='text-xl font-bold text-button'>TekGro Academy</p>
                    <p className='text-xl font-bold text-button'> By TekGro</p>
                </div>
                <div className='flex font-bold flex-col justify-center items-center'>
                    <p className='text-2xl'> Unlock Your Web Development and Designing <br /> </p>
                    <p className='text-2xl'>Potential with <span className='text-button'>TekGro Academy</span>
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Are you ready to take your IT career to the next level? Tekgro Academy, a subsidiary of Tekgro Australia, is the leading</p>
                    <p>provider of Information Technology training and education. Our courses are designed by industry experts and focus on the</p>  most in-demand technologies and skills, so you can be confident that you're learning the most up-to-date information
                </div>
                <div className='mx-auto'>
                    <button type="button" class="text-white p-2 bg-button hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='text-xl'>GET ENROLLED</span></button>
                </div>
            </div>

            <div className='mx-auto text-xl flex flex-col justify-center items-center font-bold'>
                <p><span className='text-button'>TekGro</span> <span className='text-slate-500'>Awards & Accreditation</span></p>
                <div className='flex gap-4'>
                    {myData}
                </div>
            </div>
        </div>)
}

export default Academy