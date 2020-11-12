import React, { useState } from 'react';
import stations from './stations.json';
import points from './points.json';
import Box from '@material-ui/core/Box';
import isEqual from 'lodash/isEqual';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import getBestStation from './utils/getBestStation';
import Typography from '@material-ui/core/Typography';
import Station from './Station';
import Point from './Point';
import Map from './Map';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
      <Box p={1}>
        <Map start={-20} end={150} step={10}>
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
              selected={
                selectedPoint && isEqual(point.position, selectedPoint.position)
              }
              onClick={setSelectedPoint}
            />
          ))}
        </Map>
      </Box>
      <Box flexGrow="1" p={2}>
        <Typography variant="h4">Best Link Station</Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography>About the map</Typography>
            <ul>
              <Typography component="li">
                Stations: <Typography component="span" color="primary">Blue circle </Typography> with range as the radius and position as the center
              </Typography>
              <Typography component="li">
                Points: <Typography component="span" color="secondary">Red dot </Typography> with position on the map
              </Typography>
              <Typography component="li">You can click on the point to highlight it, its best station and the power from that station</Typography>
              <Typography component="li">You can also select the point from the list below</Typography>
            </ul>
          </CardContent>
        </Card>
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
