import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      {["order", "product", "review"].map((route) => (
        <div key={route} >
          <Link href={`/admin-dashboard/${route}`}>{route}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
