"use client";

import { useState } from "react";

export default function PeaceEliteOrderForm() {
  const [uid, setUid] = useState("");
  const [nickname, setNickname] = useState("");
  const [system, setSystem] = useState("");
  const [server, setServer] = useState("");
  const [product, setProduct] = useState("");

  const phone = "60107866876";

  const handleOrder = () => {
    const message = `🎮 和平精英充值

📱 手机系统：${system}

🎯 游戏大区：${server}

💎 套餐：${product}

🆔 UID：${uid}

👤 昵称：${nickname}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="mb-16 rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-8">

      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        填写订单
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          placeholder="游戏 UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none"
        />

        <input
          placeholder="游戏昵称（选填）"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none"
        />

        <select
          value={system}
          onChange={(e) => setSystem(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none"
        >
          <option value="">请选择手机系统</option>
          <option>Android 安卓</option>
          <option>iPhone 苹果</option>
        </select>

        <select
          value={server}
          onChange={(e) => setServer(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none"
        >
          <option value="">请选择游戏大区</option>
          <option>微信区</option>
          <option>QQ区</option>
        </select>

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none md:col-span-2"
        >
          <option value="">请选择充值套餐</option>
          <option>60 点券 RM3</option>
          <option>300+16 点券 RM22</option>
          <option>680+38 点券 RM46</option>
          <option>1000 点券 RM61</option>
          <option>1280+88 点券 RM83</option>
          <option>1980+138 点券 RM122</option>
          <option>3280+258 点券 RM210</option>
          <option>6480+568 点券 RM410</option>
        </select>

      </div>

      <button
        onClick={handleOrder}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
      >
        📱 WhatsApp 下单
      </button>

    </div>
  );
}