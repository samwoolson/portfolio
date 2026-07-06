function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "GitHub", href: "https://github.com/samwoolson", external: true },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="font-bold text-lg md:text-xl text-neutral-800"
        >
          Sam Woolson
        </a>

        <div className="flex items-center gap-6 text-sm text-neutral-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative block cursor-pointer transition-colors duration-300 ease-in-out hover:text-stone-900 group"
            >
              <span className="group-hover:font-bold transition-all duration-300">
                {item.label}
              </span>

              <span
                className="invisible block h-0 font-bold overflow-hidden"
                aria-hidden="true"
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
