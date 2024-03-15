
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className='top-0 bg-black w-full h-7 text-white flex justify-center items-center'>
                Announcement: Under Development 🛠️
            </div>
        <nav className='top-0 border-b-2 w-full h-20 flex justify-between items-center'>
            

            <div className='flex items-center justify-center m-4'>
                <Link to="/">
                    <img src="/hero.jpg" alt="FSM" />
                </Link>
            </div>

            <ul className='max-md:hidden flex justify-center gap-7'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='txt-sc' to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>

            <div className='flex gap-4 px-4 items-center'>
                {/* Add your additional content here */}
                <Link to="/signup" className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
