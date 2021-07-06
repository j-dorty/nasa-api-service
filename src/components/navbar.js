import React from "react";
import { slide as Menu } from "react-burger-menu";
import { options } from "../constants/Options";

export default function Navbar(props) {
  const showSettings = (e) => {
    e.preventDefault();
  };

  console.log(options);

  return (
    <Menu {...props}>
      {options.map((v, i) => {
        return (
          <a href={v.href} key={i}>
            {v.LinkName}
          </a>
        );
      })}
    </Menu>
  );
}
