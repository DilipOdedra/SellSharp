import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-600 to-brand-700 py-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl text-center px-4">
        <h2 className="text-6xl font-extrabold">
          Turn Sales Data<br />Into Revenue
        </h2>

        <p className="mt-10 text-xl text-indigo-100">
          Book a demo and see how SellSharp accelerates growth.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <Button label="Request Demo" />
          <Button label="Contact Sales" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
