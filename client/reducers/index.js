import { combineReducers } from 'redux';

import user from './user';
import pointOfInterestCreationWindow from './pointOfInterestCreationWindow';

export default combineReducers({
    user,
    pointOfInterestCreationWindow
});
