import {checkWinner} from '../util'

const board = ['O', 'O', 'O', null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, 'O', 'X', 'X', null,
    null, 'O', 'O', 'O', 'O'];

const colSize = 5;
const rowSize = 5;
const rowToWin = 3;
const start = 0;
const end = 24;
const XO = 'O';

test("row", () => {

    // wins
    expect(checkWinner(start, XO, board, rowSize, colSize, rowToWin)).toBeTruthy();
    expect(checkWinner(start + 1, XO, board, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(start + 2, XO, board, rowSize, colSize, rowToWin)).toBe(true);

    expect(checkWinner(end, XO, board, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - 1, XO, board, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - 2, XO, board, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - 3, XO, board, rowSize, colSize, rowToWin)).toBe(true);


    //no win
    expect(checkWinner(16, XO, board, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(17, XO, board, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(18, XO, board, rowSize, colSize, rowToWin)).toBe(false);

    expect(checkWinner(11, null, board, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(10, null, board, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(5, null, board, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(14, null, board, rowSize, colSize, rowToWin)).toBe(false);

});

const board2 = ['O', 'O', 'O', null, 'O',
    'O', null, null, null, 'O',
    'O', null, null, null, 'O',
    'O', 'O', 'X', 'X', 'O',
    null, 'O', 'O', 'O', 'O'];
test("column", () => {
    //wins left corner
    expect(checkWinner(start, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(start + colSize, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(start + colSize * 2, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(start + colSize * 3, XO, board2, rowSize, colSize, rowToWin)).toBe(true);

    // // wins right corner
    expect(checkWinner(end, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 2, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 3, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 4, XO, board2, rowSize, colSize, rowToWin)).toBe(true);
    //
    //
    // //no win out of bond
    expect(checkWinner(end - colSize * 5, XO, board2, rowSize, colSize, rowToWin)).toBe(false);

});

const board3 = ['O', null, 'O', null, null,
    'O', 'O', null, 'O', null,
    null, 'O', 'O', 'O', null,
    null, null, 'O', 'O', null,
    null, null, null, 'O', 'O'];

test("left diagonal(\\)", () => {

    //wins
    expect(checkWinner(end, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize - 1, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 2 - 2, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 3 - 3, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(end - colSize * 4 - 4, XO, board3, rowSize, colSize, rowToWin)).toBe(true);

    expect(checkWinner(5, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(11, XO, board3, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(17, XO, board3, rowSize, colSize, rowToWin)).toBe(true);

    expect(checkWinner(23, XO, board3, rowSize, colSize, rowToWin)).toBe(true);


    // no win
    expect(checkWinner(2, XO, board3, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(8, null, board3, rowSize, colSize, rowToWin)).toBe(false);

});


const board4 = [null, null, 'O', null, 'O',
    null, 'O', null, 'O', null,
    'O', 'O', 'O', null, null,
    'O', 'O', null, null, 'O',
    null, null, null, 'O', null];

test("check right diagonal(/)", () => {

    // wins
    expect(checkWinner(4, XO, board4, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(8, XO, board4, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(12, XO, board4, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(16, XO, board4, rowSize, colSize, rowToWin)).toBe(true);

    expect(checkWinner(2, XO, board4, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(6, XO, board4, rowSize, colSize, rowToWin)).toBe(true);
    expect(checkWinner(10, XO, board4, rowSize, colSize, rowToWin)).toBe(true);


    // no win
    expect(checkWinner(19, XO, board4, rowSize, colSize, rowToWin)).toBe(false);
    expect(checkWinner(23, XO, board4, rowSize, colSize, rowToWin)).toBe(false);

    expect(checkWinner(15, XO, board4, rowSize, colSize, rowToWin)).toBe(false);


});


