import React from "react";
import LinkArrow from "./components/util/linkarrowleft";

const CoolFonts = () => {
  return (
    <div className="w-[576px] m-auto flex flex-col text-sm mt-10">
      <div className="pb-5 mb-5 border-b border-solid border-black/10 flex">
        <LinkArrow title="back" link="/" style={{ fontSize: "0.875rem" }} />
      </div>
      noi grotesk, ease Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br />
      Voluptate in explicabo nisi ipsa eum maiores quo iure deleniti. Unde ipsa
      <br />
      quidem eveniet ut sunt architecto neque excepturi nobis accusamus rerum?
      <br />
    </div>
  );
};

export default CoolFonts;
