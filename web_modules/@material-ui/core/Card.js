import { a as _extends, c as _objectWithoutProperties, e as clsx } from '../../common/defaultTheme-7a5b00e1.js';
import '../../common/_commonjsHelpers-eb5a497e.js';
import { w as withStyles } from '../../common/withStyles-bb52e710.js';
import { r as react } from '../../common/index-d0e3fe20.js';
import '../../common/red-f9e3bfaf.js';

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
var Paper$1 = withStyles(styles, {
  name: 'MuiPaper'
})(Paper);

var styles$1 = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react.forwardRef(function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = _objectWithoutProperties(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react.createElement(Paper$1, _extends({
    className: clsx(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles$1, {
  name: 'MuiCard'
})(Card);

export default __pika_web_default_export_for_treeshaking__;
