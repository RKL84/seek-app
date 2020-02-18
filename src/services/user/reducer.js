import { SELECT_USER } from './actionTypes';

const initialState = {
    typeId: 'DEFAULT'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_USER:
            console.log(action.payload);
            return {
                ...state,
                typeId: action.payload
            };
        default:
            return state;
    }
}
