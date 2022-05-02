import React from 'react';
import starFilled from './images/star-filled.png';
import starEmpty from './images/star-empty.png';

export default function Star(props) {
  /* <img
            src={`../images/${starIcon}`}
            className='card--favorite'
            alt=''
            onClick={toggleFavorite}
          /> */
  const starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <img
      src={`${starIcon}`}
      className='card--favorite'
      alt=''
      onClick={props.handleClick}
    />
  );
}
