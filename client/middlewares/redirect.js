import { browserHistory } from 'react-router';
import * as constant from '../../shared/constants/';

export default store => next => action => {
    if ( action.type == constant.CHANGE_ROUTE ) {
        browserHistory.push(action.redirect);
    }
    return next(action);
};
