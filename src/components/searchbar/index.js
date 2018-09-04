import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Input } from 'antd';

const { Search } = Input;
function onSelect(value) {
  console.log("onSelect", value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}

class Searchbar extends React.Component {
  state = {};

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : []
    });
  };

  render() {
    return (
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    );
  }
}

export default Searchbar;
