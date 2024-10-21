import {useState} from "react";
import {MdClose} from "react-icons/md";
import {HiMenuAlt3} from "react-icons/hi";

export default function NavBar() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    }

    return (<nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
        <div className="container mx-auto lg:px-3 w-full">
            <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <h2 className="text-primary font-bold text-lg">Tripco</h2>
                    </div>
                </div>
                <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                    <a href="#" className="leading-normal no-underline text-black text-lg hover:text-black">Home</a>
                    <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">Ticket</a>
                    <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">Explore</a>
                    <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">Activity</a>
                </ul>
                <div className="flex gap-4 max-lg:hidden">
                    <button className="bg-transparent rounded shadow h-12 px-6 outline-none text-light hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">Sign In</button>
                    <button className="bg-primary rounded shadow h-12 px-6 outline-none text-black hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">Sign Up</button>
                </div>
                {dropdown ? (<div onClick={showDropdown}><MdClose/></div>) : (
                    <div onClick={showDropdown}><HiMenuAlt3/></div>)}
            </div>
            {dropdown && (<div>
                <div>
                    <ul>
                        <a href="#">Home</a>
                        <a href="#">Ticket</a>
                        <a href="#">Explore</a>
                        <a href="#">Activity</a>
                    </ul>
                </div>
            </div>)}
        </div>
    </nav>)
}