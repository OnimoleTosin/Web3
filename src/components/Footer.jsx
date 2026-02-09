"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#ECFDF3] to-[#EEF1FF] border-t border-slate-200">
            {/* Container */}
            <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT: Brand */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        ProjectReward
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-sm">
                        Secure protocol for seamless communication between
                        wallets and decentralized applications.
                    </p>
                </div>

                {/* MIDDLE: Navigation */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-slate-600">
                        <li>
                            <Link href="/" className="hover:text-blue-600 transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/wallet" className="hover:text-blue-600 transition">
                                Connect Wallet
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-blue-600 transition">
                                Documentation
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* RIGHT: Legal */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4">
                        Legal
                    </h3>

                    <ul className="space-y-3 text-slate-600">
                        <li>
                            <Link href="#" className="hover:text-blue-600 transition">
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-blue-600 transition">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <span>
                        © {new Date().getFullYear()} ProjectReward. All rights reserved.
                    </span>

                    <span className="mt-3 md:mt-0">
                        Powered by WalletConnect
                    </span>
                </div>
            </div>
        </footer>
    )
}
