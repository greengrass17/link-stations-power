import React from 'react';
import { styled } from '@material-ui/core/styles'

const Root = styled('svg')({
  height: 'calc(100vh - 16px)',
});

export default function Map({ start, end, step, children }) {
  return (
    <Root viewBox={`${start} ${start} ${end} ${end}`}>
      {Array((end - start) / step)
        .fill(0)
        .map((_, i) => i * step + start)
        .map((number) => (
          <>
            <path
              d={`M ${number},${start + 5} v ${end - start}`}
              stroke="#dadada"
              strokeWidth="0.1"
            />
            <text x={number} y={start + 2} fontSize="2px" textAnchor="middle">
              {number}
            </text>
            <path
              d={`M ${start + 5},${number} h ${end - start}`}
              stroke="#dadada"
              strokeWidth="0.1"
            />
            <text x={start + 2} y={number} fontSize="2px" textAnchor="middle">
              {number}
            </text>
          </>
        ))}
        {children}
    </Root>
  );
}
