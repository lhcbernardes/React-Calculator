import React,{ Component } from "react";
import {Screen} from "../components/screen";
import {Inputs} from "../components/inputs";

export class Calculator extends Component {
    initialState = {
        operando: '',
        operador: '',
        display: '0',
        resultDisplayed: false
      };
    constructor(props) {
      super(props);
      this.state = this.initialState;
    };
    
    onClickOperando(label)
    {
      if(this.state.display === '0' || isNaN(this.state.display) || this.state.resultDisplayed){
        var display = label;
        this.setState({ resultDisplayed: false, });
      } else {
         display = this.state.display + label;
      }
      
     this.setState({ display: display });
    }
    onClickOperador(label){
      if(this.state.operador.length > 0){
        this.calculate();
        if(label === '='){
          this.setState({
            resultDisplayed: true,
            operador: ''
          });
        } else {
          this.setState({
            resultDisplayed: true,
            operador: label
          });
        }
      } else {
        this.setState({
          operando: this.state.display,
          operador: label,
          display: label
        });
      }
    }

    onClickClean() {
      this.setState(this.getInitialState);
    }

    calculate() {
      var displayResult;
        switch(this.state.operador){
          case '+':
            displayResult = parseFloat(this.state.operando) + parseFloat(this.state.display);
            break;
          case '-':
            displayResult = parseFloat(this.state.operando) - parseFloat(this.state.display);
            break;
          case '/':
            displayResult = parseFloat(this.state.operando) / parseFloat(this.state.display);
            break;
          case 'x':
            displayResult = parseFloat(this.state.operando) * parseFloat(this.state.display);
            break;
          case 'E':
            displayResult = parseFloat(this.state.operando) * parseFloat(this.state.operando);
            break;
          case 'CL':
            this.onClickClean()
            break;
        }
        this.setState({
          operando: displayResult,
          display: displayResult
        });
    }
    render() {
      console.log(this.state.display)
      return (
        <div id="container">
          <Screen displayText={this.state.display} onClickClean={this.onClickClean}/>
          <Inputs onClickOperando={this.onClickOperando} onClickOperador={this.onClickOperador}/>
        </div>
      );
    }
}

