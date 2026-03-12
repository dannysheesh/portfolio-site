export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/72 backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
        <div className="text-[0.9rem] font-semibold text-gray-100 tracking-[-0.01em]">
          Daniel Mangelsdorf
        </div>
        <div className="flex gap-8 items-center">
          <a
            href="#work"
            className="hidden md:inline text-gray-300 no-underline text-xs font-normal transition-colors duration-250 hover:text-white"
          >
            Work
          </a>
          <a
            href="#approach"
            className="hidden md:inline text-gray-300 no-underline text-xs font-normal transition-colors duration-250 hover:text-white"
          >
            Approach
          </a>
          <a
            href="#writing"
            className="hidden md:inline text-gray-300 no-underline text-xs font-normal transition-colors duration-250 hover:text-white"
          >
            Writing
          </a>
          <a
            href="#contact"
            className="text-gray-300 no-underline text-xs font-normal transition-colors duration-250 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
