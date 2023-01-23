import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import CustomToggle from "./CustomToggle";
import CustomMenu from "./CustomMenu";
import { ADD, DELETE, EDIT } from "../../common/constants";
import { convertUpperCamelCase } from "../../common/utils";

const Menu = ({ setActions }) => {
  const actionList = [ADD, EDIT, DELETE];

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} variant="success" />

      <Dropdown.Menu as={CustomMenu} className="dropdown-menu-container">
        {actionList.map((action, index) => (
          <Dropdown.Item
            onClick={() => setActions(action)}
            eventKey={`action-${index}`}
          >
            {convertUpperCamelCase(action)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
