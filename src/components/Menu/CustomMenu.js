import React from "react";

const CustomMenu = React.forwardRef(
  ({ children, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div ref={ref} className={className} aria-labelledby={labeledBy}>
        {React.Children.toArray(children)}
      </div>
    );
  }
);

export default CustomMenu;
