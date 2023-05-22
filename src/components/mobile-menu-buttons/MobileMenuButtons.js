import React from "react";
import { Link } from "react-router-dom";

export const MobileMenuButtons = ({ userLinkObj, app }) => {
  return (
    <Link to={userLinkObj.link}>
      <div
        style={{
          backgroundColor: app === "inblock" ? "#A7A8A9" : "white",
          height: "4rem",
        }}
        className="m-4 d-flex align-items-center justify-content-center"
      >
        <h4 className="mb-0">{userLinkObj.text}</h4>
      </div>
    </Link>
  );
};
