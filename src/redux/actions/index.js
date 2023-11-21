import { SET_ALL_TASKS, SET_TASK } from "./types";

export const setTask = (payload) => ({
    type: SET_TASK,
    payload
})

export const setAllTasks = (payload) => ({
    type: SET_ALL_TASKS,
    payload
})