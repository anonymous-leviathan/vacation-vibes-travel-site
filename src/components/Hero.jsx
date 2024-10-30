import {useState} from "react";
import {FaArrowRight, FaCalendar, FaSearch} from "react-icons/fa";
import {FaLocationPin, FaPerson} from "react-icons/fa6";

export default function Hero() {

    const [active, setActive] = useState("Hostelry");

    return (<div className="container mx-auto px-6 pt-12">
        <div className="relative rounded-2xl lg:pb-32 lg:h-[70vh]">
            <div className="overflow-hidden relative h-full w-full">
                <img
                    alt=""
                    className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl hoverImg"
                    src="https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747447.jpg?t=st=1730278120~exp=1730281720~hmac=a4884d0a9da8bf26e6ae543f6e70ad66dba2d7f88cf95be3a4558d084ecbebb4&w=1480"/>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
                <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
                    Explore the whole world and enjoy the beauty of nature
                </h1>
                <p className="flex justify-center text-white mt-4 px-6 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque
                    dapibus. Nullam nec mi non libero varius ultricies. Nulla facilisi. Donec euismod, purus nec
                    tincidunt tinc
                </p>
            </div>
            <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
                <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
                    <div className="lg:flex gap-4 gap-x-2">
                        <div className="flex flex-wrap gap-x-16 w-full">
                            <button
                                className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre $(
                                active === "Hostelry" ? "text-black border-b-2 border-solid border-black" : "text-light")`}
                                onClick={() => setActive("Hostelry")}>Hostelry
                            </button>
                            <button
                                className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre $(
                                active === "Flights" ? "text-black border-b-2 border-solid border-black" : "text-light")`}
                                onClick={() => setActive("Flights")}>Flights
                            </button>
                            <button
                                className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre $(
                                active === "Bus & Scuttles" ? "text-black border-b-2 border-solid border-black" : "text-light")`}
                                onClick={() => setActive("Bus & Scuttles")}>Bus & Scuttles
                            </button>
                            <button
                                className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre $(
                                active === "Cars" ? "text-black border-b-2 border-solid border-black" : "text-light")`}
                                onClick={() => setActive("Cars")}>Cars
                            </button>
                        </div>
                        <button
                            className="whitespace-pre flex items-center gap-2 bg-transparent outline-none border-none text-light">
                            Last Searching
                            <FaArrowRight/>
                        </button>
                    </div>
                    <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4">
                        <div className="relative h-10 w-40 flex items-center">
                            <p className="text-light text-lg">Destination</p>
                            <div>
                                <FaLocationPin size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                <input type="text" placeholder="Bali, Indonesia" className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"/>
                            </div>
                        </div>
                        <div className="relative h-10 w-40 flex items-center">
                                <FaCalendar size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                <input
                                    type="date"
                                    defaultValue="2022-02-12"
                                    placeholder="Bali, Indonesia"
                                    className="bg-light rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                                />
                        </div>
                        <div className="relative h-10 w-40 flex items-center">
                            <div>
                                <FaCalendar size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                <input
                                    type="text"
                                    defaultValue="2022-03-12"
                                    placeholder="Bali, Indonesia"
                                    className="bg-light rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"/>
                            </div>
                        </div>
                        <div className="relative h-10 w-40 flex items-center">
                            <div>
                                <FaPerson size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                <input type="text" placeholder="Bali, Indonesia" className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"/>
                            </div>
                        </div>
                        <div>
                            <button><FaSearch/>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}