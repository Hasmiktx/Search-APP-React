import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Description() {
  const description = useSelector((state) => state.data.description);
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        height: "400px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h4>{description}Hi</h4>
    </div>
  );
}
