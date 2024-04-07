import React from 'react'

interface tabBut{
    active:boolean,
    selectTab:(id: string) => void,
   children:any
}
const TabButton = ({active, selectTab, children}:tabBut) => {
  const buttonClasses= active 
  ? "text-white border-b border-purple-500" 
  : "text-[#ADB7BE]" 
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the default behavior
    selectTab(children.toString()); // Convert children to string and pass it to selectTab
  };
    return (
    <button onClick={handleClick}>
        <p className={`mr-3 font-semibold hover:text-white
        ${buttonClasses}`}  >
         {children}
        </p>
    </button>
  )
}

export default TabButton