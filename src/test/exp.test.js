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

    // win
    expect(checkWinner(start, XO, board, rowSize, colSize, rowToWin)).toBeTruthy();

// > 10, 'x', true, true
});

const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false
