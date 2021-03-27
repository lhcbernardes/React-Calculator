import { Component } from "react";
import {Button} from "../components/button";


export class Numbers extends Component{

  initialState = {
      buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0']
  }
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  
  render(){
    var buttonElements = [];
    for(var i = 0; i < this.state.buttons.length; i++){
      buttonElements.push(
        <Button label={this.state.buttons[i]} onClick={this.props.onClick}/>
      );
    }
    return (
      <div id="numbers">
        {buttonElements}
        <div>
        <Button label="=" onClick={this.props.onClickTotal} className="greenBtn"/>
        </div>
        
      </div>
    );
  }
}
