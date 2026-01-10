import Container from "../ui/Container";
import Button from "../ui/Button";
import dashboard from "../../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
    
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

      <Container>
        <div className="relative grid gap-20 py-32 lg:grid-cols-2 items-center">
          
          
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-300">
              Revenue Intelligence Platform
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
              Predictable Revenue <br />
              <span className="text-indigo-400">Starts With Visibility</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-slate-300">
              SellSharp gives sales leaders complete pipeline clarity,
              forecasting accuracy, and execution speed.
            </p>

            <div className="mt-10 flex gap-4">
              <Button label="Request Demo" />
              <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition">
                View Platform
              </button>
            </div>
          </div>

         
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 blur-2xl" />
            <img
              src={dashboard}
              alt="SellSharp dashboard"
              className="relative rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
