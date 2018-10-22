export function checkWinner(pos, XO, board, rowSize, colSize, rowToWin) {

    const total = rowSize * colSize;

    if (pos < 0 || pos >= total || XO == null) return false;

    let str = XO;
    let countRow = 1;


    //  check row
    let left = pos % colSize === 0 ? null : pos * 1 - 1;
    let right = (pos+1) % colSize ===null  ? null : pos * 1 + 1;
    for (let i = 1; i < rowToWin; i++) {

        if (str === board[left])
            countRow++;
        else
            left = null;

        if (str === board[right])
            countRow++;
        else
            right = null;

        if (left !== null && pos % colSize !==0)
            left = left - 1;
        else
            left = null;

        if (right !== null && (pos+1) % colSize !==0)
            right = right + 1;
        else
            right = null;

    }
    if (countRow >= rowToWin)
        return true;


    //check column
    countRow = 1;
    let top = pos < colSize ? null : pos - colSize;
    let bot = pos > (colSize * (rowSize - 1)) ? null : pos + colSize * 1;
    for (let i = 1; i < rowToWin; i++) {

        if (str === board[top])
            countRow++;
        else
            top = null;
        if (str === board[bot])
            countRow++;
        else
            bot = null;


        if (top !== null && top > colSize)
            top = top - colSize;
        else
            top = null;


        if (bot !== null && bot < total)
            bot = bot + colSize * 1
        else
            bot = null;

    }

    if (countRow >= rowToWin)
        return true;


    //check left diagonal(\)
    countRow = 1;
    let topShiftLeft;
    if (pos % colSize !== 0)
        topShiftLeft = pos < colSize ? null : pos - colSize * 1 - 1;
    else
        topShiftLeft = null;


    let botShiftRight;
    if ((pos + 1) % colSize !== 0)
        botShiftRight = (pos > (colSize * (rowSize - 1))) ? null : pos + colSize * 1 + 1;
    else
        botShiftRight = null;

    for (let i = 1; i < rowToWin; i++) {

        if (str === board[topShiftLeft])
            countRow++;
        else
            topShiftLeft = null;
        if (str === board[botShiftRight])
            countRow++;
        else
            botShiftRight = null;


        if ((topShiftLeft) % colSize === 0 || topShiftLeft < colSize)
            topShiftLeft = null;

        if (botShiftRight % colSize === 0 || botShiftRight > (colSize * (rowSize - 1)))
            botShiftRight = null;


        if (topShiftLeft !== null && topShiftLeft >= colSize) {
            topShiftLeft = topShiftLeft - colSize * 1 - 1;
        }


        if (botShiftRight !== null && botShiftRight <= total) {
            botShiftRight = botShiftRight + colSize * 1 + 1;
        }
    }

    if (countRow >= rowToWin)
        return true;


    //check right diagonal(/)
    countRow = 1;
    let topShiftRight;
    if ((pos + 1) % colSize !== 0)
        topShiftRight = pos < colSize ? null : pos - colSize * 1 + 1;
    else
        topShiftRight = null;


    let botShiftLeft;
    if (pos % colSize !== 0)
        botShiftLeft = pos > (colSize * (rowSize - 1)) ? null : pos + colSize * 1 - 1;
    else
        botShiftLeft = null;

    for (let i = 1; i < rowToWin; i++) {

        if (str === board[topShiftRight])
            countRow++;
        else
            topShiftRight = null;
        if (str === board[botShiftLeft])
            countRow++;
        else
            botShiftLeft = null;


        if ((topShiftRight + 1) % colSize === 0 || topShiftRight < colSize)
            topShiftRight = null;

        if (botShiftLeft % colSize === 0 || botShiftLeft > (colSize * (rowSize - 1)))
            botShiftLeft = null;


        if (topShiftRight !== null && topShiftRight >= colSize) {
            topShiftRight = topShiftRight - colSize * 1 + 1;
        }


        if (botShiftLeft !== null && botShiftLeft <= total) {
            botShiftLeft = botShiftLeft + colSize * 1 - 1;
        }
    }

    if (countRow >= rowToWin)
        return true;


    return false;
}
