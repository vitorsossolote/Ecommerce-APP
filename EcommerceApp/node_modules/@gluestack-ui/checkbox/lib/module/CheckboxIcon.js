function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';
const CheckboxIcon = StyledCheckboxIcon => /*#__PURE__*/forwardRef(({
  children,
  forceMount = false,
  ...props
}, ref) => {
  const {
    isChecked
  } = useCheckbox('CheckboxContext');
  if (forceMount || isChecked) {
    return /*#__PURE__*/React.createElement(StyledCheckboxIcon, _extends({}, props, {
      ref: ref
    }), children);
  }
  return null;
});
export default CheckboxIcon;
//# sourceMappingURL=CheckboxIcon.js.map