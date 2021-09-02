import React, { Component } from "react";
import * as params from '@params';
export default class TextInput extends Component {

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <input 
        className="sm:absolute mt-px text-center top-24 rounded md:top-32 left-1/2 sm:transform sm:-translate-x-1/2 w-40 md:w-52 border-2 border-black text-xs md:text-base p-1 z-10"
        placeholder={params.placeholder} onChange={this.handleChange} />
    );
  }
}
