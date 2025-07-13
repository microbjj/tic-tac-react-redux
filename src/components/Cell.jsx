import clsx from "clsx"

export function Cell({ children, index, handleClickCell }) {
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
