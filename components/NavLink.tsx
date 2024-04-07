import Link from "next/link";

interface navBar{
    link:string,
    title:string
}
const NavLink = ({link , title}: navBar) => {
  return (
    <>
    <Link
    href={link}
    className="block py-2 pl-3 pr-4 text-white text-lg"> 
    {title} 
    </Link>
    </>
  )
}

export default NavLink