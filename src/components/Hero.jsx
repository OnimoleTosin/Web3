"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import media from "../assets/media.png"


export default function Hero() {
    const router = useRouter()

    return (
        <section className="relative min-h-full bg-gradient-to-b from-[#EEF1FF] to-[#ECFDF3]">
            {/* Container */}
            <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Text */}
                <div>
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-10">
                        <span className="text-blue-600 font-bold text-lg">
                            WalletConnect
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        DappsConnector
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-slate-600 text-lg">
                        Open protocol to communicate securely between Wallets and Dapps
                        (Web3 Apps). The protocol establishes a remote connection using a
                        Bridge server.
                    </p>

                    {/* CTA */}
                    <button
                        onClick={() => router.push("/wallet")}
                        className="
        cursor-pointer
        mt-8
        inline-flex
        items-center
        gap-2
        rounded-4xl
        bg-blue-600
        px-6
        py-3
        font-bold
        text-white
        transform
        transition-all
        duration-300
        ease-in-out
        hover:bg-blue-700
        hover:scale-105
    "
                    >
                        Connect
                        <span
                            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            ›
                        </span>
                    </button>

                </div>

                {/* RIGHT: Illustration */}
                <div className="relative w-full h-[420px]">
                    <Image
                        src={media}
                        alt="Dapps illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}
