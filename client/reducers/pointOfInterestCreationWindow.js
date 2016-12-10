//import * as constant from '../../shared/constants/';
import * as constant from '../../shared/constants/pointOfInterest';

export default function pointOfInterestCreationWindow(state={}, action) {
    switch(state, action.type) {
    case constant.OPEN_POI_CREATION_WINDOW: {
        let newState = {...state};
        newState.opened = true;
        newState.data = {
            coords: action.payload.coords
        };
        return newState;
    }
    case constant.CLOSE_POI_CREATION_WINDOW: {
        let newState = {...state};
        newState.opened = false;
        newState.widgetSelected = constant.NONE;
        newState.data = null;
        return newState;
    }
    case constant.MODULE_SELECTED: {
        let newState = {...state};
        newState.widgetSelected = action.payload.widgetSelected;
        return newState;
    }
    default:
        return state;
    }
}
