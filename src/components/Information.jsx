import { useDispatch, useSelector } from "react-redux"
import { currentPlayerSelect, isDrawSelect, isGameEndedSelect } from "../store/selectors"

export function Information() {
    const dispatch = useDispatch()

    const isDraw = useSelector(isDrawSelect)
    const isGameEnded = useSelector(isGameEndedSelect)
    const currentPlayer = useSelector(currentPlayerSelect)

    const resetGame2 = () => dispatch({ type: "RESET_GAME" })

    return (
        <div className="w-full flex items-center h-28 border border-b-gray-900 -mx-px px-6 mb-4 rounded-2xl text-2xl justify-between">
            {isDraw && "Ничья"}
            {!isDraw && isGameEnded && `Победа: ${currentPlayer}`}
            {!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
            {isGameEnded && (
                <button
                    onClick={resetGame2}
                    className="border rounded-md h-11 bg-blue-700 text-white text-xl px-5"
                >
                    Начать заново
                </button>
            )}
        </div>
    )
}
