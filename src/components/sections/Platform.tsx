import Container from "../ui/Container";

const capabilities = [
  {
    title: "Pipeline Visibility",
    desc: "Track every deal stage with real-time pipeline insights.",
  },
  {
    title: "Forecast Accuracy",
    desc: "Predict revenue using historical data and trends.",
  },
  {
    title: "Team Performance",
    desc: "Measure rep productivity and conversion metrics.",
  },
];

export default function Platform() {
  return (
    <section className="relative py-32">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 items-center">
       
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
              One Platform.<br />
              <span className="text-brand-600">Complete Sales Control.</span>
            </h2>

            <p className="mt-8 text-xl text-muted max-w-xl">
              SellSharp unifies data, insights, and execution into a single
              sales intelligence platform.
            </p>
          </div>

          <div className="space-y-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border bg-glass p-8 backdrop-blur-glass shadow-soft"
              >
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-muted">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
