import React, { Component } from "react";
import "./search.style.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="search-box">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            ref={(input) => (this.query = input)}
            onChange={this.handleChange}
          />
          <button className="btn" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
