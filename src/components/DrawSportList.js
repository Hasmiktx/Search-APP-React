import React from "react";
import { useSelector } from "react-redux";
export default function DrawSportlist({ draw, objectData }) {
  //const objectData = useSelector((state) => state.data.objectData);
  console.log(objectData, "in Drowsportlist");
  return (
    <>
      <div id="divPage">
        <div>choose page...</div>
        <div style={{ display: "flex" }}>
          {objectData?.data ? draw(objectData.data) : "hello"}
        </div>
      </div>
    </>
  );
}
