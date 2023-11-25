import { Task } from "../Task";
import { useSelector, useDispatch } from "react-redux";
import styles from './ListTask.module.css';
import { setMessage } from "../../redux/actions";
import { useEffect, useState } from "react";


const ListTask = ({ tasks, message }) => {
    const displaymessage = useSelector(state => state.displayMesaage)

    const [showNotification, setShowNotication] = useState(displaymessage)
    const dispatch = useDispatch();

    useEffect(()=> {
        setTimeout(()=>{
            setShowNotication(false)
            dispatch(setMessage(false));

        },6000)
    },[])
    return (
        <div className='w-full flex flex-col items-center gap-6 mt-10 mb-20'>
            {showNotification && <p className={styles.notification}>{'Oops! This Task is Already Registered'}</p>}
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