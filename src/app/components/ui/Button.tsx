export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base = "px-6 py-3 rounded-lg font-semibold transition";
  const styles = {
    primary: base + " bg-orange-500 text-white hover:bg-orange-600",
    secondary: base + " bg-white text-orange-500 hover:bg-orange-100",
  };

  return <button className={styles[variant]}>{children}</button>;
}
