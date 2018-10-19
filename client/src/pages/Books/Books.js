import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import StartGame from "../../components/StartGame"

class Books extends Component {

  componentDidMount() {
    API.getUsers().then(res => console.log(res));
  };

  render() {
    return (

        <StartGame> 
        
        </StartGame>
    
    );
  }
}

export default Books;
