import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-dove-gray-0 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Logo />
          <div className="flex items-center lg:order-2">
            <Button
              asChild
              variant="ghost"
              className="mr-2 rounded-lg px-4 py-2 font-medium focus:outline-none lg:px-5 lg:py-2.5"
            >
              <Link to="/login">Log in</Link>
            </Button>
            <Button
              asChild
              className="mr-2 rounded-lg px-4 py-2 font-medium focus:outline-none lg:px-5 lg:py-2.5"
            >
              <Link to="/register">Get started</Link>
            </Button>
            <Button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1 inline-flex items-center focus:outline-none lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
              size="icon"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 fill-current" />
              ) : (
                <Menu className="h-6 w-6 fill-current" />
              )}
            </Button>
          </div>
          <Navbar isMenuOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
