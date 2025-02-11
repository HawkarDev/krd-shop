"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Product } from "@/typing";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  const { toast } = useToast();

  const dispatch = useDispatch();
  const AddToCartHandler = (product: Product) => {
    toast({
      description: "Item Added To  Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <Button onClick={() => AddToCartHandler(product)} className="mt-6">
      Add to Cart
    </Button>
  );
};

export default AddToCart;
