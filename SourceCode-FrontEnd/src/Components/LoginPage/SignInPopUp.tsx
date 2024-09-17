import React from 'react'

const SignInPopUp = ({onClose}: {onClose: () => void}) => {
  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <h2 className="text-2xl mb-4">Login</h2>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
                {/* Add your login form here */}
            </div>
        </div>
    
  )
}

export default SignInPopUp
