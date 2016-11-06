import * as constant from '../../shared/constants/';


export function signUp(credentials) {
    return {
        type: constant.POST_CREDENTIALS,
        payload: {
            credentials
        }
    };
}

export function logOut() {
    return {
        type: constant.REQUEST_LOGOUT
    };
}
