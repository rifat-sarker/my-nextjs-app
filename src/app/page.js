"use client"
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = ()=> {
    router.push('/dashboard')
  }
  return (
    <div className="text-center">
      <h1 className="text-4xl ">This is HomePage</h1>
      <button onClick={handleNavigation} className="px-6 py-2 my-4 bg-pink-400 text-black rounded-lg">Dashboard</button>
    </div>
  );
};

export default HomePage;