import { DELETE_TASK, SET_POGRESS, SET_TASKS } from "./types";

export const setTasks = (payload) => ({
    type: SET_TASKS,
    payload
});

export const setPogress = (payload) => ({
    type: SET_POGRESS,
    payload
}); 

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})  