import NavLink from './NavLink';
interface MenuNavbarProps {
    links:any[];
    onClick: () => void;
}
const MenuNavbar = ({links, onClick }: MenuNavbarProps) => {
  return (
    <ul className="flex flex-col py-4 items-center w-[70%] left-0">
    {
      (links as any[]).map((link: any, index: number) => (
        <li key={index}>
          <NavLink {...link} onClick={onClick}/>
        </li>
      ))}
    </ul>
  )
}
export default MenuNavbar