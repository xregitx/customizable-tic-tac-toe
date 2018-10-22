import React from "react";
import PropTypes from 'prop-types';
import '../index.css';

class Cell extends React.Component {

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    };

}

Cell.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};

export default Cell;
