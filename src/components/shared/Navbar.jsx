import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-600 text-white px-10 py-4">
      <Link className="text-3xl font-bold" href="/">Nextjs</Link>
      <div className="space-x-4">
        <Link href="/about"> About</Link>
        <Link href="/contact"> Contact</Link>
        <a href="/register"> Register</a>
        <Link href="/login"> Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
