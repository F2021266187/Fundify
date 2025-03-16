import React from "react";
import SideLayout from "../Layout/SideLayout";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();

  const handleContinue = (event) => {
    event.preventDefault();
    navigate("/Success");
  };

  return (
    <SideLayout>
      <div className="h-screen bg-white overflow-y-hidden font-Inter">
        <div className="absolute p-4">
          <button className="text-lg text-[#91ac8f] hover:text-[#667964] ease-in-out transition duration-300 mb-4 flex flex-row items-center font-semibold">
            <IoChevronBackOutline size={20} /> Back
          </button>
        </div>
        <div className="flex h-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-3/5 p-8 rounded-md">
              <h2 className="text-3xl font-bold mb-2">Reset Your Password</h2>
              <p className="text-md text-gray-500 mb-6">
                Enter your new password to recover your account.
              </p>

              <form className="space-y-4" onSubmit={handleContinue}>
                <div className="space-y-2 text-[#696f79]">
                  <label htmlFor="new-password" className="font-semibold">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new Password"
                    className="w-full p-4 border rounded mb-4 border-[#8692a6] outline-none"
                    required
                  />
                </div>
                <div className="space-y-2 text-[#696f79]">
                  <label htmlFor="confirm-new-password" className="font-semibold">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your new Password"
                    className="w-full p-4 border rounded mb-4 border-[#8692a6] outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#91ac8f] text-white p-3 rounded hover:bg-[#667964] ease-in-out transition duration-300 font-semibold text-md"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SideLayout>
  );
};

export default PasswordReset;
