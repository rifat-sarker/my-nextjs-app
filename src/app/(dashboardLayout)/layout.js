import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
