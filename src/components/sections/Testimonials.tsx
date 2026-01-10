import Container from "../ui/Container";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-32">
      <Container>
        <h2 className="text-center text-5xl font-extrabold">
          Trusted by Revenue Leaders
        </h2>

        <div className="mt-20 max-w-4xl mx-auto rounded-3xl bg-white p-12 shadow-soft">
          <p className="text-2xl italic text-slate-700 leading-relaxed">
            “SellSharp transformed how we forecast revenue and manage our
            sales pipeline. It’s now the backbone of our sales operations.”
          </p>

          <div className="mt-8">
            <p className="font-semibold">Rahul Sharma</p>
            <p className="text-muted">VP of Sales</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
