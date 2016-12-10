import * as constant from '../../shared/constants/pointOfInterest';


export function openCreationWindow(coords) {
    return {
        type: constant.OPEN_POI_CREATION_WINDOW,
        payload: {
            coords
        }
    };
}

export function closeCreationWindow() {
    return {
        type: constant.CLOSE_POI_CREATION_WINDOW
    };
}

export function selectWidget(widgetSelected) {
    return {
        type: constant.MODULE_SELECTED,
        payload: {
            widgetSelected
        }
    };
}
