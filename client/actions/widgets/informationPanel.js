// actions

import * as constant from '../../../shared/constants/pointOfInterest';


export function saveFirstInformationPanel(data) {

    return {
        type: constant.INFORMATION_PANEL_CREATION_SAVE_ON_LOAD,
        payload: data
    };
}
