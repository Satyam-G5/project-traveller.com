import React from 'react'

function footer() {
    return (
        <footer className='mt-2 bg-gray-300 h-15 w-full fixed bottom-0 flex flex-row justify-between rounded-lg '>
            <div className=' text-base text-black hover:cursor-pointer hover:text-green-800 ml-3 mt-3 '>Powered by @Razorpay </div>
            <div className='hidden lg:text-base lg:text-black lg:hover:cursor-pointer lg:hover:text-green-800 lg:mt-3'>Help Desk</div>
            <div className='mr-3'>
                <li className=' text-base text-black hover:cursor-pointer hover:text-green-800 '>Contact Us</li>
                <li className=' text-base text-black hover:cursor-pointer hover:text-green-800 '>About Us</li>
                <li className=' text-base text-black hover:cursor-pointer hover:text-green-800 '>Complaints</li>
            </div>
        </footer>
    )
}

export default footer
