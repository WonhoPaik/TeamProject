import React, { useState } from 'react';
import './MapToggleButton.css';

const MapToggleButton = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);

  const toggleMap = () => {
    setIsMapVisible(!isMapVisible);
  };

  return (
      <div className="map-container">
        <div className={`map ${isMapVisible ? 'map-visible' : 'map-hidden'}`}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426321.3761593143!2d126.50030563944702!3d33.40421682998769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1721805221332!5m2!1sko!2skr"
              width="90%" height="400vh" allowFullScreen=""
              loading="lazy"/>
        </div>
        <button className="toggle-button" onClick={toggleMap}>
          {isMapVisible ? '∧' : '∨'}
        </button>
      </div>
  );
};

export default MapToggleButton;
