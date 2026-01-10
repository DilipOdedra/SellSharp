import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <span className="inline-block mb-6 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
          Revenue Intelligence Platform
        </span>

        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Turn Your Sales Data <br />
          Into Predictable Revenue
        </h2>

        <p className="mt-8 text-xl text-indigo-100 max-w-2xl mx-auto">
          SellSharp helps sales leaders gain visibility, forecast accurately,
          and close deals faster — all from one platform.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <Button label="Request Demo" />
          <button className="rounded-2xl border border-white/40 px-8 py-4 font-semibold hover:bg-white/10 transition">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
