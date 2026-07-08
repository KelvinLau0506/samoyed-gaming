import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Games from "@/components/Games";

export default function Home() {
  return (
      <>
  <Announcement />

  <Navbar />

  <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

    <Hero />

    <Games />

  </main>

  <Footer />

</>
  );
}