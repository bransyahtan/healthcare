"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/register";

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
