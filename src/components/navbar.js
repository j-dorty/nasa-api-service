import React from "react";
import { slide as Menu } from "react-burger-menu";
import { options } from "../constants/Options";

export default function Navbar(props) {
  return (
    <Menu {...props}>
      {options.map((v, i) => {
        return (
          <>
            <a className="burgerMenulink" href={v.href} key={i}>
              {v.LinkName}
            </a>
            <hr></hr>
          </>
        );
      })}
    </Menu>
  );
}
