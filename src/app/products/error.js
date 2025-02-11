"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-red-500 text-3xl text-center">
        Something went wrong!
      </h1>
      <p>{error.message}</p>
      <div className="text-center">
        <Link
          onClick={() => reset()}
          className="bg-black text-white rounded-lg border p-2"
          href="/products"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
