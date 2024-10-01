function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';
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
export function Progress(StyledProgress) {
  return /*#__PURE__*/forwardRef(({
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
    return /*#__PURE__*/React.createElement(StyledProgress, _extends({
      ref: ref
    }, progressProps, props), /*#__PURE__*/React.createElement(ProgressProvider, {
      min: min,
      max: max,
      valueWidth: progressProps.valueWidth,
      valueHeight: progressProps.valueHeight,
      orientation: orientation
    }, children));
  });
}
//# sourceMappingURL=Progress.js.map