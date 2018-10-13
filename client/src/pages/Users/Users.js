import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import "./Users.css";
import Player from "../../components/Player/Player";
import Enemy from "../../components/Enemy/Enemy";
import Character from "../../components/Character"
import Enemies from "./enemies.json";
import Arrow from "../../components/Arrow/Arrow";
import UICard from "../../components/UICard";
// import Skeleton_Enemy_transp from "../../Images/Skeleton_Enemy_transp.png"
// import Images from "../../Images/"


class Users extends Component {
  state = {
    playerHp: 20,
    playerAtt: 5,
    enemyHp: 0,
    enemyName: "",
    enemyAtt: 0,
    message: "",
    arrow: "hide",
    enemyHide: "",
    enemyImg: "",
    charName: "Rogue",
    charImg: "./Images/Rogue_Class_resize.png"
  };

  roll = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount(){
    this.setState({
      enemyHp: Enemies[0].hp,
      enemyName: Enemies[0].name,
      enemyAtt: Enemies[0].att,
      enemyImg: Enemies[0].img
    });
  } 

  handleArrow = event => {
    event.preventDefault();
    this.setState({
      enemyName: Enemies[1].name,
      enemyHp: Enemies[1].hp,
      enemyAtt: Enemies[1].att,
      arrow: "hide",
      enemyHide: "",
      message: "",
      enemyImg: Enemies[1].img
    });
  }

  handleBattle = event => {
    event.preventDefault();

    let newHp = this.state.playerHp - this.state.enemyAtt;
    let newEnemyHp = this.state.enemyHp - Math.round(this.roll(this.state.playerAtt/2, this.state.playerAtt));

    if(newEnemyHp <= 0){

      this.setState({
        message: "You win!",
        arrow: "",
        enemyHide: "hide"
      });
      console.log(this.state.enemyHp);
    }
    else{
      this.setState({
        message: "",
        playerHp: newHp,
        enemyHp: newEnemyHp
      })
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Player onClick={this.handleBattle}>This is a button. Click it to attack</Player> */}
        
        <Container>
          
          <Row>

            <Col size="4">
              {/* <Character> */}
                <UICard
                  name = {this.state.charName}
                  img = {this.state.charImg}
                  hp = {this.state.playerHp}
                  styleClass= "player"
                />
              {/* </Character> */}
            </Col>

            <Col size="4">
              <div className="textCard">
                <Player onClick={this.handleBattle}>This is a button. Click it to attack</Player>
                <div>{this.state.charName} has HP: {this.state.playerHp}</div>
                <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
                <div>{this.state.message}</div>
                <Arrow className={this.state.arrow} onClick={this.handleArrow}>To forest</Arrow>          
              </div>
            </Col>

            <Col size="4">
              {/* <Enemy> */}
                <UICard
                  name = {this.state.enemyName}
                  img = {this.state.enemyImg}
                  hp = {this.state.enemyHp}
                  styleClass = "enemy"
                />
              {/* </Enemy>           */}
            </Col>

          </Row>

        </Container>

      </div>
    );
  }
}

export default Users;
