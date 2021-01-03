import React from "react";
import NavCafe from "./header/Nav";

function Base({ children, scroll }) {
  return (
    <div>
      <NavCafe showScroll={scroll} />
      <div className="cafe__children">{children}</div>
    </div>
  );
}

export default Base;
