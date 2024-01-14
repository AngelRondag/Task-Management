import { useState, useEffect } from 'react';
import { DisplayTasks } from '../../Components/DisplayTasks';
import { CiSearch } from "react-icons/ci";
import { getTasks } from '../../redux/getTasks'

const SearchTask = () => {
    const [tasks, setTasks] = useState([]);

    const [value, setValue] = useState('');
    const allTasks = getTasks()

    useEffect(() => {
        setTasks(allTasks);
    }, [])

    const handleInput = (event) => {
        const value = event.target.value;
        setValue(value);
    }
    const searchedTasks = tasks.filter(task => {
        const taskValue = task.title.toLowerCase();
        const inputValue = value.toLowerCase();
        return taskValue.includes(inputValue);
    })

    return (

        <>
            <div className='flex justify-center items-center gap-2 mt-4'>
                <h1 className='text-center font-bold  text-lg'>Search your Task</h1>
                <span className='px-1.5 py-0.5 text-xs bg-purple-200 text-cust-primary font-semibold  rounded-full'>{searchedTasks.length}</span>
            </div>
            <form className='flex justify-center relative mt-6'>
                <label
                    htmlFor="search"
                    className='flex items-center w-4/5 max-w-xs px-3 relative bg-white font-normal text-sm border rounded-lg shadow-md'
                >
                    <input
                        value={value}
                        placeholder='Filter your To-do'
                        onChange={handleInput} name='search'
                        type='text'
                        className='w-full p-2 outline-none'
                    />
                    <CiSearch color='gray' size={'1.5rem'} />
                </label>
            </form>
            <DisplayTasks
                taskStatus={false}
                tasks={searchedTasks}
                message={'No results found'}
            />
        </>
    )
}

export { SearchTask }