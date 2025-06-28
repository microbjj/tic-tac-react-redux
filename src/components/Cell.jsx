import clsx from "clsx"
import { getNextMove, getWinner } from "../lib/utils.js"
import { useDispatch, useSelector } from "react-redux"
import { currentPlayerSelect, fieldSelect, isGameEndedSelect } from "../store/selectors.js"

export function Cell({ children, index }) {
    const dispatch = useDispatch()

    const field = useSelector(fieldSelect)
    const isGameEnded = useSelector(isGameEndedSelect)
    const currentPlayer = useSelector(currentPlayerSelect)

    const handleClickCell = (index) => {
        if (isGameEnded || field[index]) {
            return
        }

        dispatch({
            type: "MAKE_MOVE",
            payload: {
                index,
                symbol: currentPlayer,
            },
        })

        const newField = field.map((cell, i) =>
            i === index ? currentPlayer : cell,
        )
        const winner = getWinner(newField)
        const isDraw = !winner && newField.every((cell) => cell !== "")

        if (winner) {
            dispatch({
                type: "SET_GAME_ENDED",
                payload: true,
            })
        } else if (isDraw) {
            dispatch({ type: "SET_GAME_ENDED", payload: true })
            dispatch({ type: "SET_DRAW", payload: true })
        } else {
            dispatch({
                type: "SET_CURRENT_PLAYER",
                payload: getNextMove(currentPlayer),
            })
        }
    }
    return (
        <button
            onClick={() => handleClickCell(index)}
            className={clsx(
                "text-4xl font-bold flex items-center justify-center border border-b-gray-900 -ml-px -mt-px",
            )}
        >
            {children}
        </button>
    )
}
