import React from "react";

function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      fill="none"
      viewBox="0 0 18 14"
      className={`size-3 transition-all duration-300 ease-in-out ${className}`}
    >
      <path
        stroke="#2d2d2d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M1 7h16m0 0l-6-6m6 6l-6 6"
      ></path>
    </svg>
  );
}

export default ArrowRight;
