import React from "react";
import PropTypes from 'prop-types';

function Cell(props) {

    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )


}

Cell.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};

export default Cell;
