import { TaskIcon } from '../../TaskIcon'

const TaskGroup = ({ type }) => {
    return (
        <div className='flex w-full relative gap-3 h-30 rounded-lg p-3 shadow-sm '>
            <div className='flex items-center gap-4'>
                <TaskIcon type={type} />
                <p className='text-sm  text-secondary mt-2.5 '>{type}</p>
            </div>
            <p className='text-cust-intermediate text-xxs absolute top-2 left-14'>
                Task Group
            </p>
        </div>
    )
}

export { TaskGroup }