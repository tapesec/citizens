import React from 'react';
import MainChat from '../../containers/MainChat';


// Composant de localisation sur la page
// 1 section = 1 ligne, 1 area = 1 colonne de la ligne (Les sections n'existent pas pour le moment)
const Area1 = () => (
    <div className="row">
        <div className="col-md-8 col-md-offset-2">
            <MainChat />
        </div>
    </div>
);

export default Area1;
