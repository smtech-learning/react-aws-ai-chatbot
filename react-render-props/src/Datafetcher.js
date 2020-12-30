import React, { Component } from "react";

class Datafetcher extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      data: ""
    };
  }

  componentDidMount() {
    this.setState({ name: "munnangi" });
    fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    return (
      <div>
        <h1> This is from Datafetcher {this.state.name}</h1>
        {this.props.children(this.state.name, this.state.data)}
      </div>
    );
  }
}

export default Datafetcher;
