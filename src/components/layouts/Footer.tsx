"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-neutral-900/60 dark:supports-[backdrop-filter]:bg-neutral-900/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primarygreen" />
            <span className="text-lg font-semibold">Healthcare</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primarygreen"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t pt-6 text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            © {currentYear} Healthcare. Hak cipta dilindungi. Dibangun oleh
            BransyahTan
          </p>
        </div>
      </div>
    </footer>
  );
}
