import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const destinations = [
    { image: "https://www.studentuniverse.com/blog/wp-content/uploads/2014/04/Most-Beautiful-Places-to-Travel-Featured-Image.jpg", text: "SC, Mindanao", location: "Mindanao, Philippines", price: "$148", rating: "4.9", category: "Popular destination" },
    { image: "https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-bhopal.jpg", text: "SC, Mindanao", location: "Tokyo, Japan", price: "$140", rating: "4.9", category: "Islands" },
    { image: "https://worldwildschooling.com/wp-content/uploads/2024/01/12-Unique-Places-for-Your-European-Travel-Bucket-List_Annecy-France_Armando-Oliveira_AdobeStock_534300469-1-1024x576.jpg", text: "Sand Island", location: "Java, Indonesia", price: "$148", rating: "4.9", category: "Beach" },
    { image: "https://media.licdn.com/dms/image/D5612AQFa6rvrrdXMbg/article-cover_image-shrink_720_1280/0/1700134577849?e=2147483647&v=beta&t=E29l9EGrhsPPSuEmUCZAUeTANcNX92Y356UWIIY0iXg", text: "Basilika Santo", location: "Venice, Italy", price: "$156", rating: "4.9", category: "Popular destination" },
    { image: "https://example.com/another-image.jpg", text: "Basilika Santo", location: "Mindanao, Philippines", price: "$172", rating: "4.9", category: "Camp" },
];

const categories = ["Popular destination", "Islands", "Surfing", "Nation parks", "Lake", "Beach", "Camp"];

// Category details map
const categoryDetails = {
    "Popular destination": "Explore the most popular destinations around the world, perfect for all types of travelers.",
    Islands: "Discover beautiful islands with white sandy beaches, turquoise waters, and breathtaking views.",
    Surfing: "Catch some waves at these top surfing spots for both beginners and experienced surfers.",
    "Nation parks": "Experience the natural beauty of our national parks with scenic landscapes and diverse wildlife.",
    Lake: "Relax by serene lakes, ideal for peaceful getaways and nature lovers.",
    Beach: "Enjoy the sun, sand, and sea at these stunning beach destinations around the world.",
    Camp: "Get in touch with nature and enjoy camping adventures in beautiful locations.",
};

export default function Places() {
    const [activeCategory, setActiveCategory] = useState("Popular destination");

    const filteredDestinations = destinations.filter((destination) =>
        activeCategory === "All" ? true : destination.category === activeCategory
    );

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-4xl font-bold text-center">Explore more</h2>
            <p className="text-gray-600 text-center mt-2">Let's go on an adventure</p>

            {/* Categories Filter */}
            <div className="flex justify-center gap-3 mt-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg ${
                            activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Category Details */}
            <div className="mt-8 text-center">
                <p className="text-lg text-gray-600">{categoryDetails[activeCategory]}</p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {filteredDestinations.map((destination, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                            <img src={destination.image} alt={destination.text} className="rounded-t-2xl w-full h-[200px] object-cover" />
                            <p className="bg-white text-primary font-semibold rounded-lg p-1 text-sm absolute top-4 right-4">
                                {destination.rating} ⭐
                            </p>
                        </div>
                        <div className="p-4">
                            <h5 className="text-xl font-semibold">{destination.text}</h5>
                            <div className="flex items-center gap-2 mt-2 text-gray-500">
                                <HiOutlineLocationMarker className="text-primary" size={20} />
                                <p>{destination.location}</p>
                            </div>
                            <p className="text-lg font-bold mt-2">{destination.price}/Pax</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
