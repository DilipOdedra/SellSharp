import Container from "../ui/Container";

const steps = [
  "Capture & Qualify Leads",
  "Track Opportunities",
  "Forecast Revenue",
  "Close & Optimize",
];

export default function Workflow() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <h2 className="text-center text-5xl font-extrabold">
          How SellSharp Works
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10"
            >
              <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {i + 1}
              </span>
              <p className="mt-8 text-lg font-semibold">
                {s}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
