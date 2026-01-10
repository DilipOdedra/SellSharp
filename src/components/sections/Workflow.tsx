import Container from "../ui/Container";

const steps = [
  "Capture & Qualify Leads",
  "Track Opportunities",
  "Forecast Revenue",
  "Close & Optimize",
];

export default function Workflow() {
  return (
    <section className="bg-slate-50 py-32">
      <Container>
        <h2 className="text-center text-5xl font-extrabold">
          How SellSharp Works
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative rounded-3xl bg-white p-10 shadow-soft"
            >
              <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                {index + 1}
              </span>
              <p className="mt-8 text-xl font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
