"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "../../sidebar/sidebar";

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex p-5 items-center gap-2.5 hover:bg-gray-600 my-1.5 rounded-xl
        ${pathname === item.path && "bg-gray-600"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
