import { Cell } from "./Cell.jsx"
import { useSelector } from "react-redux"
import { fieldSelect } from "../store/selectors.js"

export function Field() {
    const field = useSelector(fieldSelect)

    return (
        <div className="grid grid-cols-3 grid-rows-3 w-full h-[448px]">
            {field.map((cell, index) => (
                <Cell key={index} index={index}>
                    {cell}
                </Cell>
            ))}
        </div>
    )
}
