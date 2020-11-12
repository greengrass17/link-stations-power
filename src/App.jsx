import React, { useState } from 'react';
import stations from './stations.json';
import points from './points.json';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import isEqual from 'lodash/isEqual';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import getBestStation from './utils/getBestStation';
import Typography from '@material-ui/core/Typography';
import Station from './Station';
import Point from './Point';

const WorkSpace = styled('svg')({
  height: '100vh',
});

const pointsWithStation = points.map((point) => ({
  ...getBestStation(point),
  position: point,
}));

function App() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const handlePointClick = (point) => () => {
    setSelectedPoint(point);
  };

  return (
    <Box display="flex">
      <Box>
        <WorkSpace viewBox="-20 -20 150 150">
          {stations.map((station) => (
            <Station
              info={station}
              selected={
                selectedPoint && isEqual(station, selectedPoint.station)
              }
            />
          ))}
          {pointsWithStation.map((point) => (
            <Point
              info={point}
              selected={selectedPoint && isEqual(point.position, selectedPoint.position)
              }
              onClick={setSelectedPoint}
            />
          ))}
        </WorkSpace>
      </Box>
      <Box flexGrow="1" p={2}>
        <Typography variant="h3">Best Link Station</Typography>
        <List>
          {pointsWithStation.map((point) => (
            <ListItem
              selected={isEqual(point, selectedPoint)}
              button
              onClick={handlePointClick(point)}
            >
              <ListItemText primary={point.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default App;
