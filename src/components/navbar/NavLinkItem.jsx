import { NavLink } from "react-router-dom";

const NavLinkItem = ( {to, text, onClick} ) => {
    return (
        <li className="cursor-pointer" onClick={onClick}>
            <NavLink
                style={({ isActive, isTransitioning }) => {
                    return {
                      background: isActive ? "#7e22ce" : "inherit",
                      color: isActive ? "#fff" : "#7e22ce",
                      padding:".3rem .6rem",
                      display:"block",
                      borderRadius:"4px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                      transition: "all 0.7s, color 0.3s",
                    };
                }}
                to={to}
            >
              {text}
            </NavLink>
        </li>
    );
};
export default NavLinkItem;