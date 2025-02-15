import React, { useState } from "react";
import { TfiPackage } from "react-icons/tfi";

const TrackOrder = () => {
  const [selectedOption, setSelectedOption] = useState("orderId");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 py-10">
        <div className="p-5 bg-white shadow-lg w-full max-w-[80%]">
          <div className="border-b pb-4 text-lg sm:text-2xl font-semibold flex items-center justify-center gap-x-4 sm:gap-x-2">
            <TfiPackage size={20} />
            <h1 className="text-gray-700">Track status of your shipment</h1>
          </div>
          <div className="p-2">
            <h1 className="font-semibold mt-4">Search By:</h1>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="orderId"
                  name="identifier"
                  value="orderId"
                  checked={selectedOption === "orderId"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="orderId"
                  className="ml-2 font-semibold text-gray-700"
                >
                  Order ID
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="awb"
                  name="identifier"
                  value="awb"
                  checked={selectedOption === "awb"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="awb"
                  className="ml-2 font-semibold text-gray-700"
                >
                  AWB
                </label>
              </div>
            </div>

            <div className="flex mt-5 flex-col space-y-5">
              <input
                type="text"
                placeholder={
                  selectedOption === "orderId"
                    ? "Enter Order ID to search"
                    : "Enter AWB to search"
                }
                name={selectedOption} // Dynamically setting the name attribute based on selected option
                id={selectedOption} // Dynamically setting the id attribute based on selected option
                className="border py-2 pl-2 sm:pl-5 focus:outline-none rounded-md"
              />

              <button
                type="submit"
                className="bg-green-400 font-semibold px-5 py-2 max-w-fit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
