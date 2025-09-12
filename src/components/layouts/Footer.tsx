"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://tiktok.com", icon: Music2, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-neutral-900/60 dark:supports-[backdrop-filter]:bg-neutral-900/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            <span className="text-lg font-semibold text-primarygreen">
              Healthcare
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:bg-primarygreen hover:text-white dark:border-neutral-700 dark:text-neutral-300"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
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
