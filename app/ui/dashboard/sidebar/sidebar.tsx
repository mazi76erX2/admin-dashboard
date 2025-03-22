import React, { ReactNode } from "react";
import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

export interface MenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}

interface Menu {
  title: string;
  list: MenuItem[];
}

const menuItems: Menu[] = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Dashboard",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Dashboard",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      {
        title: "Users",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Dashboard",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-40">
      <div className="flex items-center gap-2.5 mb-5">
        <Image
          src="/noavatar.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-(--textSoft)">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-(--textSoft) font-bold text-xs my-2.5">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
