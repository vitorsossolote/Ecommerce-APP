"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = Progress;
var _react = _interopRequireWildcard(require("react"));
var _ProgressContext = require("./ProgressContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const useProgress = ({
  min,
  max,
  value,
  orientation = 'horizontal'
}) => {
  const calculatedValue = value < max && value > min ? Math.round((value - min) / (max - min) * 100) : value > min ? 100 : 0;
  return {
    'accessible': true,
    'tabIndex': 1,
    'role': 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': calculatedValue,
    'aria-valuetext': `${calculatedValue}%`,
    'aria-orientation': orientation,
    'valueWidth': orientation === 'horizontal' ? calculatedValue : 100,
    'valueHeight': orientation === 'vertical' ? calculatedValue : 100
  };
};
function Progress(StyledProgress) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    children,
    min = 0,
    max = 100,
    value = 0,
    orientation = 'horizontal',
    ...props
  }, ref) => {
    const progressProps = useProgress({
      min,
      max,
      value,
      orientation
    });
    return /*#__PURE__*/_react.default.createElement(StyledProgress, _extends({
      ref: ref
    }, progressProps, props), /*#__PURE__*/_react.default.createElement(_ProgressContext.ProgressProvider, {
      min: min,
      max: max,
      valueWidth: progressProps.valueWidth,
      valueHeight: progressProps.valueHeight,
      orientation: orientation
    }, children));
  });
}
//# sourceMappingURL=Progress.js.map