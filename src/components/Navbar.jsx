export default function Navbar() {
  return (
    <nav className="px-4 pb-4 mt-6">
      <ul className="flex gap-6 text-lg justify-center border-t border-gray-700 pt-4">
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#talks" className="hover:text-green-400">Talks</a></li>
        <li><a href="#publications" className="hover:text-green-400">Publications</a></li>
        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  );
}
