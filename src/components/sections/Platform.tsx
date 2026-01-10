import Container from "../ui/Container";

const items = [
  {
    title: "Pipeline Intelligence",
    desc: "Real-time visibility into every deal and stage.",
  },
  {
    title: "Revenue Forecasting",
    desc: "Accurate forecasts driven by historical data.",
  },
  {
    title: "Team Performance",
    desc: "Track productivity and conversion metrics.",
  },
];

export default function Platform() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
              One Platform.<br />
              <span className="text-indigo-400">
                Total Sales Control.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-slate-300">
              Everything your revenue team needs — unified,
              intelligent, and built to scale.
            </p>
          </div>

          <div className="space-y-6">
            {items.map((i) => (
              <div
                key={i.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {i.title}
                </h3>
                <p className="mt-2 text-slate-300">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
