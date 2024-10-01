function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';
export function ProgressFilledTrack(StyledProgressFilledTrack) {
  return /*#__PURE__*/forwardRef(({
    style = {},
    ...props
  }, ref) => {
    const {
      valueWidth,
      valueHeight,
      orientation
    } = useProgress('ProgressContext');
    const filledStyle = orientation === 'vertical' ? {
      height: `${valueHeight}%`,
      width: '100%'
    } : {
      width: `${valueWidth}%`,
      height: '100%'
    };
    return /*#__PURE__*/React.createElement(StyledProgressFilledTrack, _extends({}, props, {
      style: [style, filledStyle],
      ref: ref
    }));
  });
}
//# sourceMappingURL=ProgressFilledTrack.js.map