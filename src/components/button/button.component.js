import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonTypes : {
                
                scissors: {
                    icon : "./images/icon-scissors.svg",
                    class: "button-scissors"
                },
                paper : {
                    icon : "./images/icon-paper.svg",
                    class: "button-paper"
                },
                rock : {
                    icon : "./images/icon-rock.svg",
                    class: "button-rock"
                },
                lizard: {
                    icon : "./images/icon-lizard.svg",
                    class: "button-lizard"
                },
                spock: {
                    icon : "./images/icon-spock.svg",
                    class: "button-spock"
                }


            }
        }
     
    }
      render() {
        let buttonType = this.state.buttonTypes[this.props['button-type']]
        console.log('this style')
 console.log(this.props.style)
        return (
            <a style={this.props.style} className={`${buttonType.class} button ${this.props.className}`} href="#">
            <div className="button-body">
                <div className="button-icon-container">
                    <img src={buttonType.icon} />
                </div>
            </div>
                
                
                
            </a>
          );
      }
    
  }
  
 