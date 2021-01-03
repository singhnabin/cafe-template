import React from "react";
import "./Index.css";
import CountDown from "./CountDown";

function Index() {
  return (
    <div
      className="cafe__page"
      style={{
        backgroundImage: `url(./images/piice.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      {/* <NavCafe /> */}
      <div className="cafe__countdown">
        <CountDown />
      </div>
    </div>
  );
}

export default Index;
