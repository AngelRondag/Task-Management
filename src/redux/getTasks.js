import { useSelector } from 'react-redux';

export const getTasks = (type) => {
    const storeTask = useSelector(state => state.storeTasks);
    
    if (type) {
        return storeTask[type].tasks
    } else {
        const tasks = Object.values(storeTask)
        const allTasks = [].concat(...tasks.map(obj => obj.tasks))
        return allTasks
    }

}