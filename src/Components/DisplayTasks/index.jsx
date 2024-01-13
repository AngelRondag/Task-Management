import { TaskStatus } from "../TaskStatus"
import { ListTask } from "../ListTask"

const DisplayTasks = ({ tasks, title, taskStatus, message }) => {

    return (
        <div className='flex flex-col items-center'>
            {title &&
                <div className='flex justify-center items-center gap-2 mt-4'>
                    <h1 className='text-center font-bold  text-lg'>{title}</h1>
                    <span className='px-1.5 py-0.5 text-xs bg-purple-200 text-cust-primary font-semibold  rounded-full'>{tasks.length}</span>
                </div>
            }
            {taskStatus &&
                <TaskStatus />
            }
            <ListTask
                tasks={tasks}
                message={message}
            />
        </div>
    )
}

export { DisplayTasks }