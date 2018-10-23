import React, { Component } from "react";
import "./Users.css";
import Enemies from "./enemies.json";
import Arrow from "../../components/Arrow/Arrow";
import Locations from "./locations.json";
import Characters from "./characters.json";
import SelectorCard from "../../components/SelectorCard"; import Card from "../../components/Card/Card";
import UICard from "../../components/UICard";
import UICardEnemy from "../../components/UICardEnemy";
import { Col, Row, Container } from "../../components/Grid";
import { Animated } from "react-animated-css";
import Button from '@material-ui/core/Button';
import SoundEffects from "../../components/SoundEffects";
import Music from "../../components/Music";
import API from "../../utils/API";


class Game extends Component {
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
    percentChance: 0,
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
    cardBackground: "",
    creditsRoll: "hide",
    music: "",
    soundEffects: "",

    //UserID
    userID: API.getUserId(),
    clears: 0
  };

  // ROLL FUNCTION FOR BATTLES
  roll = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  // PERCENT CHANCE CRITICAL HITS FUNCTION
  percentChanceofCriticalAttack = () => {

    if (this.state.message2 === "VICTORIOUS!" && this.state.location_id === 4) {

      this.setState({
        message2: "Reached Journey's End"
      }, () => console.log("Reached Journey's End"));

    } else if (this.state.message2 === "VICTORIOUS!") {
      this.setState({
        message2: "The Journey Continues"
      }, () => console.log("The Journey Continues"));

    } else {

      let percentChance = Math.floor(Math.random() * 10) + 1;
      console.log(percentChance);
      switch (percentChance) {
        case 1:
          this.setState({
            message2: "10% Danger Enemy Critical Attack"
          }, () => console.log("10% Danger of Enemy Critical Attack"));
          let ranNumCase1 = Math.random();
          console.log(ranNumCase1 + " is the subset random number");
          if (ranNumCase1 < .10) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 2:
          this.setState({
            message2: "20% Danger Enemy Critical Attack"
          }, () => console.log("20% Danger of Enemy Critical Attack"));
          let ranNumCase2 = Math.random();
          console.log(ranNumCase2 + " is the subset random number");
          if (ranNumCase2 < .20) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 3:
          this.setState({
            message2: "30% Danger Enemy Critical Attack"
          }, () => console.log("30% Danger of Enemy Critical Attack"));
          let ranNumCase3 = Math.random();
          console.log(ranNumCase3 + " is the subset random number");
          if (ranNumCase3 < .30) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 4:
          this.setState({
            message2: "40% Danger Enemy Critical Attack"
          }, () => console.log("40% Danger of Enemy Critical Attack"));
          let ranNumCase4 = Math.random();
          console.log(ranNumCase4 + " is the subset random number");
          if (ranNumCase4 < .40) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 5:
          this.setState({
            message2: "50% Danger Enemy Critical Attack"
          }, () => console.log("50% Danger of Enemy Critical Attack"));
          let ranNumCase5 = Math.random();
          console.log(ranNumCase5 + " is the subset random number");
          if (ranNumCase5 < .50) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 6:
          this.setState({
            message2: "60% Danger Enemy Critical Attack"
          }, () => console.log("60% Danger of Enemy Critical Attack"));
          let ranNumCase6 = Math.random();
          console.log(ranNumCase6 + " is the subset random number");
          if (ranNumCase6 < .60) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 7:
          this.setState({
            message2: "70% Danger Enemy Critical Attack"
          }, () => console.log("70% Danger of Enemy Critical Attack"));
          let ranNumCase7 = Math.random();
          console.log(ranNumCase7 + " is the subset random number");
          if (ranNumCase7 < .70) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 8:
          this.setState({
            message2: "80% Danger Enemy Critical Attack"
          }, () => console.log("80% Danger of Enemy Critical Attack"));
          let ranNumCase8 = Math.random();
          console.log(ranNumCase8 + " is the subset random number");
          if (ranNumCase8 < .80) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 9:
          this.setState({
            message2: "90% Danger Enemy Critical Attack"
          }, () => console.log("90% Danger of Enemy Critical Attack"));
          let ranNumCase9 = Math.random();
          console.log(ranNumCase9 + " is the subset random number");
          if (ranNumCase9 < .90) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        case 10:
          this.setState({
            message2: "99% Danger Enemy Critical Attack"
          }, () => console.log("99% Danger of Enemy Critical Attack"));
          let ranNumCase10 = Math.random();
          console.log(ranNumCase10 + " is the subset random number");
          if (ranNumCase10 < 1) {
            this.setState({
              percentChance: "criticalAttack"
            }, () => console.log("CRITICAL ATTACK"))
          } else {
            this.setState({
              percentChance: "standardAttack"
            }, () => console.log("STANDARD ATTACK"))
          }
          break;

        default:
          break;
      }
      console.log(this.state.percentChance);
    }
  }

  // PERFORM INITIAL MOUNTS TO STATE
  componentDidMount() {
    let currentLocationId = this.state.location_id;
    let currentLocationName = Locations[currentLocationId].name;

    //API call to get current users info and set clear state equal to number of user's clears
    API.getUser(this.state.userID).then(res => this.setState({ clears: res.data[0].numberOfClears }));

    this.setState({
      enemyHp: Enemies[this.state.enemySelector].hp,
      enemyName: Enemies[this.state.enemySelector].name,
      enemyAtt: Enemies[this.state.enemySelector].att,
      enemyCriticalAtt: Enemies[this.state.enemySelector].criticalAtt,
      enemyImage: Enemies[this.state.enemySelector].image,
      current_location: currentLocationName,
      cardBackground: Locations[currentLocationId].backgroundImage,
      music: "http://www.music-note.jp/bgm/mp3/0723/townofdeath.wav"
    }, () => console.log(this.state.cardBackground + " callback"));

  }



  // BEGIN REACT ATTACK FUNCTIONS =======================================================================================
  handleAttack = event => {
    event.preventDefault();

    // DISABLE THE ATTACK BUTTON WHEN CLICKED
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


    // PREPARE FOR WINNING UPDATE AND LOCATION CHANGE============================================================================================
    let updateGameStateOnVictory = (newEnemyHp) => {
      if (newEnemyHp <= 0) {

        this.setState({
          message2: "VICTORIOUS!",
          music: "",
          soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/WW_New/WW_Fanfare_Pearl.wav"
        }, () => console.log("VICTORIOUS"));

        // GOING TO NEW LOCATION CARD
        let goToNewLocation = () => {

          let newLocation = this.state.location_id + 1;
          let location_name = Locations[newLocation].name;
          let newEnemySelected = this.state.enemySelector + 1
          this.setState({
            message: "Location coming up next... " + location_name
          }, () => console.log("Location coming up next... " + location_name));

          // ENDING CARD
          if (this.state.location_id === 4) {

            let endStory = Locations[7].story;
            console.log(endStory + this.state.location_id);

            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "hide",
              storyHide: "hide",
              location_id: newLocation,
              message: "CONGRATULATIONS ON YOUR VICTORY",
              credits: Locations[7].story,
              music: "http://www.music-note.jp/bgm/mp3/2014/0316/adventurers.WAV"
            }, () => console.log("Hiding story"));

            //increment clear by 1
            let newClear = this.state.clears + 1;

            //API PUT call to update user clear
            API.addClear(this.state.userID, newClear);

            let creditsRoll = () => {
              this.setState({
                current_location: Locations[7].name,
                combatHide: "hide",
                cardHide: "hide",
                cardBtnHide: "hide",
                storyHide: "hide",
                message: "hide",
                message2: "hide",
                creditsRoll: "",
                music: "http://www.music-note.jp/bgm/mp3/2014/0316/adventurers.WAV"
              }, () => console.log("CREDITS ROLLING!!"));
            }

            setTimeout(creditsRoll, 3000);

            // FINAL BOSS BATTLE CARD
          } else if (this.state.location_id === 3) {

            var bossChoice = this.state.playerClass;

            if (bossChoice === "Warrior") {
              this.setState({
                enemySelector: newEnemySelected
              }, () => console.log(this.state.enemySelector));


            } else if (bossChoice === "Mage") {
              this.setState({
                enemySelector: newEnemySelected + 1
              }, () => console.log(this.state.enemySelector));

            } else {
              this.setState({
                enemySelector: newEnemySelected + 2
              }, () => console.log(this.state.enemySelector));
            }
            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "",
              storyHide: "",
              message: "",
              message2: "Traveling to Next Location",
              location_id: newLocation,
              current_location: location_name,
              cardBackground: Locations[newLocation].backgroundImage,
              music: "http://www.music-note.jp/bgm/mp3/0417/duel.wav"
            }, () => console.log("Traveling to FINAL LOCATION " + this.state.enemySelector));

            // TRAVEL TO THE NEXT REGULAR STORY CARD
          } else {
            this.setState({
              combatHide: "hide",
              cardHide: "",
              cardBtnHide: "",
              message: "",
              message2: "hide",
              location_id: newLocation,
              current_location: location_name,
              enemySelector: newEnemySelected,
              cardBackground: Locations[newLocation].backgroundImage,
              music: "http://www.music-note.jp/bgm/mp3/0513/devil.WAV"
            }, () => console.log("Traveling to the next location.."));
          }
        }
        setTimeout(goToNewLocation, 4000);
      }
    }

    // ADJUST THE ENEMY HP AFTER THEY ARE ATTACKED FUNCTION
    let adjustEnemyHp = (playerAttackDmgDealt) => {
      let newEnemyHp = this.state.enemyHp - playerAttackDmgDealt;

      //PREVENT HP GOING TO NEGATIVE
      if (newEnemyHp <= 0) {
        newEnemyHp = 0;
      }
      console.log("Enemy HP after attack " + newEnemyHp);
      this.setState({
        enemyHp: newEnemyHp
      }, () => setTimeout(updateGameStateOnVictory(newEnemyHp), 2000));
    }

    // ENEMY ATTACKS PLAYER FUNCTION =====================================================================================================

    let enemyDamagesPlayer = () => {
      
      if(this.state.enemyHp > 0) {

        let attackChoice = this.state.percentChance
        console.log("AttackChoice is " + this.state.percentChance);

        // RE-ENABLE THE ATTACK AND DEFEND BUTTONS

        if (attackChoice === "standardAttack") {

          //STANDARD ATTACK
          let enemyStandardAttackedFor = Math.round(this.roll(this.state.enemyAtt / 2, this.state.enemyAtt));
          this.setState({
            isBtnDisabled: false,
            message: "Enemy attacks for " + enemyStandardAttackedFor + " points!",
            soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword_Spin.wav"
          }, () => console.log("Enemy attacks for " + enemyStandardAttackedFor + " points!"));
          adjustPlayerHp(enemyStandardAttackedFor);


        } else {

          //CRITICAL ATTACK
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
      if (newHp <= 0) {
        newHp = 0;
      }
      console.log("Your HP after attack " + newHp);
      this.setState({
        playerHp: newHp
      }, () => updateGameStateOnDefeat(newHp));
    }

    console.log("The playerHP STATE is set to " + this.state.playerHp);

    // UPDATING THE GAME TO GAME OVER STATUS IF YOU LOSE A BATTLE
    let updateGameStateOnDefeat = (newHp) => {
      if (newHp <= 0) {
        this.setState({
          current_location: "",
          playerHp: newHp
        }, () => console.log("GAME OVER"));

        let gameOverState = () => {
          let gameOver = this.state.gameOverId;
          this.setState({
            combatHide: "hide",
            cardHide: "",
            location_id: gameOver,
            current_location: "",
            music: "http://www.music-note.jp/bgm/mp3/cube.mp3"
          });
        }
        setTimeout(gameOverState, 2500);
      }
    }

    playerAttackFunction();
    setTimeout(enemyDamagesPlayer, 1500);
    setTimeout(this.percentChanceofCriticalAttack, 2000);


  }

  // BEGIN DEFENSE REACT FUNCTIONS =====================================================================================================
  handleDefense = event => {
    event.preventDefault();

    // PLAYER CHOOSES TO DEFEND -- ENEMY TAKES NO DAMAGE
    let playerDefenseFunction = () => {

      if (this.state.percentChance === "standardAttack") {

        let damageDeflected = this.state.enemyAtt - Math.round(this.roll(this.state.playerDef / 2, this.state.playerDef));
        this.setState({
          message: "Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!",
          soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/WW_New/WW_Sword_Spin.wav"
        }, () => console.log("Enemy attacks for " + this.state.enemyAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!"));
        adjustPlayerHp(damageDeflected);
      } else {

        let damageDeflected = this.state.enemyCriticalAtt - Math.round(this.roll(this.state.playerDef / 2, this.state.playerDef));
        this.setState({
          message: "Enemy critical attacks for " + this.state.enemyCriticalAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!",
          soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Sword_Overhead.wav"
        }, () => console.log("Enemy attacks for " + this.state.enemyCriticalAtt + " You deflected! ...and took only " + damageDeflected + " points of damage!"));
        adjustPlayerHp(damageDeflected);
      }

    }

    // UPDATE THE GAME ON A DEFENSE FAILURE RESULTING IN A LOSS
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
            location_id: gameOver,
            music: "http://www.music-note.jp/bgm/mp3/cube.mp3"
          }, () => console.log("DEFENSE FAILURE GAME OVER"));
        }
        setTimeout(gameOveronDefenseFailure, 1000);
      }
    }

    // ADJUST PLAYER HP AFTER DEFENDING FUNCTION
    let adjustPlayerHp = (damageDeflected) => {
      let newHp = this.state.playerHp - damageDeflected;
      if (newHp <= 0) {
        newHp = 0;
      }
      this.setState({
        playerHp: newHp
      }, () => updateGameOnDefenseFailure(newHp));
    }

    playerDefenseFunction();
    setTimeout(this.percentChanceofCriticalAttack, 2000);

  }

  ///CHARACTER SELECT FUNCTION to add to state=====================================================================================
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
    });

  }

  ///CHARACTER SELECT FUNCTION to start combat
  startAdventure = () => {
    this.setState({
      charHide: "hide",
      cardHide: "",
      cardBtnHide: "",
      soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/ZSS/ZSS_Rupee_Blue.wav"
    }, () => console.log("START ADVENTURE" + this.state.playerClass));
  }

  ///START COMBAT FUNCTION 
  startCombat = () => {

    // setting initial location
    let newLocation = this.state.location_id + 1;
    let location_name = Locations[newLocation].name;
    // determining the initial percent chance of the enemy critically attacking the player
    this.percentChanceofCriticalAttack();

    // setting the final boss battle music to match location
    if (this.state.location_id === 4) {
      this.setState({
        music: "http://www.music-note.jp/bgm/mp3/0417/duel.wav"
      })

    } else {

      this.setState({
        music: "http://www.music-note.jp/bgm/mp3/battle1.mp3"
      })
    }

    this.setState({
      cardHide: "hide",
      combatHide: "",
      cardBtnHide: "hide",
      // reset the player hp back to the character
      playerHp: 100,
      playerMaxHp: 100,
      isBtnDisabled: false,
      enemyHp: Enemies[this.state.enemySelector].hp,
      enemyMaxHp: Enemies[this.state.enemySelector].hp,
      enemyName: Enemies[this.state.enemySelector].name,
      enemyAtt: Enemies[this.state.enemySelector].att,
      enemyCriticalAtt: Enemies[this.state.enemySelector].criticalAtt,
      enemyImage: Enemies[this.state.enemySelector].image,
      current_location: location_name,
      soundEffects: "http://noproblo.dayjo.org/ZeldaSounds/ZSS/ZSS_Guardian_Awaken.wav"
    }, () => console.log("START COMBAT"));
    console.log("start HP: " + Enemies[this.state.enemySelector].hp)
  }

  // BEGIN RENDERING =============================================================================================================================
  render() {
    return (

      <div className="App">

        {/* character cards being called in  */}
        <div className={`${this.state.charHide}`}>

          <Row className="selectRow">

            {Characters.map(characters => {
              return (

                <Col key={characters.id} size="4" className="selectCol">
                  <SelectorCard>
                    <header><h1>{characters.name}</h1></header>

                    <img src={characters.image} onMouseOver={e => (e.currentTarget.src = `${characters.hover}`)} onMouseOut={e => (e.currentTarget.src = `${characters.image}`)} alt={characters.name} className="selectImg" onClick={this.handleCharacterState} att={characters.att} def={characters.def} hp={characters.hp} superatt={characters.superAtt} image={characters.image} name={characters.name}></img>

                    <footer> <h3>This can be a class description or something or also nothing.</h3></footer>
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
          <Card className={`${this.state.cardHide} localCard`}>

            {/* <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}> */}
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

              <div className={`${this.state.storyHide}`} style={ { backgroundImage: `url(${this.state.cardBackground})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` } }>

              <h3 className="locationTitle">{this.state.current_location}</h3>

                <h3 className="">{Locations[this.state.location_id].story}</h3>

              </div>

            </Animated>

          </Card>
          {/* start button to move on to the next battle scene */}
          <button className={this.state.cardBtnHide} onClick={this.startCombat} >Start Combat</button>

          {/* combat mode  */}

          <div className={`${this.state.combatHide} row`}>

            <Col size="4" className={this.state.combatHide} styleClass="centered">
              {/* adds animation to the player */}
              <Animated animationIn="bounceInLeft" animationOut="flash" isVisible={true}>
                <UICard
                  name={this.state.playerName}
                  image={this.state.playerImage}
                  hp={this.state.playerHp}
                  maxHp={this.state.playerMaxHp}
                  styleClass="player"
                />
              </Animated>
            </Col>

            <Col size="4" className={`${this.state.combatHide} textCard`} styleClass="altCentered">
              <div className="textCard">
                <div>{this.state.message}</div>
                <div><h1 className="victory">{this.state.message2}</h1></div>
                <Arrow className={this.state.arrow} onClick={this.handleArrow}><a href={'/locations/' + this.state.next_location}>To {this.state.next_location}</a></Arrow>
              </div>
            </Col>

            <Col size="4" className={`${this.state.combatHide}`} styleClass="centered">
              <div className="">
                {/* adds animation to the enemy, the flashing is from css, the entrance is a node package*/}
                <Animated animationIn="flash" animationOut="flash" isVisible={true}>
                  <UICardEnemy
                    name={this.state.enemyName}
                    image={this.state.enemyImage}
                    hp={this.state.enemyHp}
                    maxHp={this.state.enemyMaxHp}
                    styleClass="enemy"

                  />
                </Animated>
              </div>

            </Col>


          </div>

          <div className={`${this.state.creditsRoll} credits`}>

            <div className='wrapper'>
              <div className='gameTitle'>life of john doe</div>
              <div className='credit dev'>A Game by <br></br> [dev studio here]</div>
              <div className='credit'>James Kendall Bruce</div>
              <div className='credit'>Maybellin Burgos</div>
              <div className='credit'>Cody Covington</div>
              <div className='credit'>Andrew Park</div>
              <div className='credit'>Daniel Pruitt</div>
            </div>

          </div>


        </Container>

        <div className={`${this.state.combatHide} row`}>

          <Col size="3">
            <Button onClick={this.handleAttack} disabled={this.state.isBtnDisabled} className="combatBtn attack"><h1 className="command">ATTACK</h1></Button>
          </Col>

          <Col size="6">
          </Col>

          <Col size="3">
            <Button onClick={this.handleDefense} disabled={this.state.isBtnDisabled} className="combatBtn defend"><h1 className="command">DEFEND</h1></Button>
          </Col>

        </div>

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


export default Game;