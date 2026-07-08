import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-slate-900 to-black" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-6 py-24 lg:flex-row">

        {/* 左边 */}
        <div className="max-w-xl">

          <p className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-cyan-300">
            🇲🇾 Malaysia Trusted Top-up Store
          </p >

          <h1 className="text-6xl font-extrabold leading-tight">
            Samoyed
            <span className="text-cyan-400"> Gaming</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Fast • Safe • Affordable Game Top-up Platform
          </p >

          <p className="mt-4 text-gray-400 leading-8">
            Peace Elite、Honor of Kings、VALORANT
            官方充值服务，极速到账，安全可靠。
          </p >

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400">
              立即充值
            </button>

            <button className="rounded-xl border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
              联系我们
            </button>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4">
              ⚡ 极速到账
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4">
              🔒 安全稳定
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4">
              💰 优惠价格
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4">
              🎮 24小时服务
            </div>

          </div>

        </div>

        {/* 右边 Logo */}

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[100px] opacity-40"></div>

          <Image
            src="/images/logo.png"
            alt="Samoyed Gaming"
            width={520}
            height={520}
            className="relative drop-shadow-[0_0_60px_rgba(0,255,255,.4)]"
          />

        </div>

      </div>

    </section>
  );
}