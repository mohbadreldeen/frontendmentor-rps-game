import React, { Component } from 'react';
import './style.scss';

export default class Score extends Component {
    constructor(props) {
        super(props);
     
    }
      render() {
        return (
            <div className="score">
                <div>
                    <h1>
                    ROCK<br />
                    PAPER<br /> 
                    SCISSORSH<br />
                    LIZARD<br />
                    SPOCK<br /> 
                    </h1>
                </div>
                <div className="score-number">
                    <label>score</label>
                    {this.props.score}
                </div>
                
                
                
            </div>
          );
      }
    
  }
  
 