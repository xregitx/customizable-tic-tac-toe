export const setBoardPos = (pos,str) => ({
    type: 'SET_BOARD_POS',
    pos,
    str
})

export const setBoard = (colSize,rowSize,rowToWin) => ({
    type: 'SET_BOARD',
    colSize,
    rowSize,
    rowToWin
})

export const incrementMove = () => ({
    type: 'INCREMENT_MOVE'
});


export const setWin = () => ({
    type: 'SET_WIN'
});

