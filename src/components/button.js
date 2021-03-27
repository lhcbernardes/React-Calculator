import React,{ Component } from "react";

export class Button extends Component{
  render(){
      var classes = ['defaultButton'];
      classes.push(this.props.className);
      return (
        <button type="button" className={classes.join(' ')} onClick={(e) => this.props.onClick(e, this.props.label)}>
          {this.props.label}
        </button>
      );
    }
}

