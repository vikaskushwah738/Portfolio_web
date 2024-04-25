import { ReactNode } from 'react'

interface tabBut{
    active:boolean,
    selectTab:( ) => void,
    children:ReactNode;
}
const TabButton = ({active, selectTab, children}:tabBut) => {
  
const buttonClasses= active 
  ? "text-white border-b border-purple-500" 
  : "text-[#ADB7BE]" 
  
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white
        ${buttonClasses}`}  >
         {children}
        </p>
    </button>
  )
}

export default TabButton