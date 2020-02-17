import React, { Component } from 'react';

export default class Score extends Component {
    constructor(props) {
        super(props);
    
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    
        // this.state = {
        //   username: '',
        //   description: '',
        //   duration: 0,
        //   date: new Date(),
        //   users: []
        // }
      }
      render() {
        return (
            <div className="score">
                {this.props.score}
            </div>
          );
      }
    
  }
  
 