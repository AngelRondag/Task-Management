import { TaskIcon } from '../../TaskIcon'

const TaskDescription = ({ type, description }) => {
    return (
        <div className='flex w-full gap-3 h-auto rounded-lg bg-white p-3 shadow-md relative '>
            <div className='flex items-start gap-4'>
                <span className='mt-0.5 flex text-sm'>
                    <TaskIcon type={type} />
                </span>
                <p className='text-sm text-secondary mt-2.5'>{description}</p>
            </div>
            <p className='text-cust-intermediate text-xxs absolute top-2 left-14'>{type}</p>
        </div>
    )
}

export { TaskDescription }