import React from 'react';
import './Correct.css';
import WorldMap from './Map';

const Correct = ({ info, reset }) => {
  return (
    <div className="correct-container">
      <p>CORRECT, it is the flag of {info.name}</p>
      <p>
        {info.name} is in {info.subregion}, {info.region}
      </p>
      <button onClick={reset}>Play Again</button>
      <div id="map">
        <WorldMap info={info} />
      </div>
    </div>
  );
};

export default Correct;
