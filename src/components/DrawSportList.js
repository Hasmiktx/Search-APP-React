import React from "react";
export default function DrawSportlist(props) {
  return (
    <>
      <div id="divPage">
        <div>choose page...</div>
        <div style={{ display: "flex" }}>
          {props.state.objectData?.data
            ? props.draw(props.state.objectData.data)
            : null}
        </div>
      </div>
    </>
  );
}
