import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Users.css";
import Player from "../../components/Player/Player";
import Enemy from "../../components/Enemy/Enemy";
import Enemies from "./enemies.json";
import Arrow from "../../components/Arrow/Arrow";

class Users extends Component {
  state = {
    playerHp: 20,
    playerAtt: 5,
    enemyHp: 0,
    enemyName: "",
    enemyAtt: 0,
    message: "",
    arrow: "hide",
    enemyHide: ""
  };

  roll = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount(){
    this.setState({
      enemyHp: Enemies[0].hp,
      enemyName: Enemies[0].name,
      enemyAtt: Enemies[0].att
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
      message: "" 
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
        <Player onClick={this.handleBattle}>This is a button. Click it to attack</Player>
        <Enemy>Enemy</Enemy>

        <div>You have HP: {this.state.playerHp}</div>
        <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
        <div>{this.state.message}</div>

        <Arrow className={this.state.arrow} onClick={this.handleArrow}>To forest</Arrow>
      </div>
    );
  }
}

export default Users;
