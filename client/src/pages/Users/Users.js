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
import UICard from "../../components/UICard";
import UICardEnemy from "../../components/UICardEnemy";
import { Col, Row, Container } from "../../components/Grid";
import { Animated } from "react-animated-css";


class Users extends Component {
  state = {
    //COMBAT STATE COMPONENTS
    playerClass: "",
    playerTurn: true,
    playerHp: 140,
    playerAtt: 40,
    playerSuperAtt: 60,
    playerDef: 25,
    playerName: "",
    playerImage: "",
    enemyHp: 0,
    enemyName: "",
    enemyAtt: 0,
    enemyCriticalAtt: 0,
    enemyImage: "",
    message: "",
    message2: "",
    arrow: "hide",
    enemySelector: 0,
    //DISPLAY STATE COMPONENTS
    charHide: "",
    enemyHide: "",
    combatHide: "hide",
    cardHide: "hide",
    startBtnHide: "hide",
    startCombat: "hide",
    cardBtnHide: "hide",
    storyHide: "",
    gameOverId: 6,
    location_id: 0,
    current_location: "",
    next_location: ""
  };

  roll = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    let currentLocationId = this.state.location_id;
    let currentLocationName = Locations[currentLocationId].name;
    this.setState({
      enemyHp: Enemies[this.state.enemySelector].hp,
      enemyName: Enemies[this.state.enemySelector].name,
      enemyAtt: Enemies[this.state.enemySelector].att,
      enemyCriticalAtt: Enemies[this.state.enemySelector].criticalAtt,
      enemyImage: Enemies[this.state.enemySelector].image,
      current_location: currentLocationName
    });
  }


  // BEGIN REACT ATTACK FUNCTIONS =======================================================================================
  handleAttack = event => {
    event.preventDefault();

    // DISABLE THE ATTACK BUTTON

    // DISABLE THE DEFEND BUTTON

    // PLAYER ATTACKS ENEMY FUNCTION
    let playerAttackFunction = () => {

      if(this.state.playerTurn === true){

        this.setState({
          playerTurn: false
        });

        let attackChoice = Math.random();
        console.log("% guiding Critical chances " + attackChoice);
  
        if (attackChoice <= .66) {
  
          // STANDARD ATTACK
          let playerStandardAttackDmgDealt = Math.round(this.roll(this.state.playerAtt / 2, this.state.playerAtt));
          this.setState({
            message: "You Dealt " + playerStandardAttackDmgDealt + " points of damage to the enemy!"
          }, () => console.log("You Dealt " + playerStandardAttackDmgDealt + " points of damage to the enemy!"));
          adjustEnemyHp(playerStandardAttackDmgDealt);
  
        } else {
  
          // CRITICAL ATTACK
          let playerCriticalAttackDmgDealt = Math.round(this.roll(this.state.playerSuperAtt / 2, this.state.playerSuperAtt));
          this.setState({
            message: "You Dealt a CRITICAL HIT with " + playerCriticalAttackDmgDealt + " points of damage to the enemy!"
          }, () => console.log("You Dealt a CRITICAL HIT with " + playerCriticalAttackDmgDealt + " points of damage to the enemy!"));
          
          adjustEnemyHp(playerCriticalAttackDmgDealt);
        }
      }

      
    }


    // PREPARE FOR WINNING UPDATE AND LOCATION CHANGE
    let updateGameStateOnVictory = (newEnemyHp) => {
      if (newEnemyHp <= 0) {

        this.setState({
          message2: "VICTORIUS!"
        }, () => console.log("VICTORIUS"));

        let goToNewLocation = () => {

          let newLocation = this.state.location_id + 1;
          let location_name = Locations[newLocation].name;
          let newEnemySelected = this.state.enemySelector + 1
          this.setState({
            message: "Location coming up next... " + location_name
          }, () => console.log("Location coming up next... " + location_name));
        
          // console.log(this.state.location_id);
          if (this.state.location_id === 4) {
            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "hide",
              storyHide: "The End",
              message: "CONGRATULATIONS ON YOUR VICTORY"
            }, () => console.log("THANKS FOR PLAYING"));

          } else if (this.state.location_id === 3) {

            console.log(localStorage.getItem("PlayerClass"));

            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "",
              storyHide: "hide",
              message: "",
              message2: "",
              location_id: newLocation,
              current_location: location_name,
              enemySelector: newEnemySelected
            }, () => console.log("Traveling to next location!"));

          } else {
            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "",
              message: "",
              message2: "",
              location_id: newLocation,
              current_location: location_name,
              enemySelector: newEnemySelected
            }, () => console.log("Traveling to next location!"));
          }
      }
      setTimeout(goToNewLocation, 2500);
      }
    }

    // ADJUST THE ENEMY HP AFTER THEY ARE ATTACKED FUNCTION
    let adjustEnemyHp = (playerAttackDmgDealt) => {
      let newEnemyHp = this.state.enemyHp - playerAttackDmgDealt;
      console.log("Enemy HP after attack " + newEnemyHp);
      this.setState({
        enemyHp: newEnemyHp
      }, () => setTimeout(updateGameStateOnVictory(newEnemyHp), 1000));
    }

    // ENEMY ATTACKS PLAYER FUNCTION
    let enemyDamagesPlayer = () => {
      if (this.state.enemyHp <= 0) {

      } else {

        this.setState({
          playerTurn: true
        });

        let attackChoice = Math.random();
        console.log("% guiding Critical chances " + attackChoice);

        // RE-ENABLE THE ATTACK AND DEFEND BUTTONS

        if (attackChoice <= .66) {

          //STANDARD ATTACK
          let enemyStandardAttackedFor = Math.round(this.roll(this.state.enemyAtt / 2, this.state.enemyAtt));
          this.setState({
            message: "Enemy attacks for " + enemyStandardAttackedFor + " points!"
          }, () => console.log("Enemy attacks for " + enemyStandardAttackedFor + " points!"));
          adjustPlayerHp(enemyStandardAttackedFor);


        } else {

          //SUPER ATTACK
          let enemyCriticalAttackedFor = Math.round(this.roll(this.state.enemyCriticalAtt / 2, this.state.enemyCriticalAtt));
          this.setState({
            message: "Enemy hit you with a Critical Attack for " + enemyCriticalAttackedFor + " points!"
          }, () => console.log("Enemy hit you with a Critical Attack!"));
          
          adjustPlayerHp(enemyCriticalAttackedFor);
        }
      }
    };

    // ADJUST PLAYER HP AFTER BEING ATTACKED FUNCTION
    let adjustPlayerHp = (incomingDamage) => {
      console.log("The enemy damaged you " + incomingDamage + " points!");
      console.log("=================================================");
      let newHp = this.state.playerHp - incomingDamage;
      console.log("Your HP after attack " + newHp);
      this.setState({
        playerHp: newHp
      }, () => updateGameStateOnDefeat(newHp));
    }

    console.log("The playerHP STATE is set to " + this.state.playerHp);
    
    let updateGameStateOnDefeat = (newHp) => {
      if (newHp <= 0) {

        this.setState({
          current_location: ""
        }, () => console.log("game over jeeves"));

        let gameOver = this.state.gameOverId;
        this.setState({
          combatHide: "hide",
          cardHide: "",
          location_id: gameOver,
          current_location: ""
        });
      }
    }

    playerAttackFunction();
    setTimeout(enemyDamagesPlayer, 1500);

  }

  // BEGIN DEFENSE REACT FUNCTIONS =========================================================================================
  handleDefense = event => {
    event.preventDefault();

    // PLAYER CHOOSES TO DEFEND -- ENEMY TAKES NO DAMAGE
    let playerDefenseFunction = () => {

      if(this.state.playerTurn === true){
        let damageDeflected = this.state.enemyAtt - Math.round(this.roll(this.state.playerDef / 2, this.state.playerDef));
        this.setState({
          message: "Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!"
        }, () => console.log("Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!"));
        adjustPlayerHp(damageDeflected);
      }
    }


    let updateGameOnDefenseFailure = (newHp) => {
      if (newHp <= 0) {

          this.setState({
            current_location: ""
          }, () => console.log("Mr Hyena"));

        let gameOveronDefenseFailure = () => {
          let gameOver = this.state.gameOverId;
          console.log(gameOver);
          this.setState({
            combatHide: "hide",
            cardHide: "",
            location_id: gameOver
            }, () => console.log("GAME OVER"));
          }
        setTimeout(gameOveronDefenseFailure, 1000);
      }
    }

    // ADJUST PLAYER HP AFTER DEFENDING FUNCTION
    let adjustPlayerHp = (damageDeflected) => {
      let newHp = this.state.playerHp - damageDeflected;
      this.setState({
        playerHp: newHp
      }, () => updateGameOnDefenseFailure(newHp))
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
      playerImage: event.target.getAttribute("image"),
      playerName: event.target.getAttribute("name"),
      playerClass: event.target.getAttribute("name"),
      startBtnHide: ""
    }, () => localStorage.setItem("PlayerClass", this.state.playerClass));

  }

  ///CHARACTER SELECT FUNCTION to start combat
  startAdventure = () => {
    this.setState({
      charHide: "hide",
      cardHide: "",
      cardBtnHide: ""
    }, () => console.log("START ADVENTURE" + this.state.playerClass));
  }

  ///START COMBAT FUNCTION 
  startCombat = () => {
    let newLocation = this.state.location_id + 1;
    let location_name = Locations[newLocation].name;

    this.setState({
      cardHide: "hide",
      combatHide: "",
      cardBtnHide: "hide",
      playerHp: 100,
      enemyHp: Enemies[this.state.enemySelector].hp,
      enemyName: Enemies[this.state.enemySelector].name,
      enemyAtt: Enemies[this.state.enemySelector].att,
      enemyCriticalAtt: Enemies[this.state.enemySelector].criticalAtt,
      enemyImage: Enemies[this.state.enemySelector].image,
      current_location: location_name
    }, () => console.log("START COMBAT"));
  }


  render() {
    return (

      <div className="App">

        <div className={`${this.state.charHide}`}>
          {Characters.map(characters => {
            return (<CharacterSelect onClick={this.handleCharacterState} key={characters.id} att={characters.att} def={characters.def} hp={characters.hp} superatt={characters.superAtt} image={characters.image} name={characters.name}>{characters.name}</CharacterSelect>)
          })}

          {/* <Button className={this.state.startBtnHide} variant="contained" size="large" color="primary" onClick={this.startAdventure}>Embark! </Button> */}
          <button className={`${this.state.startBtnHide}`} onClick={this.startAdventure}>Embark!</button>
        </div>

        <Container>

          <Card className={this.state.cardHide}>

            <h3 className="locationTitle">{this.state.current_location}</h3>

            <div className={`${this.state.storyHide} typewriter`}>

              <h3 className="">{Locations[this.state.location_id].story}</h3>

            </div>

            {/* <div className={`${this.state.currentLocalHide} typewriter`}>{this.state.current_location}</div><br></br>
            <div className={`${this.state.storyHide} typewriter`}>{Locations[this.state.location_id].story}</div> */}

          </Card>

          <button className={this.state.cardBtnHide} onClick={this.startCombat}>Start combat</button>


          <div className={`${this.state.combatHide} row`}>

            <Col size="4" className={this.state.combatHide}>
              {/* adds animation to the player */}
              <Animated animationIn="bounceInLeft" animationOut="flash" isVisible={true}>
                <UICard
                  name={this.state.playerName}
                  image={this.state.playerImage}
                  hp={this.state.playerHp}
                  styleClass="player"
                />
              </Animated>
            </Col>


            <Col size="4" className={this.state.combatHide}>
              <div className="textCard">
                <Player onClick={this.handleAttack} action="ATTACK!"></Player>
                <Player onClick={this.handleDefense} action="DEFEND!"></Player>
                <div>{this.state.playerName} has HP: {this.state.playerHp}</div>
                <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
                <div>{this.state.message}</div>
                <div>{this.state.message2}</div>
                <Arrow className={this.state.arrow} onClick={this.handleArrow}><a href={'/locations/' + this.state.next_location}>To {this.state.next_location}</a></Arrow>
              </div>
            </Col>

            <Col size="4" className={`${this.state.combatHide} `}>
              <div className="">
                {/* adds animation to the enemy, the flashing is from css, the entrance is a node package*/}
                <Animated animationIn="flash" animationOut="flash" isVisible={true}>
                  <UICardEnemy
                    name={this.state.enemyName}
                    image={this.state.enemyImage}
                    hp={this.state.enemyHp}
                    styleClass="enemy"

                  />
                </Animated>
              </div>

            </Col>

          </div>

        </Container>

        {/* <div className={this.state.combatHide}>
          <Player onClick={this.handleAttack} action="ATTACK!">Click to attack</Player>
          <Player onClick={this.handleDefense} action="DEFEND!">Click to defend</Player>
          <Enemy>Enemy</Enemy>
          <div>You have HP: {this.state.playerHp}</div>
          <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
          <div>{this.state.message}</div>
          <Arrow className={this.state.arrow} onClick={this.handleArrow}><a href={'/locations/' + this.state.next_location}>To {this.state.next_location}</a></Arrow>
        </div>
        <div className={this.state.card}>
          <Card className={this.state.cardHide}>
            <div className={this.state.currentLocalHide}>{this.state.current_location}</div><br></br>
            <div className={this.state.storyHide + 'typewriter'} >{Locations[this.state.location_id].story}</div>
        <button className={this.state.cardBtnHide} onClick={this.startCombat}>Start combat</button>
        
        </div> */}
      </div>
    );
  }
}

export default Users;