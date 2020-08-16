import React from "react";
import "./searchBox.css";

const searchBox = ({ placeHolder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};
export default searchBox;
