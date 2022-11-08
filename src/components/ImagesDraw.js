import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "../StateManagment/DataSlice";
import { Link } from "react-router-dom";
import "./PageVew.css";

export default function ImageDraw() {
  const list = useSelector((state) => state.data.list);
  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch();

  const infoFunc = (id) => {
    fetch(`https://sports.api.decathlon.com/sports/${id}`)
      .then((response) => response.json())
      .then((obj) =>
        dispatch(
          setDescription(
            obj.data?.attributes?.description ? (
              obj.data?.attributes?.description
            ) : (
              <p>No more info yet...</p>
            )
          )
        )
      );
  };

  return (
    <div
      style={{
        marginLeft: "60px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenenly",
      }}
    >
      {list?.map((item) => (
        <div key={item.id} style={{ margin: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{item.name}</h2>
            </div>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                width: "500px",
                height: "250px",
                marginLeft: "50px",
              }}
            ></div>
            <button
              onClick={() => infoFunc(item.id)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                width: "100px",
                cursor: "pointer",
                backgroundColor: isHover ? "yellow" : "white",
              }}
            >
              <Link>Click for info</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
