import React, { useEffect, useState } from "react";
import DrawSportlist from "./DrawSportList";
import ImageDraw from "./ImagesDraw";
import Description from "./Description";
import DefaultImg from "../components/img/sports.jpg";
import "./Pagination.css";

export default function Pagination() {
  const [objectData, setObjecData] = useState(null);
  const [list, setList] = useState(null);
  const [describtion, setDescription] = useState(null);

  useEffect(() => {
    fetch("https://sports.api.decathlon.com/sports")
      .then((resp) => resp.json())
      .then((object) => setObjecData(object));
  }, []);

  const pageOnclick = (num) => {
    const start = (num - 1) * 20 + 1;
    const end = num * 20;

    const arrShow = objectData?.data.slice(start, end);

    const sportList = arrShow.map((obj) => ({
      id: obj.id,
      name: obj.attributes.name,
      img: obj.relationships.images.data.length
        ? obj.relationships.images.data[0].url
        : DefaultImg,
    }));

    setList(sportList);
  };
  const draw = (arr) => {
    const pageArr = [];
    let page = Math.floor(arr.length / 20);
    if (page >= 4) {
      page = 4;
    }

    for (let i = 1; i <= page; i++) {
      pageArr.push(i);
    }
    return (
      <>
        {pageArr.map((num) => {
          return (
            <div
              onClick={() => pageOnclick(num)}
              key={num}
              style={{ margin: 30 }}
              id="numPage"
            >
              {num}
            </div>
          );
        })}
      </>
    );
  };
  const infoFunc = (id) => {
    fetch(`https://sports.api.decathlon.com/sports/${id}`)
      .then((response) => response.json())
      .then((obj) =>
        setDescription(
          obj.data?.attributes?.description ? (
            obj.data?.attributes?.description
          ) : (
            <p>No more info yet...</p>
          )
        )
      );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DrawSportlist objectData={objectData} draw={draw} />

      {list?.length && <ImageDraw list={list} infoFunc={infoFunc} />}
      <Description description={describtion} />
      <DrawSportlist objectData={objectData} draw={draw} />
    </div>
  );
}
