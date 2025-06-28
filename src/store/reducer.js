import { GAME_SYMBOL } from "../lib/constants.js"

export const initialState = {
    currentPlayer: GAME_SYMBOL.CROSS,
    isGameEnded: false,
    isDraw: false,
    field: ["", "", "", "", "", "", "", "", ""],
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_GAME": {
            return initialState
        }
        case "MAKE_MOVE":
            return {
                ...state,
                field: state.field.map((cell, i) =>
                    i === action.payload.index ? action.payload.symbol : cell,
                ),
            }
        case "SET_GAME_ENDED":
            return {
                ...state,
                isGameEnded: action.payload,
            }
        case "SET_DRAW":
            return {
                ...state,
                isDraw: action.payload,
            }
        case "SET_CURRENT_PLAYER":
            return {
                ...state,
                currentPlayer: action.payload,
            }
        default:
            return state
    }
}
