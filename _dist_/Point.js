import React from "../web_modules/react.js";
import {red} from "../web_modules/@material-ui/core/colors.js";
import InteractiveCircle2 from "./InteractiveCircle.js";
function Point({info, selected, onClick}) {
  const handlePointClick = (point) => () => {
    onClick && onClick(point);
  };
  return /* @__PURE__ */ React.createElement(InteractiveCircle2, {
    selected,
    fill: red[800],
    cx: info.position[0],
    cy: info.position[1],
    r: "0.75",
    onClick: handlePointClick(info)
  });
}
export default Point;
