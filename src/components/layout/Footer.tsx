export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold text-white">
              SellSharp
            </h3>
            <p className="mt-4 text-sm">
              Sales intelligence platform for modern revenue teams.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Platform</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Docs</li>
              <li>Support</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm">
          © {new Date().getFullYear()} SellSharp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
