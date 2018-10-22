import * as actions from '../actions/index.js'


describe('actions', () => {
    it('should create an action to set board position', () => {
        const pos = 1;
        const str = 'O';
        const expectedAction = {
            type: 'SET_BOARD_POS',
            pos: 1,
            str: 'O'
        };
        expect(actions.setBoardPos(pos, str)).toEqual(expectedAction)
    })

})


