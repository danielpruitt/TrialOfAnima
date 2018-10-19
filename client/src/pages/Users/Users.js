import React, { Component } from "react";
import "./Users.css";
import Player from "../../components/Player/Player";
import Enemy from "../../components/Enemy/Enemy";
import Enemies from "./enemies.json";
import Arrow from "../../components/Arrow/Arrow";
import Locations from "./locations.json";
import Characters from "./characters.json";
// import CharacterSelect from "../../components/CharacterSelect/CharacterSelect";
import SelectorCard from "../../components/SelectorCard"; import Card from "../../components/Card/Card";
import UICard from "../../components/UICard";
import UICardEnemy from "../../components/UICardEnemy";
import { Col, Row, Container } from "../../components/Grid";
import { Animated } from "react-animated-css";
import Button from '@material-ui/core/Button';
import SoundEffects from "../../components/SoundEffects";
import Music from "../../components/Music";


class Users extends Component {
  state = {
    //COMBAT STATE COMPONENTS
    playerClass: "",
    isBtnDisabled: false,
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
    next_location: "",
    music: "",
    soundEffects: ""
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
      current_location: currentLocationName,
      music: "http://66.90.93.122/ost/the-legend-of-zelda-nes/zsywrgsx/04%20Labyrinth.mp3"
    });
  }


  // BEGIN REACT ATTACK FUNCTIONS =======================================================================================
  handleAttack = event => {
    event.preventDefault();

    // DISABLE THE ATTACK BUTTON
    // DISABLE THE DEFEND BUTTON
    this.setState({
      isBtnDisabled: true
    });

    // PLAYER ATTACKS ENEMY FUNCTION
    let playerAttackFunction = () => {

      //SET THE SOUND FOR ATTACKING
      this.setState({
        soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword4.wav",
      }, () => console.log("Initializing sword sound " + this.state.soundEffect));

      if (this.state.isBtnDisabled === false) {

        this.setState({
          soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword4.wav"
        });

        let attackChoice = Math.random();
        console.log("% guiding Critical chances " + attackChoice);

        if (attackChoice <= .66) {

          // STANDARD ATTACK
          let playerStandardAttackDmgDealt = Math.round(this.roll(this.state.playerAtt / 2, this.state.playerAtt));
          this.setState({
            message: "You Dealt " + playerStandardAttackDmgDealt + " points of damage to the enemy!",
            soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword4.wav"
          }, () => console.log("You Dealt " + playerStandardAttackDmgDealt + " points of damage to the enemy!"));
          adjustEnemyHp(playerStandardAttackDmgDealt);

        } else {

          // CRITICAL ATTACK
          let playerCriticalAttackDmgDealt = Math.round(this.roll(this.state.playerSuperAtt / 2, this.state.playerSuperAtt));
          this.setState({
            message: "You Dealt a CRITICAL HIT with " + playerCriticalAttackDmgDealt + " points of damage to the enemy!",
            soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Link_Shock.wav"
          }, () => console.log("You Dealt a CRITICAL HIT with " + playerCriticalAttackDmgDealt + " points of damage to the enemy!"));

          adjustEnemyHp(playerCriticalAttackDmgDealt);
        }

      }

    }


    // PREPARE FOR WINNING UPDATE AND LOCATION CHANGE
    let updateGameStateOnVictory = (newEnemyHp) => {
      if (newEnemyHp <= 0) {

        this.setState({
          message2: "VICTORIUS!",
          music: "",
          soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/WW_New/WW_Fanfare_Pearl.wav"
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

            let endStory = Locations[5].story;
            console.log(endStory + this.state.location_id);
            this.setState({
              storyHide: "hide"
            }, () => console.log("Hiding story"));
            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "hide",
              storyHide: "hide",
              location_id: newLocation,
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

        let attackChoice = Math.random();
        console.log("% guiding Critical chances " + attackChoice);

        // RE-ENABLE THE ATTACK AND DEFEND BUTTONS

        if (attackChoice <= .66) {

          //STANDARD ATTACK
          let enemyStandardAttackedFor = Math.round(this.roll(this.state.enemyAtt / 2, this.state.enemyAtt));
          this.setState({
            isBtnDisabled: false,
            message: "Enemy attacks for " + enemyStandardAttackedFor + " points!",
            soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword_Spin.wav"
          }, () => console.log("Enemy attacks for " + enemyStandardAttackedFor + " points!"));
          adjustPlayerHp(enemyStandardAttackedFor);


        } else {

          //SUPER ATTACK
          let enemyCriticalAttackedFor = Math.round(this.roll(this.state.enemyCriticalAtt / 2, this.state.enemyCriticalAtt));
          this.setState({
            isBtnDisabled: false,
            message: "Enemy hit you with a Critical Attack for " + enemyCriticalAttackedFor + " points!",
            soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Shovel.wav"
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

      let damageDeflected = this.state.enemyAtt - Math.round(this.roll(this.state.playerDef / 2, this.state.playerDef));
      this.setState({
        message: "Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!",
        soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/WW_New/WW_Sword_Spin.wav"
      }, () => console.log("Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!"));
      adjustPlayerHp(damageDeflected);

    }


    let updateGameOnDefenseFailure = (newHp) => {
      if (newHp <= 0) {

        this.setState({
          current_location: ""
        }, () => console.log("DEFENSE FAILURE: GAME OVER"));

        let gameOveronDefenseFailure = () => {
          let gameOver = this.state.gameOverId;
          console.log(gameOver);
          this.setState({
            combatHide: "hide",
            cardHide: "",
            location_id: gameOver
          }, () => console.log("DEFENSE FAILURE GAME OVER"));
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
      // reset the player hp back to the character
      playerHp: 100,
      isBtnDisabled: false,
      enemyHp: Enemies[this.state.enemySelector].hp,
      enemyName: Enemies[this.state.enemySelector].name,
      enemyAtt: Enemies[this.state.enemySelector].att,
      enemyCriticalAtt: Enemies[this.state.enemySelector].criticalAtt,
      enemyImage: Enemies[this.state.enemySelector].image,
      current_location: location_name
    }, () => console.log("START COMBAT"));
    console.log("start HP: " + Enemies[this.state.enemySelector].hp)
  }




  render() {
    return (

      <div className="App">

        {/* character cards being called in  */}
        <div className={`${this.state.charHide}`}>

          <Row className="selectRow">

            {Characters.map(characters => {
              return (

                <Col size="4" className="selectCol">
                  <SelectorCard>
                    <header><h1>{characters.name}</h1></header>
                    <img  src={characters.image} alt={characters.name} className="selectImg" onClick={this.handleCharacterState} key={characters.id} att={characters.att} def={characters.def} hp={characters.hp} superatt={characters.superAtt} image={characters.image} name={characters.name}></img>
                    <footer> <h4>{characters.story}</h4></footer>
                  </SelectorCard>
                </Col>)
            })}

          </Row>

          {/* Embark button to start story and attacking */}
          <button className={`${this.state.startBtnHide}`} onClick={this.startAdventure}>Embark!</button>
        </div>

        {/* container that switches the stories and attacking  */}
        <Container>

          {/* holds the storyline and allows it to be in the hidden or shown */}
          <Card className={this.state.cardHide}>

            <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}>
              <h3 className="locationTitle">{this.state.current_location}</h3>

              <div className={`${this.state.storyHide}`}>

                <h3 className="">{Locations[this.state.location_id].story}</h3>

              </div>

            </Animated>

          </Card>
          {/* start button to move on to the next battle scene */}
          <button className={this.state.cardBtnHide} onClick={this.startCombat}>Start Combat</button>

          {/* combat mode  */}

          <div className={`${this.state.combatHide} row`}>
            {/* this is the player container the class, image, and health is shown */}
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

            {/* this is the center column with the attack and defend buttons as well as the log of what is happening with player and enemy health */}
            <Col size="4" className={this.state.combatHide}>
              <div className="textCard">
                {/* <Player onClick={this.handleAttack} action="ATTACK!"></Player> */}
                <Button disabled={this.state.isBtnDisabled} onClick={this.handleAttack}>ATTACK</Button>
                {/* <Player onClick={this.handleDefense} action="DEFEND!"></Player> */}
                <Button disabled={this.state.isBtnDisabled} onClick={this.handleDefense}>DEFEND</Button>
                <div>{this.state.playerName} has HP: {this.state.playerHp}</div>
                <div className={this.state.enemyHide}>{this.state.enemyName} has HP: {this.state.enemyHp}</div>
                <div>{this.state.message}</div>
                <div>{this.state.message2}</div>
                <Arrow className={this.state.arrow} onClick={this.handleArrow}><a href={'/locations/' + this.state.next_location}>To {this.state.next_location}</a></Arrow>
              </div>
            </Col>

            {/* this is the column for the enemy. The enemy name, image, and hp is listed */}
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

        {/* sound effects and music */}
        <SoundEffects>
          <audio ref="audio_tag" src={this.state.soundEffects} autoPlay />
        </SoundEffects>

        <Music>
          <audio ref="audio_tag" src={this.state.music} autoPlay />
        </Music>
      </div>
    );
  }
}


export default Users;