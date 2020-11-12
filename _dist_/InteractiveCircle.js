import {styled} from "../web_modules/@material-ui/core/styles.js";
export default styled("circle")((props) => ({
  "&:hover": {
    cursor: "pointer"
  },
  opacity: props.selected ? 1 : 0.5
}));
