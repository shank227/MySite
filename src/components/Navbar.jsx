import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Insights", link: "/blogs" },  
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item) => {
    if (item.link) {
      return (
        <Link
          to={item.link}
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300"
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">My</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <div key={key}>{renderNavItem(item)}</div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <div
                key={key}
                onClick={() => setIsMenuOpen(false)}
              >
                {renderNavItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
