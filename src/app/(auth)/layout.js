import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="text-center">
      {children}
      <footer>This is footer</footer>
    </div>
  );
}
