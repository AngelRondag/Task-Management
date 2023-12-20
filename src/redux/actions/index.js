import {
    DELETE_TASK,
    SET_POGRESS,
    SET_TASKS,
    REPEATED_TASK,
    SET_MESSAGE,
    UPDATE_TASK,
    TOGGLE_NAVIGATION_ITEMS,

} from "./types";

export const setTasks = (payload, tasks) => {
    const repeatedTask = tasks.find(task => payload.title === task.title);

    if (!repeatedTask) {
        return {
            type: SET_TASKS,
            payload
        }
    } else {
        return {
            type: REPEATED_TASK,
        }
    }
}
export const setMessage = (payload) => ({
    type: SET_MESSAGE,
    payload
});

export const setPogress = (payload) => ({
    type: SET_POGRESS,
    payload
});

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
});

export const updateTask = (payload) => ({
    type: UPDATE_TASK,
    payload
});

export const toggleNavigationItems = (payload) => ({
    type: TOGGLE_NAVIGATION_ITEMS,
    payload
})
