import Link from "next/link";

interface navBar{
    link:string,
    title:string
}
const NavLink = ({link , title}: navBar) => {
  return (
    <>
    <a
    href={link}
    className="block py-2 pl-3 pr-4 text-white text-lg"> 
    {title} 
    </a>
    </>
  )
}

export default NavLink