import React from "../web_modules/react.js";
import {indigo} from "../web_modules/@material-ui/core/colors.js";
import InteractiveCircle2 from "./InteractiveCircle.js";
function Station({info: [x, y, range], selected}) {
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(InteractiveCircle2, {
    selected,
    stroke: indigo[800],
    cx: x,
    cy: y,
    r: range,
    fill: "none",
    strokeWidth: "0.25"
  }), /* @__PURE__ */ React.createElement(InteractiveCircle2, {
    selected,
    fill: indigo[800],
    cx: x,
    cy: y,
    r: "0.5"
  }));
}
export default Station;
