import React from 'react';
import './Flag.css';

const Flag = ({ flag }) => {
  return (
    <div className='flag-container'>
      <img className='flag' src={flag} alt="flag" />
    </div>
  )
}

export default Flag;