"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Layanan", link: "/layanan" },
  { name: "Dokter", link: "/dokter" },
  { name: "Klinik", link: "/klinik" },
  { name: "Artikel", link: "/artikel" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar className="sticky top-0">
        <NavBody>
          <div className="flex items-center gap-2">
            <NavbarLogo />
          </div>

          <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <NavbarButton
              href="/masuk"
              variant="primary"
              className="bg-primarygreen text-white"
            >
              Masuk
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`m-link-${idx}`}
              href={item.link}
              className="w-full px-2 py-2 text-neutral-700 dark:text-neutral-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="mt-4 flex w-full items-center gap-3">
            <NavbarButton href="/masuk" variant="secondary" className="flex-1">
              Masuk
            </NavbarButton>
            <NavbarButton href="/daftar" variant="primary" className="flex-1">
              Daftar
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
};

export default Header;
