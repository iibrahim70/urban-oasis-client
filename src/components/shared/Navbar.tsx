import logo from "@/assets/logo/logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="section-wrapper flex items-center justify-between gap-5 py-2">
      <div className="max-md:flex-1 flex items-center gap-2.5 lg:gap-5">
        <p>Buy</p>
        <p>Sell</p>
        <p>Services</p>
      </div>

      <div className="max-md:flex-1">
        <img
          src={logo}
          alt="Website Logo"
          className="mx-auto size-12 object-contain"
        />
      </div>

      <div className="max-md:flex-1 flex items-end justify-end">
        <Button size="sm">Signin</Button>
      </div>
    </nav>
  );
};

export default Navbar;
