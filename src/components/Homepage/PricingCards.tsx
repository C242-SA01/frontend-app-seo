import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PlansSection: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-20">
        {/* FREE Plan Card */}
        <div className="w-full max-w-lg h-full p-10 rounded-2xl shadow-lg bg-primary">
            <h2 className="text-3xl font-bold text-black mb-4">FREE</h2>
            <p className="text-xl font-semibold text-black mb-6">IDR 0 / Month</p>
            <ul className="mb-8 space-y-4">
            <li className="flex items-center text-lg text-black">
                <FaCheckCircle className="mr-2 text-green-500" /> Can Only Perform Audits 5 Times
            </li>
            <li className="flex items-center text-lg text-black">
                <FaTimesCircle className="mr-2 text-red-500" /> No Recommendation Feature
            </li>
            </ul>
            <button
            className="w-full px-4 py-3 text-lg font-semibold text-black rounded-lg cursor-not-allowed bg-gray-400"
            disabled
            >
            You already have this plan
            </button>
        </div>

        {/* PREMIUM Plan Card */}
        <div className="w-full max-w-lg h-full p-10 rounded-2xl shadow-lg bg-yellow-100 text-black">
            <h2 className="text-3xl font-bold mb-4">PREMIUM</h2>
            <p className="text-xl font-semibold mb-6">IDR 50,000.00 / Month</p>
            <ul className="mb-8 space-y-4">
            <li className="flex items-center text-lg">
                <FaCheckCircle className="mr-2 text-green-500" /> Unlimited Audit
            </li>
            <li className="flex items-center text-lg">
                <FaCheckCircle className="mr-2 text-green-500" /> Provide Recommendations On Your Audit
            </li>
            </ul>
            <button className="w-full px-4 py-3 text-lg font-semibold text-black bg-primary rounded-lg hover:bg-gray-400">
            Subscribe
            </button>
        </div>
        </div>
    );
};

export default PlansSection;
