import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <div>
      <Link href={"/cart"}  className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
            <img src="./cart.png" alt=""  />
        </div>
        <span>Cart {3}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
