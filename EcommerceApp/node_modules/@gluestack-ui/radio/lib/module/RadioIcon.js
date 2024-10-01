function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';
export const RadioIcon = StyledRadioIcon => /*#__PURE__*/forwardRef(({
  children,
  forceMount = false,
  ...props
}, ref) => {
  const {
    isChecked
  } = useRadio('RadioContext');
  if (forceMount || isChecked) {
    return /*#__PURE__*/React.createElement(StyledRadioIcon, _extends({}, props, {
      ref: ref
    }), children);
  }
  return null;
});
//# sourceMappingURL=RadioIcon.js.map