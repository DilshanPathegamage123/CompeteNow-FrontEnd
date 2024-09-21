import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import winnerImg from '../../assets/Images/winnerImg.png'
import Footer from '../../Components/Footer/Footer'

function PastEventDetailsPage() {
    return (
        <div>
            <NavBar />
            <div className="mx-[60px] md:mx-[120px] rounded-3xl">
                <button type="button" className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center  transition-all duration-500">Back</button>
            </div>
            <div className="mx-[60px] md:mx-[120px] py-10 text-center">
                <h3 className='text:4xl md:text-5xl font-bold text-[--color-primary] pb-5'>Hackathon Winners Announcement</h3>
                <p className='lg:px-[200px]'>We are thrilled to announce the winners of the [Hackathon Name]! Congratulations to all participants for your incredible effort and innovation. Here are the top teams who excelled:</p>
            </div>
            <div className="mx-[60px] md:mx-[120px] rounded-3xl flex justify-center pb-10">
                <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg px-5" src={winnerImg} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">1st Place: Team Innovators</h5>
                            <p className="mb-3 font-normal text-gray-700">Group Members</p>
                            <ul>
                                <li>Sarah Johnson</li>
                                <li>Michael Lee</li>
                                <li>Emily Carter</li>
                                <li>David Brown</li>
                            </ul>
                            <p className='py-2'>
                            <b>Project: </b>[Project Name] <br />
                            <b>Prize: </b>$5000 + Mentorship Program + Trophy
                            </p>
                        </div>
                </span>
                
            </div>
            <div className="mx-[60px] md:mx-[120px] rounded-3xl flex justify-center pb-10">
                <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg px-5" src={winnerImg} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">2nd Place: Code Warriors</h5>
                            <p className="mb-3 font-normal text-gray-700">Group Members</p>
                            <ul>
                                <li>Jessica Nguyen</li>
                                <li>Raj Patel</li>
                                <li>Emma Thompson</li>
                                <li>Luke Garcia</li>
                            </ul>
                            <p className='py-2'>
                            <b>Project: </b>[Project Name] <br />
                            <b>Prize: </b>$3000 + Runner-Up Certificate
                            </p>
                        </div>
                </span>
                
            </div>
            <div className="mx-[60px] md:mx-[120px] rounded-3xl flex justify-center pb-10">
                <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg px-5" src={winnerImg} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> 3rd Place: Tech Titans</h5>
                            <p className="mb-3 font-normal text-gray-700">Group Members</p>
                            <ul>
                                <li>Ethan Baker</li>
                                <li>Olivia Rodriguez</li>
                                <li>Daniel Clark</li>
                                <li>Sophia Martinez</li>
                            </ul>
                            <p className='py-2'>
                            <b>Project: </b>[Project Name] <br />
                            <b>Prize: </b>$1000 + Honorable Mention Certificate
                            </p>
                        </div>
                </span>
                
            </div>
            <Footer />
        </div>
    )
}

export default PastEventDetailsPage 
