
const ButtonTask = ({ content, onClick }) => {

    return (
        <button
            className=' w-11/12 mx-1 py-2  bg-primary rounded-xl text-white font-semibold fixed bottom-6'
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export { ButtonTask };