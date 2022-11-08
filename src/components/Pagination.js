import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setObjectData,
  setList,
  setDescription,
} from "../StateManagment/DataSlice";
import DrawSportlist from "./DrawSportList";
import ImageDraw from "./ImagesDraw";
import Description from "./Description";
import DefaultImg from "../components/img/sports.jpg";
import "./Pagination.css";

export default function Pagination() {
  const [current, setCurrent] = useState(0);
  const [isHover, setHover] = useState(false);

  const objectData = useSelector((state) => state.data.objecData);

  const list = useSelector((state) => state.data.list);
  const description = useSelector((state) => state.data.description);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://sports.api.decathlon.com/sports")
      .then((resp) => resp.json())
      .then((data) => dispatch(setObjectData(data)));
  }, []);

  const pageOnclick = (num) => {
    setCurrent(num);
    dispatch(setDescription(null));
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

    dispatch(setList(sportList));
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
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              key={num}
              style={{
                margin: 30,
                backgroundColor: current === num ? "yellow" : "aqua",
              }}
              id="numPage"
            >
              {num}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {objectData && (
        <div id="divPage">
          <div>choose page...</div>
          <div style={{ display: "flex" }}>
            {objectData?.data ? draw(objectData.data) : "hello"}
          </div>
        </div>
      )}
      {list?.length && <ImageDraw />}
      <Description />
      {objectData && <DrawSportlist draw={draw} objecData={objectData} />}
    </div>
  );
}
