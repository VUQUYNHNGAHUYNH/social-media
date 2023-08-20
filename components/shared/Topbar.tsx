import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30  backdrop-blur-lg flex w-full items-center justify-between bg-gray-800 px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" width={28} height={28} alt="logo" />
        <p className="font-bold">Social media</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  width={24}
                  height={24}
                  alt="logout"
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4 text-white",
          },
        }}
      />
    </nav>
  );
};

export default Topbar;
