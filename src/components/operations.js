import React,{ Component } from "react";
import {Button} from "../components/button";

export class Operations extends Component {
    initialState = { 
      buttons: ['+', '-', '/', 'x','E','CL']
    }
    constructor(props) {
      super(props);
      this.state = this.initialState;
    }
    render() 
    {
      var buttonElements = [];
      for(var i = 0; i < this.state.buttons.length; i++){
        buttonElements.push(<Button label={this.state.buttons[i]} onClick={this.props.onClick}/>);
      }
      return (
        <div id="operations">
          {buttonElements}
        </div>
      );
    }
  }
