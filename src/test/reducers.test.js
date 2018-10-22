import {reducer, initialState} from '../reducers/index.js'
import * as types from '../actions/index.js'


describe('reducers', () => {
    it("should return the initial state'", () => {
        expect(reducer(undefined, {})).toEqual(
            {
                rowToWin: 3,
                colSize: 3,
                rowSize: 3,
                won: false,
                move: 0,
                draw: false,
                board: Array(9).fill(null)
            }
        )
    })

    it('should handle SET_BOARD_POS', () => {
        expect(
            [reducer(initialState, {
                type: 'SET_BOARD_POS',
                pos: 0,
                str: 'O'
            })]
        ).toEqual([
            {
                ...initialState,
                board: ['O', null, null, null, null, null, null, null, null]
            }

        ])
    })

    it('should handle INCREMENT_MOVE', () => {
        expect(
            [reducer(initialState, {
                type: 'INCREMENT_MOVE',

            })]
        ).toEqual([
            {
                ...initialState,
                move: 1
            }

        ])
    })

    it('should handle SET_WIN', () => {
        expect(
            [reducer(initialState, {
                type: 'SET_WIN',

            })]
        ).toEqual([
            {
                ...initialState,
                won: true
            }

        ])
    })

    it('should handle SET_BOARD', () => {
        expect(
            [reducer(initialState, {
                type: 'SET_BOARD',
                colSize: 4,
                rowSize: 4

            })]
        ).toEqual([
            {
                ...initialState,
                colSize: 4,
                rowSize: 4,
                board: [null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null]
            }

        ])
    })


})
