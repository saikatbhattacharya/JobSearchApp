import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Input } from 'antd';
import { SearchContext } from '../../contexts';

const { Search } = Input;

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
      <SearchContext.Consumer>
        {context => (
          <Search
            placeholder="Search by keywords (Java, PHP etc)"
            enterButton="Search"
            size="large"
            onSearch={value => context.searchJob(value)}
          />
          )
        }
      </SearchContext.Consumer>
    );
  }
}

export default Searchbar;
