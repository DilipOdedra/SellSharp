import Container from "../ui/Container";

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <h2 className="text-center text-5xl font-extrabold">
          Trusted by Revenue Leaders
        </h2>

        <div className="mt-20 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 p-12">
          <p className="text-2xl italic leading-relaxed text-slate-700">
            “SellSharp has become the foundation of our sales operations.
            Forecasting is accurate, and execution is faster than ever.”
          </p>

          <div className="mt-8">
            <p className="font-semibold">Rahul Sharma</p>
            <p className="text-slate-500">VP of Sales</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
