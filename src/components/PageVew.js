import React from "react";

import "./PageVew.css";
import Pagination from "./Pagination";
export default function PageVew() {
  return (
    <>
      <div id="head">
        <div
          id="headZone"
          style={{ backgroundImage: "url(../public/img/imgHead.jpg)" }}
        >
          <h1 id="header">Lets learn more about your favorite sport...</h1>
        </div>
        <Pagination />
      </div>
      <div id="context"></div>
    </>
  );
}
