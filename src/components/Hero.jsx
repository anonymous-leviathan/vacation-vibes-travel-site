import React, { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";

export default function Hero() {
    const [active, setActive] = useState("Hostelry");

    return (
        <div className="container mx-auto px-6 pt-12">
            <div className="relative rounded-2xl lg:pb-32 lg:h-[70vh]">
                <div className="overflow-hidden relative h-full w-full">
                    {/* Replace img with video */}
                    <video
                        src="https://videos.pexels.com/video-files/3089895/3089895-uhd_2560_1440_30fps.mp4" // Replace this with your actual video file path or URL
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl hoverImg"
                    />
                </div>
                <div className="absolute inset-0 h-fit">
                    <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
                        Explore the whole world and enjoy the beauty of nature
                    </h1>
                    <p className="flex justify-center text-white mt-4 px-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque dapibus.
                    </p>
                </div>
                <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
                    <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
                        <div className="lg:flex gap-4">
                            <div className="flex flex-wrap gap-x-6 w-full">
                                {["Hostelry", "Flights", "Bus & Shuttles", "Cars"].map((label) => (
                                    <button
                                        key={label}
                                        className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer ${
                                            active === label ? "text-black border-b-2 border-black" : "text-light"
                                        }`}
                                        onClick={() => setActive(label)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 bg-transparent outline-none text-light">
                                Last Searching <FaArrowRight />
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 py-4 mt-4">
                            <div className="relative h-10 w-40 flex items-center">
                                <FaLocationPin className="text-primary absolute left-2" />
                                <input
                                    type="text"
                                    placeholder="Bali, Indonesia"
                                    className="bg-light1 rounded-md pl-8 py-2 w-full outline-none"
                                />
                            </div>
                            <div className="relative h-10 w-40 flex items-center">
                                <FaCalendar className="text-primary absolute left-2" />
                                <input
                                    type="date"
                                    defaultValue="2022-02-12"
                                    className="bg-light1 rounded-md pl-8 py-2 w-full outline-none"
                                />
                            </div>
                            <div className="relative h-10 w-40 flex items-center">
                                <FaCalendar className="text-primary absolute left-2" />
                                <input
                                    type="date"
                                    defaultValue="2022-03-12"
                                    className="bg-light1 rounded-md pl-8 py-2 w-full outline-none"
                                />
                            </div>
                            <div className="relative h-10 w-40 flex items-center">
                                <FaPerson className="text-primary absolute left-2" />
                                <input
                                    type="text"
                                    placeholder="1 Room, 2 Guest"
                                    className="bg-light1 rounded-md pl-8 py-2 w-full outline-none"
                                />
                            </div>
                            <button className="bg-primary text-white py-2 px-4 rounded-md flex items-center">
                                <FaSearch className="mr-2" /> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
