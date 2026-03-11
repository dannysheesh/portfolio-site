export default function Footer() {
  return (
    <footer className="border-t border-gray-800 p-8">
      <div className="max-w-[980px] mx-auto flex justify-between items-center">
        <span className="text-xs text-gray-600">&copy; 2026 Danny Mangelsdorf</span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/daniel-mangelsdorf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 no-underline text-xs transition-colors hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dannysheesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 no-underline text-xs transition-colors hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="mailto:daniel@mangelsdorf.au"
            className="text-gray-500 no-underline text-xs transition-colors hover:text-gray-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
