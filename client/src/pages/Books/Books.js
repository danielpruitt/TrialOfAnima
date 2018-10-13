import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import StartGame from "../../components/StartGame"

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    genre: ""
  };

  render() {
    return (
      
        // <Container fluid>
        //   <Row>
        //     <Col size="md-6">
        //       <a href="/users">Start Game</a>
        //     </Col>
        //     <Col size="md-6 sm-12">

        //     </Col>
        //   </Row>
        // </Container>

        <StartGame> 
        
        </StartGame>
    
    );
  }
}

export default Books;
