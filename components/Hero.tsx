export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-6xl font-extrabold text-cyan-400">
          🐶 Samoyed Gaming
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Professional Game Top-up Platform
        </p >

        <p className="mt-3 text-gray-500">
          Peace Elite • Honor of Kings • VALORANT
        </p >

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400">
            Start Top Up
          </button>

          <button className="rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 hover:bg-cyan-500/20">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}