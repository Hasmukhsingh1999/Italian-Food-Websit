import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 uppercase md:h-24 lg-px-20 lx:px-40 xl:px-40">
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Gusto Italiano Bistro</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/* LEFTLINKS */}
      <div className="hidden md:flex gap-4 justify-end items-center flex-1">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-400 px-1 rounded-md md:absolute top-3 right-3 lg:static">
          <img src="/phone.png" alt="" width={20} height={20} />
          <span className="text-white">123 456 789</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/order"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
