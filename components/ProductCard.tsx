"use client";

type ProductProps = {
  name: string;
  price: string;
};

export default function ProductCard({
  name,
  price,
}: ProductProps) {

  const phone = "60107866876";

  const handleBuy = () => {
    const message =
`🎮 和平精英充值

套餐：${name}

价格：${price}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/30">

      <div className="mb-6 text-center text-5xl">
        🎮
      </div>

      <h2 className="text-center text-2xl font-bold text-cyan-400">
        {name}
      </h2>

      <p className="mt-5 text-center text-4xl font-extrabold text-yellow-400">
        {price}
      </p >

      <ul className="mt-6 space-y-2 text-center text-sm text-gray-400">
        <li>✅ 官方充值</li>
        <li>⚡ 极速到账</li>
        <li>🔒 安全稳定</li>
      </ul>

      <button
        onClick={handleBuy}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
      >
        立即充值
      </button>

    </div>
  );
}