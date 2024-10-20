import React from "react";

const Body = ({ children }) => {
  return (
    <div className="w-[576px] m-auto flex flex-col text-sm mt-10">
      {children}
    </div>
  );
};
export default Body;
