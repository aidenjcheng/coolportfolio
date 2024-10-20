import React from "react";

const ATag = ({ href, children }) => {
  return (
    <a
      href={href}
      className="hover:bg-[#d9d9d9] shadow-[0px_0_0_rgba(255,255,255,0),0px_0_0_rgba(255,255,255,0)] hover:shadow-[4px_0_0_#d9d9d9,-4px_0_0_#d9d9d9] transition-all duration-100 ease cursor-pointer"
    >
      {children}
    </a>
  );
};

export default ATag;
