import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, job } = this.state;

    return (
      <form action="">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id=""
        />
        <label htmlFor="">Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
          id=""
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
}

export default Form;
