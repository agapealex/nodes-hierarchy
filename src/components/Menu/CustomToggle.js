import React from "react";
import * as Icon from 'react-bootstrap-icons';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="a"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <Icon.ThreeDotsVertical  className="three-dots" size={25} />
  </a>
));

export default CustomToggle;
