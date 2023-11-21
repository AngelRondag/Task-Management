import { SET_ALL_TASKS, SET_TASK } from "../actions/types";

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case SET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }
}

export { taskReducer }