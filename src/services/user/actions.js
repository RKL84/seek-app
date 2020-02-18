
import { SELECT_USER } from './actionTypes';

export const selectUser = user => ({
    type: SELECT_USER,
    payload: user
});
