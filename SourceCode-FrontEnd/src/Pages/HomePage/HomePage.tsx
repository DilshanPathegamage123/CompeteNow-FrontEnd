import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import LandingPageImg from '../../assets/Images/LandingPageImg.png'

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className='grid md:grid-cols-2 px-[60px] md:px-[120px] py-6'>
                <div>
                    <h3 className='text-4xl font-extrabold text-[--color-primary] leading-[60px]'>
                        Organize, Compete, Innovate
                    </h3>
                    <h3 className='text-4xl font-extrabold text-[--color-secondary]'>
                        All in One Platform
                    </h3>
                    <p className='text-[--color-secondary] py-5 pr-14 text-sm'>
                        Effortlessly manage hackathons, track progress, and foster innovation with our all-in-one solution.
                    </p>
                    <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 text-center dark:bg-[--color-secondary] dark:hover:[--color-primary] dark:focus:ring-blue-800 transition-all duration-500">More Info</button>
                </div>
                <div>
                    <img src={LandingPageImg} alt="" />
                </div>

            </div>
        </div>
    )
}

export default HomePage
