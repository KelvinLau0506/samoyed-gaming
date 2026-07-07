import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Games from "@/components/Games";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <Hero />
        <Games />
      </main>
    </>
  );
}