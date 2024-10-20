import React from "react";
import { Link } from "react-router-dom";
const LinkArrow = ({ href, children }) => {
  return (
    <Link
      to={href}
      className="hover:bg-[#d9d9d9] shadow-[4px_0_0_rgba(255,255,255,0),-4px_0_0_rgba(255,255,255,0)] hover:shadow-[4px_0_0_#d9d9d9,-4px_0_0_#d9d9d9] transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default LinkArrow;
