function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-40">
      <div
        onClick={scrollToTop}
        className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <a href="#home" className="font-bold text-lg md:text-xl">
          Sam Woolson
        </a>

        <div className="space-x-6 text-sm">
          <a
            href="#skills"
            className="hover:text-stone-900  hover:font-bold transition duration-300 ease-in-out"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-stone-900  hover:font-bold transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-stone-900  hover:font-bold transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <a
            href="https://github.com/sewoolson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900  hover:font-bold transition duration-300 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
