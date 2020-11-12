import React, {useState} from "../web_modules/react.js";
import stations2 from "./stations.json.proxy.js";
import points2 from "./points.json.proxy.js";
import Box2 from "../web_modules/@material-ui/core/Box.js";
import isEqual2 from "../web_modules/lodash/isEqual.js";
import List2 from "../web_modules/@material-ui/core/List.js";
import ListItem2 from "../web_modules/@material-ui/core/ListItem.js";
import ListItemText2 from "../web_modules/@material-ui/core/ListItemText.js";
import getBestStation2 from "./utils/getBestStation.js";
import Typography2 from "../web_modules/@material-ui/core/Typography.js";
import Station2 from "./Station.js";
import Point2 from "./Point.js";
import Map2 from "./Map.js";
import Card2 from "../web_modules/@material-ui/core/Card.js";
import CardContent2 from "../web_modules/@material-ui/core/CardContent.js";
const pointsWithStation = points2.map((point) => ({
  ...getBestStation2(point),
  position: point
}));
function App() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const handlePointClick = (point) => () => {
    setSelectedPoint(point);
  };
  return /* @__PURE__ */ React.createElement(Box2, {
    display: "flex"
  }, /* @__PURE__ */ React.createElement(Box2, {
    p: 1
  }, /* @__PURE__ */ React.createElement(Map2, {
    start: -20,
    end: 150,
    step: 10
  }, stations2.map((station) => /* @__PURE__ */ React.createElement(Station2, {
    info: station,
    selected: selectedPoint && isEqual2(station, selectedPoint.station)
  })), pointsWithStation.map((point) => /* @__PURE__ */ React.createElement(Point2, {
    info: point,
    selected: selectedPoint && isEqual2(point.position, selectedPoint.position),
    onClick: setSelectedPoint
  })))), /* @__PURE__ */ React.createElement(Box2, {
    flexGrow: "1",
    p: 2
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "h4"
  }, "Best Link Station"), /* @__PURE__ */ React.createElement(Card2, {
    variant: "outlined"
  }, /* @__PURE__ */ React.createElement(CardContent2, null, /* @__PURE__ */ React.createElement(Typography2, null, "About the map"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement(Typography2, {
    component: "li"
  }, "Stations: ", /* @__PURE__ */ React.createElement(Typography2, {
    component: "span",
    color: "primary"
  }, "Blue circle "), " with range as the radius and position as the center"), /* @__PURE__ */ React.createElement(Typography2, {
    component: "li"
  }, "Points: ", /* @__PURE__ */ React.createElement(Typography2, {
    component: "span",
    color: "secondary"
  }, "Red dot "), " with position on the map"), /* @__PURE__ */ React.createElement(Typography2, {
    component: "li"
  }, "You can click on the point to highlight it, its best station and the power from that station"), /* @__PURE__ */ React.createElement(Typography2, {
    component: "li"
  }, "You can also select the point from the list below")))), /* @__PURE__ */ React.createElement(List2, null, pointsWithStation.map((point) => /* @__PURE__ */ React.createElement(ListItem2, {
    selected: isEqual2(point, selectedPoint),
    button: true,
    onClick: handlePointClick(point)
  }, /* @__PURE__ */ React.createElement(ListItemText2, {
    primary: point.text
  }))))));
}
export default App;
