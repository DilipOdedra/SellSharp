export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-center text-slate-400">
      <p className="text-lg font-semibold text-white">SellSharp</p>
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} SellSharp. All rights reserved.
      </p>
    </footer>
  );
}
