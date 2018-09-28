import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  };

  // // Code is invoked after the component is mounted/inserted into the DOM tree.
  // componentDidMount() {
  //   const url =
  //     "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

  //   fetch(url)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState({ data: result });
  //     });
  // }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    // const { data } = this.state;
    // const result = data.map((entry, index) => {
    //   return <li key={index}>{entry}</li>;
    // });

    // return <ul>{result}</ul>;
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
