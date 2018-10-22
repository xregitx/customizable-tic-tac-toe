export const initialState = {
    rowToWin: 3,
    colSize: 3,
    rowSize: 3,
    won: false,
    move: 0,
    draw: false,
    board: Array(9).fill(null)
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOARD_POS':
            // let newBoard = [...state.board.slice(0,action.pos),action.str,...state.board.slice(action.pos+1)];
            state.board[action.pos] = action.str
            return state;
        case 'INCREMENT_MOVE':
            return {...state,move: state.move +1};
        case 'SET_WIN':
            return {...state, won: true};
        case 'SET_BOARD':
            let newState = {};
            newState.draw = false;
            newState.won = false;
            newState.move = 0;
            newState.colSize = action.colSize;
            newState.rowSize = action.rowSize;
            newState.rowToWin = action.rowToWin;
            newState.board = Array(action.colSize * action.rowSize).fill(null);
            return newState;
        case 'RESTART':
            return initialState;
        default:
            return state;
    }
};


