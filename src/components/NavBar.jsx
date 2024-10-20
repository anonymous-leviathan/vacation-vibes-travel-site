import {useState} from "react";
import {MdClose} from "react-icons/md";
import {HiMenuAlt3} from "react-icons/hi";

export default function NavBar() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    }

    return (<nav>
        <div>
            <div>
                <div>
                    <div>
                        <h2>

                        </h2>
                    </div>
                </div>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Ticket</a>
                    <a href="#">Explore</a>
                    <a href="#">Activity</a>
                </ul>
                <div>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
                {dropdown ? (<div onClick={showDropdown}><MdClose/></div>) : (<div onClick={showDropdown}><HiMenuAlt3/></div>)}
            </div>
            {dropdown && (<div></div>)}
        </div>
    </nav>)
}