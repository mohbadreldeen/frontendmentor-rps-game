import React, { Component } from 'react';
import Button from '../button/button.component';
import './style.scss';

export default class Pentagon extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
        "width": 329,
        "height": 313,
        "vertex" : [
          "scissors",
            "paper",
          "rock",
          "lizard",
          "spock"
         ]
       }
     
    }
      render() {
        var a = ( 2 * this.state.height) / Math.pow((5+2*Math.pow(5, 1/2)), 1/2) ; 
        var r = (a / 10) * Math.pow((50+10 * Math.pow(5, 1/2) ), 1/2);
        return (
         <div className="pentagon" >
           {this.state.vertex.map((value, index) => {
            var style = {transform: `translate(${r * Math.sin(2 * Math.PI * index / 5)}px, ${ -r * Math.cos(2 * Math.PI * index / 5) }px)`};
            return <Button style={style}  key={value} button-type={value} className="pentagon-vertex "/>
          })}
           
         </div>);
      }
    
  }
  
 