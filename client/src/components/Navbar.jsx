
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className=' top-0 border-b-2 w-full h-20 '>
            <div className='top-0  bg-black w-full h-7 text-white flex justify-center text-center '>
                Announcement : Under Developpement 🛠️
            </div>


            <div className='  flex items-center'>
                <Link href="/"><image src="vercel.svg" width={70} height={70} alt="" /></Link>
            </div>

            <ul className=' max-md:hidden justify-center align-middle  flex gap-7'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='txt-sc' href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/Shop">Shop</Link>
                </li>
            </ul>

            <div className='flex gap-4 px-4 items-center'>
           
            </div>

        </nav>
    )
}

export default Navbar;
