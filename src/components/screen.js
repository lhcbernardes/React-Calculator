import React, { Component } from "react";

export class Screen extends Component{

    render()
    {
      return (
        <div id="display">
          
          {/* <span className="clean" onClick={this.props.onClickClean}>x</span> */}
          {this.props.displayText}
        </div>
      );
    }
  }