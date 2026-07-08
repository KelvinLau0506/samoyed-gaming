import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
import ProductGrid from "@/components/ProductGrid";
import { honorOfKingsProducts } from "@/data/products";

export default function HonorOfKingsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-cyan-400">
              王者荣耀充值
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              官方充值 · 极速到账 · 24小时在线服务
            </p >
          </div>

          <OrderForm />

          <ProductGrid products={honorOfKingsProducts} />

        </section>
      </main>

      <Footer />
    </>
  );
}