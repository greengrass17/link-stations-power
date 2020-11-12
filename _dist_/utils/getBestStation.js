import stations from '../stations.json.proxy.js';

function getPower(reach, distanceFromStation) {
  if (distanceFromStation > reach) return 0;
  return Math.pow(reach - distanceFromStation, 2);
}

function getDistance([x1, y1], [x2, y2]) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getBestStation(point) {
  let bestStation = { station: null, power: 0 };
  stations.forEach((station) => {
    const power = getPower(station[2], getDistance(station, point));
    if (power > bestStation.power) {
      bestStation = { station, power };
    }
  });
  const text = !!bestStation.power
    ? `Best link station for point ${point[0]},${point[1]} is ${
        bestStation.station[0]
      },${bestStation.station[1]} with power ${Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
      }).format(bestStation.power)}`
    : `No link station within reach for point ${point[0]},${point[1]}`;
  return { ...bestStation, text };
}

export default getBestStation;
