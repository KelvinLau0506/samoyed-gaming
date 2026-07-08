import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <a href=" " className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Samoyed Gaming"
            width={42}
            height={42}
            className="rounded-full"
          />

          <span className="text-2xl font-bold text-cyan-400">
            Samoyed Gaming
          </span>
        </a >

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="/"
            className="text-white transition hover:text-cyan-400"
          >
            首页
          </a >

          <a
            href="/peace-elite"
            className="text-white transition hover:text-cyan-400"
          >
            和平精英
          </a >

          <a
            href="https://wa.me/60107866876"
            target="_blank"
            className="rounded-lg bg-cyan-500 px-5 py-2 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            WhatsApp
          </a >

        </div>

      </div>
    </nav>
  );
}