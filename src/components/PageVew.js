import React from "react";
import img from "../components/img/imgHead.jpg";
import "./PageVew.css";
import Pagination from "./Pagination";

export default function PageVew() {
  return (
    <>
      <div id="head">
        <div
          id="headZone"
          /* style={{
             backgroundImage: `url(${require("../components/img/imgHead.jpg")})`,
           }}   */
          style={{
            backgroundImage: `url("${img}")`,
          }}
        >
          <h1 id="header">Lets learn more about your favorite sport...</h1>
        </div>
        <Pagination />
      </div>
    </>
  );
}
