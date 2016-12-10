import React, { PropTypes } from 'react';

import { NONE, INFORMATION_PANEL } from '../../constants/pointOfInterest';
import Header from './creator/Header';
import WidgetPicker from './creator/WidgetPicker';
import InformationPanel from './creator/InformationPanel';

import './POIContainer.scss';

export default class POIWindow extends React.Component {

    getViewContent(widgetSelected) {
        const { closeCreationWindow, selectWidget, saveFirstInformationPanel } = this.props.actions;
        switch (widgetSelected) {
        case NONE:
            return (
                <div>
                    <Header
                        title="Choisissez un module de présentation"
                        close={closeCreationWindow}
                    />
                    <WidgetPicker selectWidget={ selectWidget } />
                </div>
            );
        case INFORMATION_PANEL:
            return (
                <div>
                    <Header
                        title="Panneau d'information"
                        close={closeCreationWindow}
                    />
                    <InformationPanel onSave={saveFirstInformationPanel} />
                </div>
            );
        default:
            return (
                <div>
                    <Header
                        title="Choisissez un module de présentation"
                        close={closeCreationWindow}
                    />
                    <WidgetPicker selectWidget={ selectWidget } />
                </div>
            );

        }
    }

    render() {
        const { widgetSelected } = this.props.data;
        const viewContent = this.getViewContent(widgetSelected);

        return (
            <div className="POIContainer" key={1}>
                { viewContent }
            </div>
        );
    }
}

POIWindow.propTypes = {
    actions: PropTypes.shape({
        closeCreationWindow: PropTypes.func.isRequired,
        selectWidget: PropTypes.func.isRequired,
        saveFirstInformationPanel: PropTypes.func.isRequired
    }),
    data: PropTypes.shape({
        widgetSelected: PropTypes.string.isRequired
    })
};
