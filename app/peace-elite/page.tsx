"use client";

import { useState } from "react";
import { peaceEliteProducts } from "@/data/products";

export default function PeaceElite() {
  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState("");

  const buyNow = () => {
    if (!selected) {
      alert("请选择套餐");
      return;
    }

    if (!playerId) {
      alert("请输入玩家ID");
      return;
    }

    const message = `您好，我要充值和平精英

游戏：和平精英
套餐：${selected}
玩家ID：${playerId}
大区：${server}`;

    window.open(
      `https://wa.me/60107866876?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="text-5xl font-bold text-cyan-400">
          🎮 和平精英
        </h1>

        <p className="mt-3 text-gray-400">
          官方点券充值 · 秒到账
        </p >

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-2xl font-bold">
            玩家信息
          </h2>

          <input
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
            placeholder="请输入 QQ / 微信 ID"
            className="mt-6 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            value={server}
            onChange={(e) => setServer(e.target.value)}
            placeholder="请输入大区"
            className="mt-4 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
          />

        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-2xl font-bold">
            点券套餐
          </h2>

          <div className="mt-6 space-y-4">

            {peaceEliteProducts.map((item) => (

              <button
                key={item.id}
                onClick={() => setSelected(item.name)}
                className={`flex w-full items-center justify-between rounded-xl border p-5 transition ${
                  selected === item.name
                    ? "border-cyan-400 bg-cyan-500/20"
                    : "border-slate-700 hover:border-cyan-400 hover:bg-slate-800"
                }`}
              >
                <span className="text-xl">
                  {item.name}
                </span>

                <span className="text-2xl font-bold text-cyan-400">
                  RM{item.price}
                </span>

              </button>

            ))}

          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-slate-900 p-6">

          <h3 className="text-xl font-bold text-cyan-400">
            已选择套餐
          </h3>

          <p className="mt-4 text-lg">
            {selected || "请选择一个套餐"}
          </p >

        </div>

        <button
          onClick={buyNow}
          className="mt-8 w-full rounded-2xl bg-cyan-500 py-5 text-2xl font-bold text-black hover:bg-cyan-400"
        >
          立即购买
        </button>

      </div>
    </main>
  );
}