
import React , { useState }  from 'react'
import ColorLogo from '../../assets/Logos/Logo3.png'
import './NavBar.css'
import SignInPopUp from '../../Pages/LoginPage/SignInPopUp'
import SignUpPopUp from '../../Pages/LogOutPage/SignUpPopUp'

function NavBar() {

    const [ isSignInPopUpOpen, setIsSignInPopUpOpen] = useState(false);
    const [isSignUpPopUpOpen, setIsSignUpPopUpOpen] = useState(false);

    const toggleSignInPopUp = () => setIsSignInPopUpOpen(!isSignInPopUpOpen);
    const toggleSignUpPopUp = () => setIsSignUpPopUpOpen (!isSignUpPopUpOpen);


    return (
        <div>
            <nav className="bg-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-[120px] py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={ColorLogo} className="h-6" alt="CompeteNow Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        <button type="button" onClick= {toggleSignUpPopUp} className="text-[--color-primary]  hover:bg-[--color-grey] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 mx-3 text-center dark:hover:[--color-primary] dark:focus:ring-blue-800 transition-all duration-500">Sign up</button>
                        <button type="button" onClick={toggleSignInPopUp} className="text-white bg-[#7848F4] hover:bg-[--color-primary] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 mx-3 text-center dark:bg-[--color-secondary] dark:hover:[--color-primary] dark:focus:ring-blue-800 transition-all duration-500">Sign in</button>


                    </div>
                    {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>


            {isSignUpPopUpOpen && <SignUpPopUp  onClose={toggleSignUpPopUp}/>}
            {isSignInPopUpOpen && <SignInPopUp onClose={toggleSignInPopUp} />}

        </div>
    )
}

export default NavBar
