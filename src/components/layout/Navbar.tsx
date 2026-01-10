import { useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SellSharp
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
              <a className="hover:text-white transition" href="#">Platform</a>
              <a className="hover:text-white transition" href="#">Solutions</a>
              <a className="hover:text-white transition" href="#">Resources</a>
              <a className="hover:text-white transition" href="#">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm text-slate-300 hover:text-white transition">
                Sign in
              </button>
              <Button label="Request Demo" />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl text-white"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-slate-800">
              <span className="text-lg font-extrabold text-white">
                SellSharp
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-white"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 py-10 text-lg text-slate-300">
              <a onClick={() => setOpen(false)} href="#" className="hover:text-white">
                Platform
              </a>
              <a onClick={() => setOpen(false)} href="#" className="hover:text-white">
                Solutions
              </a>
              <a onClick={() => setOpen(false)} href="#" className="hover:text-white">
                Resources
              </a>
              <a onClick={() => setOpen(false)} href="#" className="hover:text-white">
                Pricing
              </a>

              <div className="h-px bg-slate-800 my-2" />

              <button
                onClick={() => setOpen(false)}
                className="text-left text-slate-300 hover:text-white transition"
              >
                Sign in
              </button>

              <div className="mt-4">
                <Button label="Request Demo" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
