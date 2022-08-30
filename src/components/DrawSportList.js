import React from "react";
export default function DrawSportlist({ obj }) {
  console.log("started DrawSport");

  const arr = obj.data;
  const pageArr = [];
  let page = Math.floor(arr.length / 20);
  if (page >= 4) {
    page = 4;
  }

  for (let i = 1; i <= page; i++) {
    pageArr.push(i);
  }
  console.log(pageArr);
}
