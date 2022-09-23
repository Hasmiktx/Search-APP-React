import React from "react";
export default function DrawSportlist(props) {
  return (
    <>
      <div id="divPage">
        <div>choose page...</div>
        <div style={{ display: "flex" }}>
          {props.objectData?.data ? props.draw(props.objectData.data) : null}
        </div>
      </div>
    </>
  );
}
