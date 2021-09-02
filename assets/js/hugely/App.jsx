import React, { Component } from 'react';
import TextInput from "./TextInput";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "HUGE"
    };
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value || "HUGE"
    });
  };

  render() {
    return (
      <div className="text-center">
        <TextInput textChange={this.handleTextChange} />
        <div className="p-px text-8xl sm:text-9xl md:text-huge font-black max-w-7xl my-3 mx-auto uppercase relative z-0">
          {this.state.text}
        </div>

      </div>
    );
  }
}
