"use client";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const user = false;
  return (
    <div>
      {!open ? (
        <img
          src="/open.png"
          alt=""
          srcset=""
          width={20}
          height={20}
          onClick={(e) => handleClick(e)}
        />
      ) : (
        <>
          <img
            src="/close.png"
            alt=""
            onClick={(e) => handleClick(e)}
            width={20}
            height={20}
          />
          <div
            className={` text-white left-0 top-24 w-full  h-screen flex items-center justify-center flex-col text-3xl gap-8 z-10 bg-red-500 absolute`}
          >
            {links.map((item) => (
              <Link href={item.url} key={item.id}>
                {item.title}
              </Link>
            ))}
            {!user ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/orders">Orders</Link>
            )}
            <CartIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
