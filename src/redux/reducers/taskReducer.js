
import {
    DELETE_TASK,
    REPEATED_TASK,
    SET_MESSAGE,
    SET_POGRESS,
    SET_TASKS,
    TOGGLE_NAVIGATION_ITEMS,
    UPDATE_TASK,
} from "../actions/types";

const TASKS_V1 = 'TASKS_V1';
const NAVIGATION_ITEMS = 'NAVIGATION_ITEMS';
const items = [
    { id: 0, display: false, icon: 'IoCalculator', path: '/calculator' },
    { id: 1, display: true, icon: 'FaPlus', path: '/create-task' },
    { id: 2, display: true, icon: 'GrTasks', path: '/tasks/all' },
    { id: 3, display: true, icon: 'FaSearch', path: '/search-task' },
    { id: 4, display: true, icon: 'IoMdSettings', path: '/settings' },
]

const initialState = {
    tasks: JSON.parse(localStorage.getItem(TASKS_V1)) || [],
    displayMesaage: false,
    searchValue: '',
    navigationItems: JSON.parse(localStorage.getItem(NAVIGATION_ITEMS)) || items
};

const taskReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {

        case SET_TASKS:
            newState = {
                ...state,
                tasks: [...state.tasks, action.payload],
                displayMesaage: ''
            }
            break;

        case REPEATED_TASK:
            newState = {
                ...state,
                displayMesaage: true
            }
            break;

        case SET_MESSAGE:
            newState = {
                ...state,
                displayMesaage: action.payload
            }
            break

        case SET_POGRESS:
            newState = {
                ...state,
                tasks: state.tasks.map(task =>
                    task.title === action.payload.title
                        ? { ...task, pogress: !task.pogress }
                        : task
                )
            }
            break;

        case DELETE_TASK:
            newState = {
                ...state,
                tasks: state.tasks.filter(task =>
                    task.title !== action.payload
                )
            }
            break;

        case UPDATE_TASK:
            newState = {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? action.payload
                        : task
                )
            }
            break
        case TOGGLE_NAVIGATION_ITEMS:
            newState = {
                ...state,
                navigationItems: state.navigationItems.map(item =>
                    item.id === action.payload
                        ? { ...item, display: !item.display }
                        : item
                )
            }
            break

        default:
            newState = state;
    }
    localStorage.setItem(TASKS_V1, JSON.stringify(newState.tasks))
    localStorage.setItem(NAVIGATION_ITEMS, JSON.stringify(newState.navigationItems))
    return newState
}

export { taskReducer }