import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CustomToggle from "./CustomToggle";
import CustomMenu from "./CustomMenu";

import { ADD, DELETE, EDIT } from "../../common/constants";
import StyledMenu from "./menu.style";

const Menu = ({changeTree}) => {
    return (
        <div className="d-flex">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>
  
          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item onClick={()=> changeTree(ADD)} eventKey="1" >Add</Dropdown.Item>
            <Dropdown.Item onClick={()=> changeTree(EDIT)} eventKey="2">Edit</Dropdown.Item>
            <Dropdown.Item onClick={()=> changeTree(DELETE)} eventKey="2">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
      </div>
      );
}

export default Menu;
