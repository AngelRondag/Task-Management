import { Task } from "../Task";

const ListTask = ({ tasks, message }) => {
    return (
        <div className='w-full flex flex-col items-center gap-6 mt-10 mb-20 '>
            {tasks.length > 0 ? tasks.map(task => (
                < Task
                    key={task.title}
                    pogress={task.pogress}
                    title={task.title}
                    description={task.description}
                    time={task.time}
                />
            )) : <p className='text-gray-600 w-4/5 text-center mt-10'>{message}</p>
            }
        </div>
    )

}

export { ListTask };