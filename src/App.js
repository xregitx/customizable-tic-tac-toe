import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Board from "./components/Board"
import './index.css'
import {checkWinner} from './util'
import {incrementMove, setWin, setBoardPos, setBoard} from "./actions";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {Input} from 'antd';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isX: true,
            colSize: 3,
            rowSize: 3,
            rowToWin: 3,
            move: 0,
            won: false,
        };
    }


    handleClick(pos) {
        if (this.props.board[pos])
            return;
        this.props.dispatch(incrementMove());

        this.props.dispatch(setBoardPos(pos, this.state.isX ? 'X' : 'O'));


        if (checkWinner(pos, this.state.isX ? 'X' : 'O', this.props.board, this.props.rowSize, this.props.colSize, this.props.rowToWin))
        {
            this.props.dispatch(setWin());

        }


        this.setState({
            isX: !this.state.isX,
            move: this.state.move + 1
        });
    }

    onChangeColumnSize = e => {
        if (e.target.value < 3) {
            return;
        }
        this.props.dispatch(setBoard(e.target.value, this.state.rowSize, this.state.rowToWin))
        this.setState({colSize: e.target.value});
    }

    onChangeRowSize = e => {
        if (e.target.value < 3)
            return;
        this.props.dispatch(setBoard(this.state.colSize, e.target.value, this.state.rowToWin))
        this.setState({rowSize: e.target.value});
    }

    onChangeRowToWin = e => {
        if (e.target.value < 3)
            return;
        this.props.dispatch(setBoard(this.state.colSize, this.state.rowSize, e.target.value))
        this.setState({rowToWin: e.target.value});
    }

    render() {
        console.log(this.props.board)
        return (
            <React.Fragment>
                <div className="center-input">
                    <Input
                        placeholder="Column Size. Minimum 3"
                        onChange={this.onChangeColumnSize}
                    />
                    <Input
                        placeholder="Row Size. Minimum 3"
                        onChange={this.onChangeRowSize}
                    />
                    <Input
                        placeholder="Number of Row to Win. Minimum 3"
                        onChange={this.onChangeRowToWin}
                    />
                </div>

                <div className="center-board">
                    <Board
                        squares={this.props.board}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="text-center">
                {this.props.won ? <h2>{!this.state.isX ? 'X': 'O'} Won</h2> : null}
                </div>
            </React.Fragment>

        );
    }
}

App.propTypes = {
    setWin: PropTypes.func.isRequired,
    incrementMove: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired,
    won: PropTypes.number.isRequired
}

const mapStateToProps = (state, props) => {
    const {board, rowToWin, rowSize, colSize, move, won} = state;


    return {board, rowToWin, rowSize, colSize, move, won}
}


export default connect(mapStateToProps)(App);
