
"use client";

import { Menu, Globe, Search } from "lucide-react";
import Image from "next/image";


export default function Navbar() {

    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <Image src="/images/pcr-icon1.png" alt="Perfect Choice Rentals logo" width={30} height={30} />
                <span className="text-[var(--primary)] font-semibold md:text-lg text-[20px]">
                    Perfect Choice Rentals
                </span>
            </div>

            {/* Center: Search bar */}
            <div className="hidden md:flex items-center justify-between rounded-full border shadow-md px-4 py-2 space-x-4">
                <button className="text-sm font-medium">Anywhere</button>
                <div className="border-l h-6" />
                <button className="text-sm font-medium">Any week</button>
                <div className="border-l h-6" />
                <button className="text-sm text-gray-500">Add guests</button>
                <div className="bg-pink-600 text-white p-1 rounded-full">
                    <Search size={16} />
                </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center space-x-4">
                <button className="text-sm font-medium md:block hidden">Become a host</button>
                <button className="p-2 rounded-full hover:bg-gray-100 md:block hidden">
                    <Globe size={18} />
                </button>
                <button 
                    className="p-2 rounded-full bg-gray-400 border border-gray-600 hover:shadow-md flex 
                    items-center justify-center space-x-2 relative">
                    <Menu size={18} className="text-gray-900" />
                </button>
            </div>
        </nav>
    );
}

