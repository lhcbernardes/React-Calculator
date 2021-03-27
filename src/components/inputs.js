import { Component } from "react";
import {Operations} from "../components/operations";
import {Numbers} from "../components/numbers"

export class Inputs extends Component{
  render (){
    return (
      <div id="inputs">
        <Numbers onClick={this.props.onClickOperando} onClickTotal={this.props.onClickOperador}/>
        <Operations onClick={this.props.onClickOperador}/>
      </div>
    );
  }
}