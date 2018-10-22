import Cell from "../components/Cell"
import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {incrementMove} from "../actions";

class Board extends React.Component {
    renderCell(i) {
        return (
            <Cell
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderRow(rowIndex) {
        let row = [];
        for (let i = 0; i < this.props.colSize; i++) {
            const pos = i + rowIndex * this.props.colSize
            row.push(this.renderCell(pos))
        }

        return <tr>{row}</tr>

    }

    render() {
        let drawBoard = [];
        for (let i = 0; i < this.props.rowSize; i++) {
            drawBoard.push(this.renderRow(i))
        }
        return (
            drawBoard
        );
    }
}

Board.propTypes = {
    onClick: PropTypes.func.isRequired,
    incrementMove: PropTypes.func.isRequired,
    colSize: PropTypes.number.isRequired,
    rowSize: PropTypes.number.isRequired
};

const mapStateToProps = (state,) => {
    const {rowSize, colSize} = state


    return {rowSize, colSize}
}


export default connect(mapStateToProps)(Board);


