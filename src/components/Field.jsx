import { Cell } from "./Cell.jsx"
import { getNextMove, getWinner } from "../lib/utils.js"
import { useDispatch, useSelector } from "react-redux"
import {
    currentPlayerSelect,
    fieldSelect,
    isGameEndedSelect,
} from "../store/selectors.js"
import {
    makeMove,
    setCurrentPlayer,
    setDraw,
    setGameEnded,
} from "../store/actions.js"


export function Field() {
    const field = useSelector(fieldSelect)
    const dispatch = useDispatch()
    const isGameEnded = useSelector(isGameEndedSelect)
    const currentPlayer = useSelector(currentPlayerSelect)

    const handleClickCell = (index) => {
        if (isGameEnded || field[index]) {
            return
        }

        dispatch(makeMove(index, currentPlayer))

        const newField = field.map((cell, i) =>
            i === index ? currentPlayer : cell,
        )
        const winner = getWinner(newField)
        const isDraw = !winner && newField.every((cell) => cell !== "")

        if (winner) {
            dispatch(setGameEnded(true))
        } else if (isDraw) {
            dispatch(setGameEnded(true))
            dispatch(setDraw(true))
        } else {
            dispatch(setCurrentPlayer(getNextMove(currentPlayer)))
        }
    }

    return (
        <div className="grid grid-cols-3 grid-rows-3 w-full h-[448px]">
            {field.map((cell, index) => (
                <Cell key={index} index={index} handleClickCell={handleClickCell}>
                    {cell}
                </Cell>
            ))}
        </div>
    )
}
