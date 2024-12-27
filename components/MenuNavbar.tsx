import NavLink from './NavLink';
interface MenuNavbarProps {
    links:any[];
    onClick: () => void;
}
const MenuNavbar = ({links, onClick }: MenuNavbarProps) => {
  return (
    <ul className="lg:hidden fixed  right-0 space-y-5 w-[75%] h-screen text-gray-700  bg-black bg-opacity-70 z-10 flex flex-col items-center pt-10 md:px-10 px-5">
    {
      (links as any[]).map((link, index) => (
        <li key={index} onClick={onClick} className='border-b-2 border-gray-50 w-full text-center'>
          <NavLink {...link} />
        </li>
      ))}
    </ul>
  )
}
export default MenuNavbar