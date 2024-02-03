import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const ToBack = ({ path }) => {

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(path);
    }

    return (
        <button
            className='w-10 h-10 flex justify-center items-center absolute top-2 left-2'
            onClick={handleBack}
        >
            <IoIosArrowBack size={20} />
        </button>
    )
}

export { ToBack }