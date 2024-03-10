import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  children?: React.ReactNode;
}
const NavItem = ({ path, text }: Props) => {
  return (
    <li className="!px-0">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-lg capitalize transition duration-300 hover:!text-[#00a3af] hover:bg-transparent focus:!bg-transparent active:!text-[#00a3af] active:!bg-transparent ${
            isActive
              ? "!text-[#00a3af] border-b-4 rounded-tr-full border-[#00a3af]"
              : "!text-[#333333]"
          }`
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
