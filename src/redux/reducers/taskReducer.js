import { DELETE_TASK, SET_POGRESS, SET_TASKS } from "../actions/types";

const TASKS_V1 = 'TASKS_V1';
const initialState = {
    tasks: JSON.parse(localStorage.getItem(TASKS_V1)) || []
};

const taskReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {

        case SET_TASKS:
            newState = {
                ...state,
                tasks: [...state.tasks, action.payload]
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
            break

        case DELETE_TASK:
            newState = {
                ...state,
                tasks: state.tasks.filter(task =>
                    task.title !== action.payload
                )
            }
            break

        default:
            newState = state;
    }
    localStorage.setItem(TASKS_V1, JSON.stringify(newState.tasks))
    return newState
}

export { taskReducer }