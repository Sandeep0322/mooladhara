import React from "react";
import { components } from "react-select";

const CustomPlaceholder = (props) => {
  return (
    <components.Placeholder {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="search.svg" // Replace with your search logo path
          alt="Search"
          style={{ marginRight: "8px" }}
        />
        <span>{props.children}</span>
      </div>
    </components.Placeholder>
  );
};

export default CustomPlaceholder;
