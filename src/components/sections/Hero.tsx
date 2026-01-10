import Container from "../ui/Container";
import Button from "../ui/Button";
import dashboard from "../../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-32">

      
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl" />

      <Container>
        <div className="relative grid gap-24 lg:grid-cols-2 items-center">

          <div>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Sales Intelligence Platform
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
              Predictable Revenue <br />
              <span className="bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                Starts With Visibility
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl text-muted">
              SellSharp gives modern sales teams real-time pipeline clarity,
              forecasting, and execution speed.
            </p>

            <div className="mt-10 flex gap-4">
              <Button label="Request Demo" />
              <Button label="Explore Platform" variant="secondary" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-brand-600/10 blur-2xl" />
            <img
              src={dashboard}
              className="relative rounded-3xl border shadow-soft"
              alt="SellSharp Dashboard"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
