import { c as _objectWithoutProperties, a as _extends, e as clsx } from '../../common/defaultTheme-7a5b00e1.js';
import '../../common/_commonjsHelpers-eb5a497e.js';
import { w as withStyles } from '../../common/withStyles-bb52e710.js';
import { r as react } from '../../common/index-d0e3fe20.js';
import '../../common/red-f9e3bfaf.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react.forwardRef(function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = _objectWithoutProperties(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCardContent'
})(CardContent);

export default __pika_web_default_export_for_treeshaking__;
