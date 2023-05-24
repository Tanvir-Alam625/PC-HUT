import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex gap-2 items-center justify-center flex-col">
      <h1 className="text-2xl font-semibold text-indigo-900">Opps! 404</h1>
      <p className="text-sm font-medium text-slate-700">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-1 text-sm font-medium rounded border-2 border-indigo-900"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
