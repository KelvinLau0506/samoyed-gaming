import GameCard from "./GameCard";

export default function Games() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-cyan-400">
          热门游戏
        </h2>

        <p className="mt-4 text-center text-gray-500">
          Select your favorite game
        </p >

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <GameCard
            title="Peace Elite"
            subtitle="UC • Lucky Draw • Gift Pack"
            image="/images/peace-elite.png"
            href="/peace-elite"
          />

          <GameCard
            title="Honor of Kings"
            subtitle="Voucher • Skin • Crystal"
            image="/images/hok.png"
            href="/honor-of-kings"
          />

          <GameCard
            title="VALORANT"
            subtitle="VP • Bundle • Gift Card"
            image="/images/valorant.png"
            href="/valorant"
          />

        </div>

      </div>
    </section>
  );
}