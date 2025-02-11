"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <div className="flex justify-between bg-blue-600 text-white px-10 py-4">
      <Link className="text-3xl font-bold" href="/">
        Nextjs
      </Link>
      <div className="space-x-4">
        <Link
          className={
            pathName == "/about"
              ? "text-blue500 underline"
              : "text-white hover:underline"
          }
          href="/about"
        >
          {" "}
          About
        </Link>
        <Link
          className={
            pathName == "/contact"
              ? "text-blue500 underline"
              : "text-white hover:underline"
          }
          href="/contact"
        >
          {" "}
          Contact
        </Link>
        <Link
          className={
            pathName == "/products"
              ? "text-blue500 underline"
              : "text-white hover:underline"
          }
          href="/products"
        >
          {" "}
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
