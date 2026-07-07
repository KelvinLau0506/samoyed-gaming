export default function Navbar() {
  return (
    <nav className="w-full border-b border-cyan-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <span className="text-3xl">🐶</span>
          <h1 className="text-2xl font-bold text-cyan-400">
            Samoyed Gaming
          </h1>
        </div>

        <div className="hidden gap-8 text-white md:flex">
          <a href=" " className="hover:text-cyan-400 transition">
            Home
          </a >

          <a href="#" className="hover:text-cyan-400 transition">
            Games
          </a >

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a >
        </div>

      </div>
    </nav>
  );
}