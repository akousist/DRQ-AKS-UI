function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames/bind'));

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

var styles = {"button":"_3jJ6D","button__size--md":"_2UZB7","icon":"_3xJrc","button__size--sm":"_x1R_n","button__theme--primary":"_344Q5","active":"_3RfqE","button__theme--secondary":"_WJcF5","button__theme--danger":"_28o0w","button__outline--primary":"_3aqUT","button__outline--secondary":"_2WFGd","button__outline--danger":"_3XC6t"};

var _excluded = ["size", "theme", "outline", "icon", "className"];
var cx = classNames.bind(styles);
var Button = function Button(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
    _ref$outline = _ref.outline,
    outline = _ref$outline === void 0 ? false : _ref$outline,
    Icon = _ref.icon,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement("button", Object.assign({
    className: cx(className, 'button', "button__size--" + size, outline ? "button__outline--" + theme : "button__theme--" + theme)
  }, props), Icon && React.createElement(Icon, {
    className: cx('icon')
  }), props.children);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
