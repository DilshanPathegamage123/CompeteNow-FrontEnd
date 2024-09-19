import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
function UpcomingEventsPage() {
    return (
        <div>
            <NavBar/>
            <section className='my-10'>
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
                    <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-4 text-center  transition-all duration-500">Next Page</button>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default UpcomingEventsPage
