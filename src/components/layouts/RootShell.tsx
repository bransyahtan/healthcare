"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hiddenRoutes = ["/login", "/register", "/forgot-password"];

  const hideLayout = hiddenRoutes.includes(pathname);

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
}
