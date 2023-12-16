const ButtonTask = ({ content, onClick,background,color,disabled }) => {

    return (
        <button
            disabled={disabled}
            className={`w-2/3 mx-1 py-2 max-w-sm ${background} ${color} rounded-lg text-sm font-semibold shadow-md`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export { ButtonTask };