import { NavLink } from "react-router-dom";

const NavLinkItem = ( {to, text, onClick} ) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
        <NavLink
          style={({ isActive, isPending }) => ({
            background: isActive ? "#6d28d9" : "inherit",
            padding:".3rem .6rem",
          })}
          className={`
            block rounded md:text-gray-50 hover:bg-gray-100
            md:hover:bg-transparent md:p-0
            ${(isActive, isPending) => (isActive ? 'active' : isPending ? 'pending' : '')}
          `}
          to={to}
        >
          {text}
        </NavLink>
    </li>
  );
};
export default NavLinkItem;