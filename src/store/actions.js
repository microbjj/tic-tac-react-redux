export const makeMove = (index, symbol) => ({
    type: "MAKE_MOVE",
    payload: {
        index,
        symbol,
    },
})

export const setGameEnded = (ended) => ({
    type: "SET_GAME_ENDED",
    payload: ended,
})

export const setDraw = (isDraw) => ({
    type: "SET_DRAW",
    payload: isDraw
})

export const setCurrentPlayer = (currentPlayer) => ({
    type: "SET_CURRENT_PLAYER",
    payload: currentPlayer,
})

export const resetGame = () => ({
    type: "RESET_GAME"
})