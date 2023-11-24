import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTask } from "../../Components/ButtonTask";
import { FaArrowCircleLeft as IconBack } from "react-icons/fa";

const CreateTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [toDo, setToDo] = useState({
        pogress: false,
        title: '',
        description: '',
        time: ''
    });


    const getTime = () => {
        const date = new Date();

        let hours = date.getHours();
        const minutes = date.getMinutes();
        let format = "AM";

        if (hours > 12) {
            hours -= 12;
            format = "PM";
        }
        return `${hours}:${minutes} ${format}`

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setToDo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const capitalizeWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const saveTask = () => {
        dispatch(setTasks({
            ...toDo,
            title: capitalizeWord(toDo.title),
            description: capitalizeWord(toDo.description),
            time: getTime()
        }))
        setToDo({
            pogress: false,
            title: '',
            description: '',
            time: ''
        })
        navigate('/home')
    };

    const goToBack = () => {
        navigate('/home')
    };


    return (
        <div className='flex  flex-col items-center gap-8'>
            <span className='absolute top-5 left-5' onClick={goToBack}>
                <IconBack color={'gray'} size={'1.4rem'} />
            </span>
            <h1 className='text-center text-lg font-bold mt-4'>Add Todo</h1>

            <label
                className='flex flex-col w-4/5 h-14 p-3 text-gray-500 text-xs border shadow-lg rounded-lg'
                color='gray'
            >Title
                <input
                    className='w-full h-full text-sm font-normal text-secondary outline-none'
                    onChange={handleChange}
                    value={toDo.title}
                    name='title'
                    type='text'
                />
            </label>

            <label
                className='flex flex-col w-4/5 h-30 p-3 text-gray-500 text-xs border shadow-lg rounded-lg'
            >Description
                <textarea
                    className='w-full h-full text-sm font-normal text-secondary outline-none'

                    onChange={handleChange}
                    value={toDo.description}
                    name='description'
                />
            </label>

            <ButtonTask
                content={'Add task to list'}
                onClick={saveTask}
            />
        </div>
    )
};

export { CreateTask }; 