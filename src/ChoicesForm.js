import React from 'react';
import './Choices.css';

const ChoicesForm = ({ choices, handleClick }) => {
  const countries = choices.map(c => (
    <div className="country" key={c.name} onClick={() => handleClick(c)}>
      {c.name}
    </div>
  ));
  return (
    <div>
      <p>Select the corresponding country for the flag below</p>
      <div className="countries-container">{countries}</div>
    </div>
  );
};

export default ChoicesForm;
