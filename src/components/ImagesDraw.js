import React from "react";
import "./PageVew.css";

export default function ImageDraw({ list, infoFunc }) {
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
              style={{ width: "100px", cursor: "pointer" }}
            >
              Click for info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
