import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const [fullname,setfullname]=useState('')
    const [email,setemail]=useState('')
    const[password,setpassword]=useState('')
     const[cnfpassword,setcnfpassword]=useState('')
    const submitform=()=>{
        if(password!=cnfpassword)return toast("password not match")
            console.log(fullname,password,cnfpassword,email)



    }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join us and start shopping today
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e)=>{e.preventDefault()}}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="rohit kumar"
             value={fullname}
             onChange={(e)=>{setfullname(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
               value={email}
             onChange={(e)=>{setemail(e.target.value)}}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
               value={password}
             onChange={(e)=>{setpassword(e.target.value)}}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
               value={cnfpassword}
             onChange={(e)=>{setcnfpassword(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            onClick={submitform}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;