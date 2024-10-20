import React from "react";
import LinkArrow from "../util/linkarrowleft";

const Header = ({ title, date }) => {
  return (
    <>
      <div className=" pb-2 mb-5 border-b border-solid border-black/10 flex justify-between w-[576px] mx-auto">
        <LinkArrow title="back" link="/" style={{ fontSize: "0.875rem" }} />
        <h1 className="text-sm">{title}</h1>
        <p className="text-black/40 text-sm">{date}</p>
      </div>
    </>
  );
};

export default Header;
