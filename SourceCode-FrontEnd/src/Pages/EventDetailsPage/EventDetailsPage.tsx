import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import EventCoverImg from '../../assets/Images/EventsImage.png'
import Map from '../../assets/Images/map.png'
import Footer from '../../Components/Footer/Footer'

function EventDetailsPage() {
    return (
        <div>
            <NavBar />
            <div
                className="mx-[60px] md:mx-[120px] h-[596px] rounded-3xl"
                style={{
                    backgroundImage: `url(${EventCoverImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 m-10 text-center  transition-all duration-500">Back</button>

            </div>

            <div className='grid lg:grid-cols-2 mx-[60px] md:mx-[120px] py-10'>
                <div>
                    <h4 className='text-xl font-bold text-bold'>About this competition</h4><br />
                    <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                    <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                    <br /><br />
                    <h4 className='text-xl font-bold text-bold'>Organizer Contact</h4>
                    <p>Email : abcedf@gmail.com <br />
                        Tel : +94 75 444 5186 <br />
                        Visit : WWW.abddf.edu
                    </p>
                </div>
                <div className='lg:px-10'>
                    <h4 className='text-xl font-bold text-bold'>Date & time</h4> <br />
                    <p>Saturday, March 18 2023, 9.30 AM  to 5.30 PM <br />
                        Physical Event
                    </p><br />
                    <p> 3 days more to register</p><br />
                    <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-4 m-3 text-center  transition-all duration-500 w-full">Register Now</button><br />
                    <button type="button" className="text-white bg-[#c1a9ff] hover:bg-[#b293ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-4 m-3 text-center  transition-all duration-500 w-full">View More</button>

                    <br />
                    <br />
                    <h4 className='text-xl font-bold text-bold'>Location</h4>
                    <img src={Map} alt="" className='py-6' />
                    <h4 className='text-lg font-bold'>Dream world wide in jakatra</h4>
                    <p>Dummy location generation model by RSU ... Our approach generates more realistic dummy locations </p>
                </div>

            </div>

            <div className='mx-[60px] md:mx-[120px] text-center'>
                <h3 className='text-xl font-bold'>Share with friends</h3>
                <div className='flex flex-row justify-center p-5'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <span className='p-3'></span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span className='p-3'></span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    <span className='p-3'></span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default EventDetailsPage
