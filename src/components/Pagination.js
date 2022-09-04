import React from "react";
import DrawSportlist from "./DrawSportList";
import ImageDraw from "./ImagesDraw";
import Description from "./Description";
import DefaultImg from "../components/img/sports.jpg";
import "./Pagination.css";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectData: null,
      list: null,
      describtion: null,
    };
  }
  componentDidMount() {
    fetch("https://sports.api.decathlon.com/sports")
      .then((resp) => resp.json())
      .then((object) => this.setState({ objectData: object }));
  }

  pageOnclick = (num) => {
    const start = (num - 1) * 20 + 1;
    const end = num * 20;

    const arrShow = this.state?.objectData?.data.slice(start, end);

    const sportList = arrShow.map((obj) => ({
      id: obj.id,
      name: obj.attributes.name,
      img: obj.relationships.images.data.length
        ? obj.relationships.images.data[0].url
        : DefaultImg,
    }));

    this.setState({ list: sportList });
  };
  draw = (arr) => {
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
              onClick={() => this.pageOnclick(num)}
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
  infoFunc = (id) => {
    fetch(`https://sports.api.decathlon.com/sports/${id}`)
      .then((response) => response.json())
      .then((obj) =>
        this.setState({
          describtion: obj.data?.attributes?.description ? (
            obj.data?.attributes?.description
          ) : (
            <p>No more info yet...</p>
          ),
        })
      );
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DrawSportlist state={this.state} draw={this.draw} />

        {this.state.list?.length && (
          <ImageDraw list={this.state.list} infoFunc={this.infoFunc} />
        )}
        <Description description={this.state.describtion} />
        <DrawSportlist state={this.state} draw={this.draw} />
      </div>
    );
  }
}
