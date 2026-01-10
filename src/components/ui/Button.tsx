type Props = {
  label: string;
  variant?: "primary" | "secondary";
};

export default function Button({ label, variant = "primary" }: Props) {
  const base =
    "rounded-2xl px-6 py-3 font-semibold transition focus:outline-none";

  const styles = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-soft",
    secondary:
      "border border-slate-300 bg-white hover:bg-slate-100",
  };

  return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}
