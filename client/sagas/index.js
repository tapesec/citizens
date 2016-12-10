import { fork } from 'redux-saga/effects';

import { userSaga } from './user';
import { informationPanelSaga } from './widgets/InformationPanel';



export function* init() {
    yield [
        fork(userSaga),
        fork(informationPanelSaga)
    ];
}
