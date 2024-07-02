


import React from 'react'
import MenuList from './menu-list.jsx'
import "./NestedMenu.css"

const NestedMenu = ({menus =[] }) => {
  return (
    <div className='tree-container'>
        <MenuList list={menus} />
    </div>
  )
}

export default NestedMenu
