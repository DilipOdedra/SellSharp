import Container from "../ui/Container";

const metrics = [
  { value: "40%", label: "Increase in Close Rate" },
  { value: "3x", label: "Pipeline Visibility" },
  { value: "25%", label: "Faster Deal Cycles" },
  { value: "100+", label: "Sales Teams Trust Us" },
];

export default function Metrics() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-5xl font-extrabold text-brand-600">
                {m.value}
              </p>
              <p className="mt-4 text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
