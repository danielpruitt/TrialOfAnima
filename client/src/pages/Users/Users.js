import React, { Component } from "react";
import "./Users.css";
import Player from "../../components/Player/Player";
import Enemy from "../../components/Enemy/Enemy";
import Enemies from "./enemies.json";
import Arrow from "../../components/Arrow/Arrow";
import Locations from "./locations.json";
import Characters from "./characters.json";
import CharacterSelect from "../../components/CharacterSelect/CharacterSelect";
import Card from "../../components/Card/Card";

class Users extends Component {
  state = {
    playerHp: 140,
    playerAtt: 40,
    playerSuperAtt: 60,
    playerDef: 25,
    enemyHp: 0,
    enemyName: "",
    enemyAtt: 0,
    enemyCriticalAtt: 0,
    message: "",
    arrow: "hide",
    charHide: "",
    enemyHide: "",
    combatHide: "hide",
    cardHide: "hide",
    startBtnHide: "hide",
    startCombat: "hide",
    cardBtnHide: "hide",
    location_id: 0,
    next_location: ""
  };

  roll = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    let usedEnemiesArr = [];
    let randEnemy = Math.floor(Math.random() * Enemies.length);
    usedEnemiesArr.push(randEnemy);
    this.setState({
      enemyHp: Enemies[randEnemy].hp,
      enemyName: Enemies[randEnemy].name,
      enemyAtt: Enemies[randEnemy].att,
      enemyCriticalAtt: Enemies[randEnemy].criticalAtt
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

  // BEGIN REACT ATTACK FUNCTIONS =======================================================================================
  handleAttack = event => {
    event.preventDefault();

    // PLAYER ATTACKS ENEMY FUNCTION
    let playerAttackFunction = () => {

      let attackChoice = Math.random();
      console.log(attackChoice);

      if (attackChoice <= .66) {

        // STANDARD ATTACK
        let playerStandardAttackDmgDealt = Math.round(this.roll(this.state.playerAtt / 2, this.state.playerAtt));
        console.log("You Dealt " + playerStandardAttackDmgDealt + " points of damage to the enemy!")
        adjustEnemyHp(playerStandardAttackDmgDealt);

      } else {

        // CRITICAL ATTACK
        let playerCriticalAttackDmgDealt = Math.round(this.roll(this.state.playerSuperAtt / 2, this.state.playerSuperAtt));
        console.log("You Dealt a CRITICAL HIT with " + playerCriticalAttackDmgDealt + " points of damage to the enemy!")
        adjustEnemyHp(playerCriticalAttackDmgDealt);
      }
    }

    // ADJUST THE ENEMY HP AFTER THEY ARE ATTACKED FUNCTION
    let adjustEnemyHp = (playerAttackDmgDealt) => {
      let newEnemyHp = this.state.enemyHp - playerAttackDmgDealt;
      console.log("Enemy HP after attack " + newEnemyHp);
      this.setState({
        enemyHp: newEnemyHp
      }, () => updateGameStateOnVictory(newEnemyHp));

    }

    console.log("BEFORE IF STATEMENT EXECUTING " + this.state.enemyHp);

    let updateGameStateOnVictory = (newEnemyHp) => {
      if (newEnemyHp <= 0) {
        console.log("IF STATEMENT EXECUTING");

        //PREPARE FOR WINNING UPDATE AND LOCATION CHANGE
        let newLocation = this.state.location_id + 1;
        let location_name = Locations[newLocation].name;
        console.log(location_name);
        this.setState({
          message: "You win!",
          arrow: "",
          enemyHide: "hide",
          location: newLocation,
          next_location: location_name
        }, () => console.log("NEXT ROUND FIGHT!"));
      }
    }


    // ENEMY ATTACKS PLAYER FUNCTION
    let enemyDamagesPlayer = () => {

      if (this.state.enemyHp <= 0) {
        console.log("NOTHINGNGNGNNG");
      }
      else {
        let attackChoice = Math.random();
        console.log(attackChoice);

        if (attackChoice <= .66) {

          //STANDARD ATTACK
          let enemyStandardAttackedFor = Math.round(this.roll(this.state.enemyAtt / 2, this.state.enemyAtt));
          adjustPlayerHp(enemyStandardAttackedFor);


        } else {

          //SUPER ATTACK
          let enemySuperAttackedFor = Math.round(this.roll(this.state.enemyCriticalAtt / 2, this.state.enemyCriticalAtt));
          console.log("Enemy hit you with a SUPER!");
          adjustPlayerHp(enemySuperAttackedFor);
        }
      }
    };


    // ADJUST PLAYER HP AFTER BEING ATTACKED FUNCTION
    let adjustPlayerHp = (incomingDamage) => {
      console.log("The enemy damaged you " + incomingDamage + " points!");
      console.log("=================================================");
      let newHp = this.state.playerHp - incomingDamage;
      console.log("Players HP after attack " + newHp);
      this.setState({
        playerHp: newHp
      }, () => updateGameStateOnDefeat(newHp));
    }

    console.log("The playerHP STATE is set to " + this.state.playerHp);

    let updateGameStateOnDefeat = (newHp) => {
      if (newHp <= 0) {
        this.setState({
          message: "You LOSE GAME OVER!",
          arrow: "",
          enemyHide: "hide"
        });
      }
    }


    playerAttackFunction();
    setTimeout(enemyDamagesPlayer, 1000);

  }

  // BEGIN DEFENSE REACT FUNCTIONS =========================================================================================
  handleDefense = event => {
    event.preventDefault();

    // PLAYER CHOOSES TO DEFEND -- ENEMY TAKES NO DAMAGE
    let playerDefenseFunction = () => {
      let damageDeflected = this.state.enemyAtt - Math.round(this.roll(this.state.playerDef / 2, this.state.playerDef));
      console.log("Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!");
      adjustPlayerHp(damageDeflected);
    }

    // ADJUST PLAYER HP AFTER DEFENDING FUNCTION
    let adjustPlayerHp = (damageDeflected) => {
      let newHp = this.state.playerHp - damageDeflected;
      this.setState({
        playerHp: newHp
      }, () => updateGameOnDefenseFailure(newHp))
    }

    let updateGameOnDefenseFailure = (newHp) => {
      if (newHp <= 0) {
        this.setState({
          message: "You LOSE GAME OVER!",
          arrow: "",
          enemyHide: "hide"
        }, () => console.log("GAME OVER LOG"));
      }
    }

    playerDefenseFunction();

  }


  ///CHARACTER SELECT FUNCTION to add to state
  handleCharacterState = event => {

    this.setState({
      playerHp: event.target.getAttribute("hp"),
      playerAtt: event.target.getAttribute("att"),
      playerDef: event.target.getAttribute("def"),
      playerSuperAtt: event.target.getAttribute("superatt"),
      startBtnHide: ""
    });

  }

  ///CHARACTER SELECT FUNCTION to start combat
  startAdventure = () => {
    this.setState({
      charHide: "hide",
      cardHide: "",
      cardBtnHide: ""
    });
  }

  ///START COMBAT FUNCTION 
  startCombat = () => {
    this.setState({
      cardHide: "hide",
      combatHide: ""
    });
  }


  render() {
    return (
      <div className="App">

        <div className={this.state.charHide}>
          {Characters.map(characters => {
            return (<CharacterSelect onClick={this.handleCharacterState} key={characters.id} att={characters.att} def={characters.def} hp={characters.hp} superatt={characters.superAtt}>{characters.name}</CharacterSelect>)
          })}

          <button className={this.state.startBtnHide} onClick={this.startAdventure}>Embark!</button>
        </div>


        <div className={this.state.combatHide}>
          <Player onClick={this.handleAttack}>Click to attack</Player>
          <Player onClick={this.handleDefense}>Click to defend</Player>
          <Enemy>Enemy</Enemy>

          <div>You have HP: {this.state.playerHp}</div>
          <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
          <div>{this.state.message}</div>

          <Arrow className={this.state.arrow} onClick={this.handleArrow}><a href={'/locations/' + this.state.next_location}>To {this.state.next_location}</a></Arrow>
        </div>

        <div className={this.state.card}>
        
        <Card className={this.state.cardHide}>TEXT GOES HERE</Card>

        <button className={this.state.cardBtnHide} onClick={this.startCombat}>Start combat</button>
        
        </div>

      </div>
    );
  }
}

export default Users;
