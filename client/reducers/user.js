import * as constant from '../../shared/constants/';

export default function user(state={}, action) {
    switch(state, action.type) {
    case constant.USER_LOGIN_SUCCEDED: {
        let newState = action.user;
        return newState;
    }
    case constant.LOGOUT_ON_SUCCESS: {
        let newState = {...state};
        newState.accountName = null;
        newState.jwt = null;
        newState.isLogIn = false;
        newState._id = null;
        return newState;
    }
    default:
        return state;
    }
}
