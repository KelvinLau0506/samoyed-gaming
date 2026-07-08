"use client";

import { useState } from "react";

export default function HonorOfKingsOrderForm() {
  const [uid, setUid] = useState("");
  const [nickname, setNickname] = useState("");
  const [system, setSystem] = useState("");
  const [loginType, setLoginType] = useState("");
  const [area, setArea] = useState("");
  const [product, setProduct] = useState("");

  const phone = "60107866876";

  const handleOrder = () => {
    const message = `🎮 王者荣耀充值

📱 手机系统：${system}

🔑 登录方式：${loginType}

🌍 游戏大区：${loginType}${area ? `${area}区` : ""}

💎 套餐：${product}

🆔 UID：${uid}

👤 游戏昵称：${nickname}`;

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
          value={loginType}
          onChange={(e) => setLoginType(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none"
        >
          <option value="">请选择登录方式</option>
          <option>微信</option>
          <option>QQ</option>
        </select>

        <div className="md:col-span-2">

          <label className="mb-2 block text-sm font-medium text-gray-300">
            游戏大区
          </label>

          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 focus-within:border-cyan-400">

            <input
              type="number"
              min="1"
              placeholder="请输入大区数字，例如：129"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-transparent py-4 outline-none"
            />

            <span className="ml-3 text-gray-400">
              区
            </span>

          </div>

          <p className="mt-2 text-xs text-gray-400">
            💡 例如：微信129区，请选择 <span className="text-cyan-400">微信</span>，
            然后输入 <span className="text-cyan-400">129</span>。
          </p >

          {loginType && area && (
            <div className="mt-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">

              <p className="text-sm text-cyan-300">
                ✅ 当前选择：
                <span className="font-bold text-white">
                  {loginType}{area}区
                </span>
              </p >

            </div>
          )}

        </div>

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="rounded-xl bg-slate-800 p-4 outline-none md:col-span-2"
        >
          <option value="">请选择充值套餐</option>
          <option>300 点券 RM22</option>
          <option>1000 点券 RM61</option>
          <option>2000 点券 RM122</option>
        </select>

      </div>

      <button
        onClick={handleOrder}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 hover:scale-[1.02]"
      >
        📱 WhatsApp 下单
      </button>

    </div>
  );
}