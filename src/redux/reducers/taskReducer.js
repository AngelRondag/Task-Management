import {
    CREATE_PROFILE,
    DELETE_TASK,
    REPEATED_TASK,
    SET_MESSAGE,
    SET_POGRESS,
    SET_TASKS,
    TOGGLE_NAVIGATION_ITEMS,
    UPDATE_TASK,
} from "../actions/types";

const TASKS_V1 = 'TASKS_V1';
const PROFILE = 'PROFILE';
const NAVIGATION_ITEMS = 'NAVIGATION_ITEMS';

const items = [
    { id: 0, display: false, icon: 'IoCalculator', path: '/calculator' },
    { id: 1, display: true, icon: 'FaPlus', path: '/create-task' },
    { id: 2, display: true, icon: 'SiHomeadvisor', path: '/home' },
    { id: 3, display: true, icon: 'FaSearch', path: '/search-task' },
    { id: 4, display: true, icon: 'IoMdSettings', path: '/settings' },
]
const storeTasks = {
    'Work Project': { tasks: [] },
    'Personal Project': { tasks: [] },
    'Welfare': { tasks: [] },
    'Daily Study': { tasks: [] },
    'Unspecified': { tasks: [] },
}

const profile = {
    username: '',
    lastName: '',
    avatar: 'https://robohash.org/1?size=100x100',
    numAvatar: 1,
}

const initialState = {
    storeTasks: JSON.parse(localStorage.getItem(TASKS_V1)) || storeTasks,
    displayMesaage: false,
    searchValue: '',
    navigationItems: JSON.parse(localStorage.getItem(NAVIGATION_ITEMS)) || items,
    profile: JSON.parse(localStorage.getItem(PROFILE)) || profile
};

const taskReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {

        case SET_TASKS:
            const { newTasks, typeGroup } = action.payload
            const updateTasks = { tasks: [...state.storeTasks[typeGroup].tasks, newTasks] }

            newState = {
                ...state,
                storeTasks: {
                    ...state.storeTasks,
                    [typeGroup]: updateTasks
                },
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
            const { taskGroup: pogressTaskGroup, id: pogressId } = action.payload
            newState = {
                ...state,
                storeTasks: {
                    ...state.storeTasks,
                    [pogressTaskGroup]: {
                        ...state.storeTasks[pogressTaskGroup],
                        tasks: state.storeTasks[pogressTaskGroup].tasks.map(task => {
                            if (task.id === pogressId) {
                                return { ...task, pogress: !task.pogress }
                            }
                            return task
                        })
                    }
                }
            }
            break;

        case DELETE_TASK:
            const { taskGroup: deleteTaskGroup, id: deleteId } = action.payload
            newState = {
                ...state,
                storeTasks: {
                    ...state.storeTasks,
                    [deleteTaskGroup]: {
                        ...state.storeTasks[deleteTaskGroup],
                        tasks: state.storeTasks[deleteTaskGroup].tasks.filter(task => {
                            if (task.id !== deleteId) {
                                return task
                            }
                        })
                    }
                }
            }
            break;

        case UPDATE_TASK:
            const { taskGroup: upadteTaskGroup, id: updateId } = action.payload
            newState = {
                ...state,
                storeTasks: {
                    ...state.storeTasks,
                    [upadteTaskGroup]: {
                        ...state.storeTasks[upadteTaskGroup],
                        tasks: state.storeTasks[upadteTaskGroup].tasks.map(task =>
                            task.id === updateId
                                ? action.payload
                                : task
                        )
                    }
                }
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
        case CREATE_PROFILE : 
        newState = {
            ...state, profile: action.payload
            }
            break

        default:
            newState = state;
    }
    localStorage.setItem(TASKS_V1, JSON.stringify(newState.storeTasks))
    localStorage.setItem(NAVIGATION_ITEMS, JSON.stringify(newState.navigationItems))
    localStorage.setItem(PROFILE, JSON.stringify(newState.profile))
    return newState
}

export { taskReducer }