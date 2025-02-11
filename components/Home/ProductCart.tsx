import { Product } from "@/typing";
import { HeartIcon, ShoppingBag, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "../ui/button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const ProductCart = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  const { toast } = useToast();
  useToast;

  const dispatch = useDispatch();
  const AddToCartHandler = (product: Product) => {
    toast({
      description: "Cart Added",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      {/* image */}
      <div className="w-[200px] h-[150px] ">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="object-contain "
        />
      </div>
      {/* category */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      {/* title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg hover:text-blue-900 cursor-pointer transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>
      {/* rating */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarsIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          );
        })}
      </div>
      {/* pricing */}
      <div className=" flex mt-2 items-center space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>{" "}
        <p className="text-black text-lg font-semibold opacity-80">
          ${product.price}
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Button onClick={() => AddToCartHandler(product)} size={"icon"}>
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <HeartIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
