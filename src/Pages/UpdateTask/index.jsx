import { useParams } from 'react-router-dom';
import { CreateTask } from '../CreateTask';

const UpdateTask = () => {
    const {id} = useParams()
    
    return (
        <CreateTask id={id}/>
    )
}


export { UpdateTask }