import React from 'react'

const SideBar = ({ items, onItemClick, activeCategory }) => {
  return (
    <div className='sidebar sidebar-left'>
      <ul>
        {items.map((item, index) => <li className='sidebar-item'
                                        key={item}
                                        data-category={index}
                                        style={activeCategory == index ? {color: 'white', backgroundColor: '#233e5e' } : {}}
                                        onClick={onItemClick}>{item}</li>)}
      </ul>
    </div>
  )
}


export default SideBar
