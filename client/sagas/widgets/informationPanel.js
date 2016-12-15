import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import Api from '../../../shared/api/';
//import * as constant from '../../../shared/constants/';
import {
    CLOSE_POI_CREATION_WINDOW,
    INFORMATION_PANEL_CREATION_SAVE_ON_LOAD,
    INFORMATION_PANEL_CREATION_SAVE_ON_SUCCESS,
    INFORMATION_PANEL_CREATION_SAVE_ON_ERROR
} from '../../../shared/constants/pointOfInterest';
import { User, POI } from '../../selectors/';

function* newInformationPanel(action) {

    try {
        const user = yield select(User.get);
        const coords = yield select(POI.getCreationWindowData).coords;
        let payload = {
            time: new Date().getTime(),
            coords,
            user,
            ...action.payload,
        };
        const savedInformationPanel = yield call(Api.newInformationPanel, payload, user.jwt);
        yield put({ type: INFORMATION_PANEL_CREATION_SAVE_ON_SUCCESS, savedInformationPanel });
        yield put({ type: CLOSE_POI_CREATION_WINDOW });
    } catch (err) {
        console.log(err, 'err');
        yield put({ type: INFORMATION_PANEL_CREATION_SAVE_ON_ERROR });
    }
}

export function* informationPanelSaga() {
    yield takeLatest(INFORMATION_PANEL_CREATION_SAVE_ON_LOAD, newInformationPanel);
}
