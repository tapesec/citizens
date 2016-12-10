import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    openCreationWindow,
    closeCreationWindow,
    selectWidget
} from '../../client/actions/pointOfInterest';
import {
    saveFirstInformationPanel
} from '../../client/actions/widgets/informationPanel';

import { POI } from '../../client/selectors/';
import MapContainer from '../components/map/MapContainer';

const mapStateToProps = (state) => {
    return {
        POICreationWindow: POI.getCreationWindowData(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            openPOICreationWindow: bindActionCreators(openCreationWindow, dispatch),
            closeCreationWindow: bindActionCreators(closeCreationWindow, dispatch),
            selectWidget: bindActionCreators(selectWidget, dispatch),
            saveFirstInformationPanel: bindActionCreators(saveFirstInformationPanel, dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
