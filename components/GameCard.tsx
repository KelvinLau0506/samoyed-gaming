import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function GameCard({
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_#06b6d4]">

      <img
        src={image}
        alt={title}
        className="mx-auto h-28 w-28 object-contain"
      />

      <h3 className="mt-6 text-center text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-center text-gray-400">
        {subtitle}
      </p >

      <Link href={href}>
        <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400">
          Top Up
        </button>
      </Link>

    </div>
  );
}