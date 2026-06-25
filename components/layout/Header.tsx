import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-blue-800 h-16 flex flex-row items-center justify-between px-12">
      <Link href="/">
        <span className="text-2xl">DEV👤</span>
      </Link>

      <div className="flex flex-row gap-12">
        <Link href="/management">
          <div>Gestion</div>
        </Link>

        <Link href="/profile">
          <div>🐵</div>
        </Link>

        <Link href="/mentions">
          <span className="text-xl">Mentions</span>
        </Link>
      </div>
    </div>
  );
}
