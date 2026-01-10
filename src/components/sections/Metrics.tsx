import Container from "../ui/Container";

const stats = [
  { value: "40%", label: "Higher Close Rate" },
  { value: "3×", label: "Pipeline Visibility" },
  { value: "25%", label: "Faster Sales Cycles" },
  { value: "100+", label: "Teams Trust SellSharp" },
];

export default function Metrics() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-extrabold text-indigo-400">
                {s.value}
              </p>
              <p className="mt-4 text-slate-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
