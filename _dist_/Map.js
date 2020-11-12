import React from "../web_modules/react.js";
import {styled} from "../web_modules/@material-ui/core/styles.js";
const Root = styled("svg")({
  height: "calc(100vh - 16px)"
});
export default function Map({start, end, step, children}) {
  return /* @__PURE__ */ React.createElement(Root, {
    viewBox: `${start} ${start} ${end} ${end}`
  }, Array((end - start) / step).fill(0).map((_, i) => i * step + start).map((number) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: `M ${number},${start + 5} v ${end - start}`,
    stroke: "#dadada",
    strokeWidth: "0.1"
  }), /* @__PURE__ */ React.createElement("text", {
    x: number,
    y: start + 2,
    fontSize: "2px",
    textAnchor: "middle"
  }, number), /* @__PURE__ */ React.createElement("path", {
    d: `M ${start + 5},${number} h ${end - start}`,
    stroke: "#dadada",
    strokeWidth: "0.1"
  }), /* @__PURE__ */ React.createElement("text", {
    x: start + 2,
    y: number,
    fontSize: "2px",
    textAnchor: "middle"
  }, number))), children);
}
