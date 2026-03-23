"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search){
       router.push(pathname)
    };
    const timer = setTimeout(() => {
      const query = new URLSearchParams({ search });
      router.push(`${pathname}?${query.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, pathname, router]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default SearchInput;
