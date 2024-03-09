import NavItem from "../layout/NavItem";

const Navbar = () => {
  return (
    <main className="text-gray-600 body-font">
      <nav>
        <ul>
          <NavItem path="/" text="Home" />
          <NavItem path="/about" text="About" />
          <NavItem path="/contact" text="Contact" />
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
