import React from 'react';
import { indigo } from '@material-ui/core/colors';
import InteractiveCircle from './InteractiveCircle';

function Station({ info: [x, y, range], selected }) {
  return (
    <g>
      <InteractiveCircle
        selected={selected}
        stroke={indigo[800]}
        cx={x}
        cy={y}
        r={range}
        fill="none"
        strokeWidth="0.25"
      ></InteractiveCircle>
      <InteractiveCircle
        selected={selected}
        fill={indigo[800]}
        cx={x}
        cy={y}
        r="0.5"
      ></InteractiveCircle>
    </g>
  );
}

export default Station;
