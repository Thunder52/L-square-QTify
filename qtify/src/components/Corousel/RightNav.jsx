import React from "react";
import RightArrow from "../../assets/RightArrow.svg";

const RightNav = ({ hidden,id }) => {
  return (
    <div
      className={`swiper-button-next-custom-${id}`}
      style={{
        position: "absolute",
        top: "55%",
        right: "35px",
        zIndex: 10,
        transform: "translateY(-50%)",
        cursor: "pointer",
        display: hidden ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={RightArrow} alt="right" width="32" />
    </div>
  );
};

export default RightNav;
