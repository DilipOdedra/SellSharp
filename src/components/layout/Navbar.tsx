import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-glass backdrop-blur-glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <span className="text-xl font-extrabold">SellSharp</span>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-brand-600" href="#">Platform</a>
          <a className="hover:text-brand-600" href="#">Solutions</a>
          <a className="hover:text-brand-600" href="#">Resources</a>
          <Button label="Request Demo" />
        </nav>

        <button className="md:hidden text-xl">☰</button>
      </div>
    </header>
  );
}
