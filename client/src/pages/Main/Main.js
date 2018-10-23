import React, { Component } from "react";
import API from "../../utils/API";
import StartGame from "../../components/StartGame"

class Main extends Component {

  componentDidMount() {
    API.getUser(API.getUserId());
  };

  render() {
    return (

        <StartGame> 
        
        </StartGame>
    
    );
  }
}

export default Main;
