import { ShoppingCartIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="nav-link">Home</li>
                <li className="nav-link">Products</li>
                <li className="relative top-0 sm:left-[50%] sm:absolute sm:-translate-x-1/2 size-7 sm:size-10">
                    <Image src="/assets/images/logo.svg" fill alt="logo" />
                </li>
                <li className="flex justify-center items-center bg-yellow-50 ml-auto rounded-full size-11">
                    <ShoppingCartIcon className="text-black size-5" />
                </li>
                <li className="nav-link">Contact Support</li>
                <Image src="/assets/images/menu.svg" alt="menu" width={25} height={17} className="sm:hidden ml-2" />
            </ul>
        </nav>
    )
}

export default Navbar