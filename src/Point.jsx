import React from 'react';
import { red } from '@material-ui/core/colors';
import InteractiveCircle from './InteractiveCircle';

function Point({ info, selected, onClick }) {
  const handlePointClick = (point) => () => {
    onClick && onClick(point);
  };

  return (
    <InteractiveCircle
      selected={selected}
      fill={red[800]}
      cx={info.position[0]}
      cy={info.position[1]}
      r="0.75"
      onClick={handlePointClick(info)}
    />
  );
}

export default Point;
