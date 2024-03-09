import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}
const NavItem = ({ path, text }: Props) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-xl capitalize transition duration-300 hover:!text-primary hover:bg-transparent focus:!bg-transparent active:!text-gray-600 active:!bg-transparent ${
            isActive ? "!text-primary" : "!text-gray-600"
          }`
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
