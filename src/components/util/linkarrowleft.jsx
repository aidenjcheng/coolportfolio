import React from "react";
import ArrowRight from "../svgs/arrowright";
import { Link } from "react-router-dom";

const LinkArrow = ({ link, title, className, style }) => {
  return (
    <Link
      to={link}
      className={`opacity-100 inline-flex items-center gap-1 group hover:opacity-[0.7] transition-all ease-in-out duration-300  ${className} text-[0.7rem]`}
      style={style}
    >
      <ArrowRight className=" rotate-180 group-hover:translate-x-[-3px] " />
      {title}
    </Link>
  );
};

export default LinkArrow;
