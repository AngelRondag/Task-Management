import {taskReducer} from '../redux/reducers/taskReducer';

import { legacy_createStore as CreateStore } from "redux";

export const store = CreateStore(taskReducer);