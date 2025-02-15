import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import Image from "next/image";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
  items: CartItem[];
};
const CartSideBar = ({ items }: Props) => {
  const dispatch = useDispatch();
  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

  return (
    <div className="mt-6 h-full mb-6">
      {/* cart title */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/* if there is no cart */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/empty.webp"
            alt="empty-cart"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
        </div>
      )}
      {/* if there are  carts */}
      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-40 p-4"
              >
                {/*  cart image */}
                <div>
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  {/* title */}
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item?.title}
                  </h1>
                  {/* price */}
                  <h1 className="text-base text-blue-950 font-bold">
                    {item?.price}
                  </h1>
                  {/* Quantity */}
                  <h1 className="text-base font-semibold mb-2">
                    Quantity: {item?.quantity}
                  </h1>
                  {/* Two Buttons one for add and one for remove */}
                  <div className="flex  items-center space-x-4">
                    <Button
                      onClick={() => removeCartHandler(item.id)}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button onClick={() => addCartHandler(item)} size={"sm"}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/cart">
            <SheetClose asChild>
              <Button className="w-full mb-6 mt-6">View all Carts</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSideBar;
