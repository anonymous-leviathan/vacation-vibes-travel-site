import React from "react";

export default function FooterSection() {
    return (
        <div>
            {/* Video Banner Section */}
            <div className="relative">
                <video
                    src="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4" // Replace this with your actual video file path or URL
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[60vh] object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                        Book tickets and go now!
                    </h1>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
                        Book now
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-50 text-gray-700 pt-10 pb-6">
                <div className="container mx-auto px-6">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h2 className="text-xl font-bold">Tripco</h2>
                            <p className="text-sm text-gray-500 mt-2">
                                30 Great Peter St, WestMinister, <br />
                                London SW1P 2BJ, United Kingdom
                            </p>
                            {/* Social Media Links */}
                            <div className="flex space-x-4 mt-4">
                                <a href="#" aria-label="Facebook" className="text-blue-600">
                                    {/* Insert Facebook Icon */}
                                </a>
                                <a href="#" aria-label="Instagram" className="text-pink-500">
                                    {/* Insert Instagram Icon */}
                                </a>
                                <a href="#" aria-label="YouTube" className="text-red-600">
                                    {/* Insert YouTube Icon */}
                                </a>
                            </div>
                        </div>
                        {/* Book Now Button */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 md:mt-0">
                            Book now
                        </button>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg">About</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-gray-600 hover:underline">About us</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Features</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">News</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Plans</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Company</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-gray-600 hover:underline">Why Tripco</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Partner with us</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">FAQ</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Support</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-gray-600 hover:underline">Account</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Support center</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Feedback</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Contact us</a></li>
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div>
                            <h3 className="font-semibold text-lg">Newsletter</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Subscribe to our Newsletter and get exciting offers
                            </p>
                            <div className="flex items-center mt-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="border border-gray-300 rounded-l-lg p-2 w-full"
                                />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                                    {/* Insert Send Icon */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
