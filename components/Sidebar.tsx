"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white/50 max-sm:hidden lg:[250px]">
      <div className="flex flex-1 flex-col gap-1">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-2 items-center align-center p-2 rounded-lg justify-start w-fit",
                {
                  "bg-white/[.03] w-fill text-white": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className="text-lg max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
