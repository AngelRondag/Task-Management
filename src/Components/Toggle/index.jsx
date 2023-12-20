import { useDispatch,useSelector } from 'react-redux';
import { toggleNavigationItems } from '../../redux/actions';

const Toggle = ({ id }) => {
    const dispatch = useDispatch();
    const navigationItems = useSelector(state => state.navigationItems);
    const item = navigationItems.find(item => item.id === id);

    const handleItems = (id) => {
        dispatch(toggleNavigationItems(id))
    }

    return (
        <label className=' relative bg-slate-100 w-12 h-6 ml-5 inline-block shadow-md rounded-full'>
            <input type="checkbox" className='sr-only peer' onChange={() => handleItems(id)} />
            <span className={`w-2/5 h-3/4 absolute ${item.display?'bg-cust-primary right-1' : 'bg-gray-400 right-6' } rounded-full right-1 top-1  transition-all duration-500`}></span>
        </label>
    )
}

export { Toggle }