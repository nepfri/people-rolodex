import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/SearchBox/searchBox";

class App extends Component {
  state = {
    people: [],
    searchField: "",
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ people: users }));
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((p) =>
      p.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>People Rolodex</h1>
        <SearchBox
          placeHolder="search people"
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople}></CardList>
      </div>
    );
  }
}

export default App;
