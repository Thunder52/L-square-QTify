import React from "react";
import LeftSvg from "../../assets/LeftArrow.svg";

const LeftNav = ({ hidden,id }) => {
  return (
    <div
      className={`swiper-button-prev-custom-${id}`}
      style={{
        position: "absolute",
        top: "55%",
        left: "35px",
        zIndex: 10,
        transform: "translateY(-50%)",
        cursor: "pointer",
        display: hidden ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={LeftSvg} alt="left" width="32" />
    </div>
  );
};

export default LeftNav;
