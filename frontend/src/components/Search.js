import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchkey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(searchkey ? "/search?keyword=" + searchkey : "/");
  };
  return (
    <div className="relative">
      <input
        className="p-2 h-10  rounded-sm w-[22rem] outline-none"
        placeholder="Search Items..."
        value={searchkey}
        onChange={(e) => setSearchKey(e.target.value)}
        onBlur={handleSearch}
      />
      <span
        className="inline bg-white absolute top-2 right-2"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 inline bg-white "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
    </div>
  );
}
