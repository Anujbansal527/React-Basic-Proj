import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa"

const MenuItem = ({ item }) => {
  const [displatCurChild, setDisplayCurChild] = useState({});

  const handelToggle = (getLabel) => {
    setDisplayCurChild({
      ...displatCurChild,
      [getLabel]: !displatCurChild[getLabel],
    });
  };

  return (
    <li > 
      <div  className="menu-item">
      <p>{item.label}</p>
        {item && item.children  && item.children.length ? (
          <span onClick={() => handelToggle(item.label)}>{
            displatCurChild[item.label] ? <FaMinus color="white" size={20}/> : <FaPlus color="white" size={20}/>
          }</span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displatCurChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
