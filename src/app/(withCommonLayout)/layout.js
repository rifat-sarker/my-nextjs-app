import Navbar from "@/components/shared/Navbar";

export default function CommonLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
