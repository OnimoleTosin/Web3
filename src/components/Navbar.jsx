import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#EEF1FF]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-blue-600">
          WalletConnect
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <Link href="#">Developers</Link>
          <Link href="#">Docs</Link>
          <Link href="#">Support</Link>
          <Link href="#">Blog</Link>
        </nav>

        {/* CTA */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition">
          Connect
        </button>
      </div>
    </header>
  )
}
