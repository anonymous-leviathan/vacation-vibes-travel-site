import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const destinations = [
    { image: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Paris" },
    { image: "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=600", title: "New York" },
    { image: "https://images.pexels.com/photos/2128042/pexels-photo-2128042.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Seoul" },
    { image: "https://images.pexels.com/photos/889954/pexels-photo-889954.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Bali" },
];

export default function Adventure() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-4xl font-bold text-center">Let's go on an adventure</h2>
            <p className="text-gray-600 text-center mt-2">Find and book a great experience</p>

            <div className="flex items-center justify-center mt-8 space-x-6">
                {/* Left Arrow */}
                <button onClick={goToPrevious} className="text-gray-600 hover:text-black">
                    <FaArrowLeft size={24} />
                </button>

                {/* Adventure Cards */}
                <div className="flex space-x-6 overflow-hidden">
                    {destinations.slice(currentIndex, currentIndex + 4).map((destination, index) => (
                        <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden w-48 h-64 m-3">
                            {/* Airplane Icon */}
                            <HiOutlinePaperAirplane className="absolute top-3 left-3 text-blue-500" size={24} />
                            {/* Image */}
                            <img
                                src={destination.image}
                                alt={destination.title}
                                className="w-full h-52 object-cover rounded-t-lg"
                            />
                            {/* Title */}
                            <div className="p-4 text-center">
                                <p className="text-lg font-semibold">{destination.title.toUpperCase()}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={goToNext} className="text-gray-600 hover:text-black">
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}
