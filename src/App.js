import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import CardList from "./components/card-list/CardList";
import Spinner from "./components/spinner/Spinner";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "sea") => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      .then((data) => {
        this.setState({ images: data.data.results, loading: false });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Search onSearch={this.performSearch} />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <CardList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
