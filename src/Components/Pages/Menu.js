import React from 'react'
import {Data} from "../Styles/Data/Data";
import MenuItem from "../MenuItem"
import '../Styles/Menu.css';

function Menu() {
  console.log("menu");
  return (
    <div className='menu'>
        <div className="menuTitle">
            <div className="menuList">
                {Data.map((menuItem, key) => {
                    return (
                      <MenuItem
                      key={key}
                      image={menuItem.image}
                      name={menuItem.name}
                      price={menuItem.price}
                      />
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Menu