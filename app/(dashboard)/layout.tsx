import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w0full bg-background max-h-screen">
      <nav className="flex items-center justify-between border-b border-border h-[60-px] px-4 py-2">
        <Logo />
        <div className="flex gap-5 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex flex-grow"> {children}</main>
    </div>
  );
};

export default Layout;
