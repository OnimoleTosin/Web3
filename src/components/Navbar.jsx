"use client";

import { UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function Navbar() {
  const router = useRouter()


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#EEF1FF]/90 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-extrabold text-blue-600 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          WalletConnect
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700 font-medium">
          <Link
            href="#"
            className="relative hover:text-blue-600 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Developers
          </Link>
          <Link
            href="#"
            className="relative hover:text-blue-600 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="relative hover:text-blue-600 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Support
          </Link>
          <Link
            href="#"
            className="relative hover:text-blue-600 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/wallet")}
          className="rounded-4xl bg-blue-600 px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 flex items-center justify-center"
        >
          <span className="hidden sm:inline">Connect</span>
          <UserIcon className="h-6 w-6 sm:hidden" />
        </button>


      </div>
    </header>
  )
}
