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

        for(let i = 0; i < this.state.listOfUsers; i++){
            list.push(`<Row><Col size="mid-12"><p>${this.state.listOfUsers.name}</p></Col></Row>`);
            console.log(list);
        }

        return list;
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Insert leaderboard here</h1>
                        </Col>
                    </Row>

                    {this.createList()}

                </Container>
            </div>

        );
    }
}

export default Leaderboard;