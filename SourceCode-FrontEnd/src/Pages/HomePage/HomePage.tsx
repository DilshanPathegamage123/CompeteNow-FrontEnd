import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import LandingPageImg from '../../assets/Images/HomePageImg.png'
import Gradient from '../../assets/Images/Gradient Fill 1.png'
import HomePageImg2 from '../../assets/Images/HomePageImg2.png'
import Footer from '../../Components/Footer/Footer'

function HomePage() {
    return (
        <div>
            <NavBar />
            <section>
                <div className='grid md:grid-cols-2 px-[60px] md:px-[120px] py-6'>
                    <div>
                        <h3 className='text-5xl font-extrabold text-[--color-primary] leading-[60px]'>
                            Organize, Compete, Innovate
                        </h3>
                        <h3 className='text-5xl font-extrabold text-[--color-secondary]'>
                            All in One Platform
                        </h3>
                        <p className='text-[--color-secondary] py-5 pr-[130px] text-sm'>
                            Effortlessly manage hackathons, track progress, and foster innovation with our all-in-one solution.
                        </p>
                        <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 text-center  transition-all duration-500">More Info</button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={LandingPageImg} alt="" className=''/>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-[--color-primary] mx-[60px] md:mx-[120px] p-10 rounded-xl my-10'>
                    <form>
                        <div className="grid gap-6 md:grid-cols-4 place-items-end justify-items-center">
                            <div className="w-full">
                                <label htmlFor="event_format" className="block mb-2 text-sm font-medium text-white">Event Format</label>
                                <select id="event_format" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                    <option value="" disabled selected>Select Event Format</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Virtual">Virtual</option>
                                    <option value="Physical">Physical</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="application_status" className="block mb-2 text-sm font-medium text-white">Application Status</label>
                                <select id="application_status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                    <option value="" disabled selected>Select Status</option>
                                    <option value="Open">Open</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Date</label>
                                <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ height: '42.5px' }}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className='flex justify-between mx-[60px] md:mx-[120px]'>
                    <h3 className='flex-initial text-3xl font-extrabold text-[--color-primary]'>Upcoming Events</h3>
                    <div className='flex'>
                        <select id="event_format" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-4" required>
                            <option value="" disabled selected>Select Event Format</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Virtual">Virtual</option>
                            <option value="Physical">Physical</option>
                        </select>
                        <select id="application_status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option value="" disabled selected>Select Status</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-between mx-[60px] md:mx-[120px]'>
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                NASA Open Hackathon
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                Together with NVIDIA and OpenACC organization, NASA will host a Open Hackathon
                            </p>
                        </div>
                        <div className="px-4 pb-4 pt-0 mt-2">
                            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mx-[60px] md:mx-[120px]'>
                    <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 text-center  transition-all duration-500">View All</button>
                </div>
            </section>
            <section>
                <div className='grid lg:grid-cols-2 mx-[60px] md:mx-[120px] bg-gradient-to-r from-[#040f62] to-[#26bce4] rounded-3xl my-10'>
                    <div className='p-10'>
                        <h3 className='text-3xl font-extrabold text-white pt-10'>Why Choose CompeteNow?</h3>
                        <p className='text-sm text-white p-10'>CompleteNow enables event creators to effortlessly manage hackathon events, providing a platform to organize and showcase them. Users can easily explore and view upcoming and past hackathons, ensuring full visibility of all events.</p>
                        <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 mx-10 text-center  transition-all duration-500">View All</button>
                    </div>
                    <div>
                        <img src={HomePageImg2} alt="" className='rounded-3xl'/>
                    </div>
                </div>
            </section>
            <section className='mb-10'>
                <div className='flex justify-between mx-[60px] md:mx-[120px]'>
                    <h3 className='flex-initial text-3xl font-extrabold text-[--color-primary]'>Past Events</h3>
                    <div className='flex'>
                        <select id="event_format" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-4" required>
                            <option value="" disabled selected>Select Event Format</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Virtual">Virtual</option>
                            <option value="Physical">Physical</option>
                        </select>
                        <select id="application_status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option value="" disabled selected>Select Status</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-between mx-[60px] md:mx-[120px]'>
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                NASA Open Hackathon
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                Together with NVIDIA and OpenACC organization, NASA will host a Open Hackathon
                            </p>
                        </div>
                        <div className="px-4 pb-4 pt-0 mt-2">
                            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mx-[60px] md:mx-[120px]'>
                    <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 text-center  transition-all duration-500">View All</button>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default HomePage
