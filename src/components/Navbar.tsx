"use client";
import Link from "next/link";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import Logo from "public/reindeer.png";
import UserIcon from "public/user.svg";
import MenuIcon from "public/menu.svg";
import { useState } from "react";
interface props {
  className: string;
}

const NavBar: React.FC<props> = ({ className = "" }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const openDrawer = (): void => {
    setDrawerOpen(true);
  };
  return (
    <nav
      className={`flex justify-between items-center h-[70px] w-full bg-base-100 px-3 ${className}`}
    >
      <div className="flex justify-between items-center gap-[5px]">
        <div>
          <MenuIcon
            onClick={openDrawer}
            className="p-[10px] w-[40px] h-[40px] text-text-100 active:scale-75 hover:bg-neutral rounded-[10px] md:hidden transition-all duration-300"
          />
          <Drawer visible={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
        <Link
          href="/"
          className="rounded-md px-2 hover:bg-neutral flex justify-center items-center gap-1"
        >
          <Image
            src={Logo}
            width={50}
            alt="Logo"
            className="translate-y-[-6px]"
          />
          <span className="text-text-100">顏文字</span>
        </Link>
      </div>

      <ul className="flex justify-between items-center gap-[5px]">
        <UserMenu />
      </ul>
    </nav>
  );
};

const UserMenu: React.FC = () => {
  interface IListItem {
    id: number;
    title: String;
  }
  const listItems: IListItem[] = [
    {
      id: 1,
      title: "我的頁面",
    },
    {
      id: 2,
      title: "收藏",
    },
  ];

  return (
    <>
      <li className="group relative" tabIndex={-1}>
        <UserIcon className="rounded-[10px] p-[10px] w-[50px] h-[50px] text-text-100 active:scale-75 transition-all duration-300  hover:bg-neutral group-focus-within:bg-neutral" />
        <div className="invisible origin-top-left transition-all duration-300 -translate-y-2 scale-90 opacity-0 group-focus-within:scale-100 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
          <div className="flex flex-col gap-[5px] absolute right-0 w-32 rounded-[8px] bg-white mt-[20px] mr-[-10px] bg-base-200 py-[15px] px-[10px]">
            {listItems.map((item: IListItem) => (
              <div
                className="flex-shrink rounded-[30px] hover:bg-neutral/50"
                key={item.id}
              >
                <p className="text-center text-text-100 text-sm  py-[5px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};
export default NavBar;
