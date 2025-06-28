import { GAME_SYMBOL, WIN_PATTERNS } from "./constants.js"

export function getNextMove(currentPlayer) {
    return currentPlayer === GAME_SYMBOL.CROSS
        ? GAME_SYMBOL.ZERO
        : GAME_SYMBOL.CROSS
}

export function getWinner(field) {
    return WIN_PATTERNS.find(
        (winSeq) =>
            field[winSeq[0]] &&
            field[winSeq[0]] === field[winSeq[1]] &&
            field[winSeq[0]] === field[winSeq[2]],
    )
}