import React from 'react';
import MainChat from '../../containers/MainChat';
import MapContainer from '../../containers/MapContainer';

import './Area1.scss';

// Composant de localisation sur la page
// représente les 3 quarts gauche de la page sous le menu
const Area1 = () => (

    <div className="Area1">
        { /*<MainChat /> */ }
        <MapContainer />
    </div>

);

export default Area1;
