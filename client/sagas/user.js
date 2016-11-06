import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import Api from '../../shared/api/';
import * as constant from '../../shared/constants/';


function* submitSignUp(action) {
    try {
        const userInfo = yield call(Api.postCredentials, action.payload.credentials);
        yield put({ type: constant.USER_LOGIN_SUCCEDED, user: userInfo });
        yield put({ type: constant.CHANGE_ROUTE, redirect: constant.MAIN_PAGE });
    } catch (err) {
        yield put({ type: constant.USER_LOGIN_FAILED, message: err.message });
    }
}

function* submitLogOut() {
    try {
        yield put({ type: constant.LOGOUT_ON_LOAD });
        yield call(Api.requestLogout);
        yield put({ type: constant.LOGOUT_ON_SUCCESS});
        yield put({ type: constant.CHANGE_ROUTE, redirect: constant.SIGN_IN });
    } catch (err) {
        yield put({ type: constant.LOGOUT_ON_ERROR, message: err.message });
    }
}

export function* userSaga() {
    yield [
        takeLatest(constant.POST_CREDENTIALS, submitSignUp),
        takeLatest(constant.REQUEST_LOGOUT, submitLogOut)
    ];
}
