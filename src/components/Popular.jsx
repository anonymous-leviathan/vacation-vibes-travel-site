import { HiOutlineLocationMarker } from "react-icons/hi"; // Correct import for HiOutlineLocationMarker

export default function Popular() {
    const Card = ({ image, text, location }) => {
        return (
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                    <img src={image} alt="Popular Destination" className="rounded-t-2xl w-full h-[300px] object-cover" />
                    <p className="bg-white text-primary font-semibold rounded-lg p-1 text-sm absolute top-4 right-4">20% off</p>
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-semibold">
                        {text}
                    </h5>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <HiOutlineLocationMarker className="text-primary" size={20} /> {/* Updated icon */}
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-6">
            <section className="pt-16 text-center">
                <h2 className="text-4xl font-bold">Popular Destinations</h2>
                <p className="py-4 text-gray-600">Let's enjoy this heaven on earth</p>
                <div className="text-gray-500 lg:w-2/5 mx-auto">Many places to visit, many places to explore. Let's enjoy this heaven on earth</div>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                    <Card
                        image="https://www.studentuniverse.com/blog/wp-content/uploads/2014/04/Most-Beautiful-Places-to-Travel-Featured-Image.jpg"
                        text="SC, Mindanao"
                        location="Mindanao, Philippines"
                    />
                    <Card
                        image="https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-bhopal.jpg"
                        text="Disneyland Tokyo"
                        location="Tokyo, Japan"
                    />
                    <Card
                        image="https://worldwildschooling.com/wp-content/uploads/2024/01/12-Unique-Places-for-Your-European-Travel-Bucket-List_Annecy-France_Armando-Oliveira_AdobeStock_534300469-1-1024x576.jpg"
                        text="Thousand Island"
                        location="Java, Indonesia"
                    />
                    <Card
                        image="https://media.licdn.com/dms/image/D5612AQFa6rvrrdXMbg/article-cover_image-shrink_720_1280/0/1700134577849?e=2147483647&v=beta&t=E29l9EGrhsPPSuEmUCZAUeTANcNX92Y356UWIIY0iXg"
                        text="Basilica Santo"
                        location="Venice, Italy"
                    />
                </div>
            </section>

            <section className="py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Find Trips that Fit a Flexible Lifestyle</h1>
                    <p className="text-lg text-gray-600">Explore the popular destinations around the world</p>
                </div>
                <div className="lg:flex items-center justify-between py-16 gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="bg-blue-400 text-white px-3 py-1 rounded-xl">01</span>
                            <h2 className="font-bold text-lg py-4">Find Trips that Fit Your Freedom</h2>
                            <p className="text-gray-500">
                                Traveling offers freedom and flexibility, solitude and spontaneity, and purpose.
                            </p>
                        </div>
                        <div>
                            <span className="bg-blue-400 text-white px-3 py-1 rounded-xl">02</span>
                            <h2 className="font-bold text-lg py-4">Get Back to Nature by Traveling</h2>
                            <p className="text-gray-500">
                                The world is a playground where you can explore Mother Nature’s beauty.
                            </p>
                        </div>
                        <div>
                            <span className="bg-blue-400 text-white px-3 py-1 rounded-xl">03</span>
                            <h2 className="font-bold text-lg py-4">Reignite Your Taste for Travel</h2>
                            <p className="text-gray-500">
                                There are infinite reasons to love travel, one of them being the glorious food.
                            </p>
                        </div>
                        <button className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-white hover:text-primary border border-primary transition-colors duration-300">
                            Explore More
                        </button>
                    </div>
                    <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                        <img src="https://thumbs.dreamstime.com/b/portrait-hree-beauty-young-women-spreading-their-arms-sand-beach-looking-camera-group-girls-portrait-327349667.jpg" alt="Mountain view" className="rounded-2xl w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
}
