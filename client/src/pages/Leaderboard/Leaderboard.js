import React, { Component } from "react";
import API from "../../utils/API";
import "./Leaderboard.css";
import { Col, Row, Container } from "../../components/Grid";

class Leaderboard extends Component {

    state = {
        listOfUsers: []
    }

    componentDidMount() {
        API.getUsers().then(res => {
            let list = res.data;

            this.selectionSort(list);

            console.log(list);

            this.setState({ listOfUsers: list }); 
        });
    }

    //Orders array from most clears to least
    selectionSort = (arr) => {
        var minIdx, temp,
            len = arr.length;
        for (var i = 0; i < len; i++) {
            minIdx = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j].numberOfClears > arr[minIdx].numberOfClears) {
                    minIdx = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        return arr;
    }

    createList = () => {
        let list = [];

        for(let i = 0; i < this.state.listOfUsers.length; i++){
            list.push(<Row key={i+1}><Col size="md-12"><h2>{i+1}.) Name: {this.state.listOfUsers[i].name}</h2></Col><Col size="md-12"><h2>Clears: {this.state.listOfUsers[i].numberOfClears}</h2></Col></Row>);
        }

        return list;
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Trial of Anima Leaderboard</h1>
                        </Col>
                    </Row>

                    {this.createList()}

                </Container>
            </div>

        );
    }
}

export default Leaderboard;