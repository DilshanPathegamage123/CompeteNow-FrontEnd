import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo3 from "../../assets/Logos/Logo3.png";
import SignInBackImg1 from "../../assets/Images/SignIn Background Img.png";
import SignInBackImg2 from "../../assets/Images/SignIn Background Img2.png";

const SignInPopUp = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white rounded-lg shadow-lg relative w-3/5 h-auto flex">
        {/* Left Part ///////////////////////////////////////////////// */}
        <div className="w-full md:w-3/5 column1 relative">
          <div className=" justify-center">
            <img src={Logo3} alt="Logo3" className=" h-8 m-auto mt-10 mb-5 p-1" />
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-5 md:hidden"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="relative flex-grow flex items-center justify-center mt-10">
            <div className="relative text-3xl font-bold flex flex-col items-center">
              <div>Sign In</div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="flex flex-col items-center mt-8">
            <input
              type="email"
              placeholder="Email"
              className="w-3/5 p-2 mb-4 border border-gray-300 rounded-lg mt-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-3/5 p-2 mb-4 border border-gray-300 rounded-lg mt-4"
            />

            <button
              type="button"
              className="w-auto hover:underline justify-end text-blue-500"
            >
              Forgot Password?
            </button>
            <button
              type="submit"
              className="w-auto p-2 bg-[#7848F4] hover:bg-blue-800 text-white rounded-lg mt-5 "
            >
              Sign In
            </button>

            <button
              type="button"
              className="w-auto p-2 mb-8 border rounded-md mt-8  flex items-center justify-center  hover:bg-[#b4a8cf]"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.1 0 5.6 1.1 7.5 2.9l5.6-5.6C33.4 3.5 28.9 1.5 24 1.5 14.8 1.5 7.2 7.8 4.9 16.1l6.9 5.4C13.1 14.3 18 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3.1-2.4 5.7-4.9 7.4l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.8 28.5c-1-3.1-1-6.4 0-9.5l-6.9-5.4C2.2 17.1 1.5 20.4 1.5 24s.7 6.9 2.4 10.4l6.9-5.9z"
                />
                <path
                  fill="#34A853"
                  d="M24 46.5c5.9 0 10.9-1.9 14.5-5.4l-7.6-5.9c-2.1 1.4-4.8 2.3-7.5 2.3-6 0-10.9-4.8-12.6-11.1l-6.9 5.4C7.2 40.2 14.8 46.5 24 46.5z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Right Part ///////////////////////////////////////////////// */}
        <div
          className="hidden md:block w-2/5 column2 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${SignInBackImg2})` }}
        >
          {/* Add Layer mask for the background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${SignInBackImg1})` }}
          ></div>
          <div className="relative flex justify-end p-5">
            <button onClick={onClose} className="text-cyan-50">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="">
            <div className="relative flex-grow flex items-center justify-center text-cyan-50 mt-40">
              <div className="relative text-4xl font-semoibold flex flex-col items-center">
                <div>Hello</div>
                <div>Friends</div>
              </div>
            </div>
            <div className="relative flex flex-col items-center text-cyan-50 justify-center mt-4 opacity-75 p-2">
              <div>
                To keep connected with us 
                {/* provide us with your information */}
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-10">
            <button
              type="submit"
              className="text-white bg-[#ffffff] hover:bg-[#9387ad] font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-opacity-40"
              style={{ height: "42.5px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPopUp;
