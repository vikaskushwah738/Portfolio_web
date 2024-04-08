import NavLink from './NavLink';
interface MenuNavbarProps {
    links:any[];
}
const MenuNavbar = ({links }: MenuNavbarProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
    {
      (links as any[]).map((link: any, index: number) => (
        <li key={index}>
          <NavLink {...link} />
        </li>
      ))}
    </ul>
  )
}
export default MenuNavbar