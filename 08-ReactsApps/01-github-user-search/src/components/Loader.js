import React from 'react';
import loading from '../assets/loading.gif';

function Loader() {
    return (
        <div className="loader-container">
            <img src={loading} alt="loader" className="loader" />
        </div>
    );
}

export default Loader;
