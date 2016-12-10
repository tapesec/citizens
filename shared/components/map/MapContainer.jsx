import React, {PropTypes, Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

import PointOfInterestCreation from '../pointOfInterest/POIContainer';
import Marker from '../pointOfInterest/Marker';

import './MapContainer.scss';

export default class MapContainer extends Component {
    // static defaultProps = {
    //     center: {lat: 59.938043, lng: 30.337157},
    //     zoom: 9,
    //     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    // };

    //shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    _onRightClick(event) {
        const coords = event.latLng.toJSON();
        this.props.actions.openPOICreationWindow(coords);
    }

    _onGoogleApiLoaded({map, maps}) {
        maps.event.addListener(map, 'rightclick', this._onRightClick.bind(this));
    }


    render() {
        const POICreationWindow = this.props.POICreationWindow;
        let POICreationWindowComponent = null;
        let MarkerCreator = null;
        if (POICreationWindow.opened) {
            const P = POICreationWindow;
            POICreationWindowComponent =
            <PointOfInterestCreation data={POICreationWindow} actions={this.props.actions}/>;
            MarkerCreator =
            <Marker
                lat={P.data.coords.lat}
                lng={P.data.coords.lng}
                icon='pencil'
            />;
        }

        return (
            <div className="MapContainer">
                <ReactCSSTransitionGroup
                    transitionName="POICreationWindow"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    { POICreationWindowComponent }
                </ReactCSSTransitionGroup>
                <GoogleMap
                    onGoogleApiLoaded={ this._onGoogleApiLoaded.bind(this) }
                    defaultCenter={{lat: 44.840625 , lng: -0.77612 }}
                    defaultZoom={16}
                    layerTypes={['TrafficLayer']}
                >
                    { MarkerCreator /*visible when a POI is creating */}
                </GoogleMap>
            </div>
        );
    }
}
