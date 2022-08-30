import React from "react";
import "./Pagination.css";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectData: null,
      list: null,
    };
  }
  componentDidMount() {
    console.log("started fetch");
    fetch("https://sports.api.decathlon.com/sports")
      .then((resp) => resp.json())
      .then((object) => this.setState({ objectData: object }));
  }

  pageOnclick = (num) => {
    const start = (num - 1) * 20 + 1;
    const end = num * 20;

    const arrShow = this.state?.objectData?.data.slice(start, end);
    const sportList = arrShow.map((obj) => obj.attributes.name);
    console.log(sportList);
    this.setState({ list: sportList });
    console.log(this.state.list);
  };
  draw(arr) {
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
        {pageArr.map((el) => {
          return (
            <div
              onClick={() => this.pageOnclick(el)}
              key={el}
              style={{ margin: 30 }}
            >
              {el}
            </div>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <div id="divPage">
        <div>choose page</div>
        <div id="numPage">
          {this.state.objectData?.data
            ? this.draw(this.state.objectData.data)
            : null}
        </div>
        <div id="listDiv">
          {this.state.list
            ? this.state.list.map((name) => <li className="li">{name}</li>)
            : null}
        </div>
      </div>
    );
  }
}
