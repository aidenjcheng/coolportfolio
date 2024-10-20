import React from "react";
import ArrowRight from "../svgs/arrowright";

const ArrowLink = ({ link, title, className, style }) => {
  return (
    <a
      href={link}
      className={`opacity-100 inline-flex items-center gap-1 group hover:opacity-[0.7] transition-all ease-in-out duration-300  ${className} text-[0.7rem]`}
      style={style}
    >
      {title} <ArrowRight />
    </a>
  );
};

export default ArrowLink;
