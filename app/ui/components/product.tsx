"use client";

import { addProduct, deleteProduct, editProduct } from "@/app/actions/productActions";
import { ProductInfo } from "@/app/lib/definitions";
import { ChangeEvent, FC, useState } from "react";

// type Props = {
//   createProduct: (name: string, description: string) => void;
//   deleteProduct: (id: number) => void;
//   editProduct: (name: string, description: string) => void;
// }

export function Product() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  function handleAdd() {
    // addProduct(name, description);
    setName("");
    setDescription("");
  }

  return (
    <>
      <input type="text" onChange={handleName} value={name} />
      <input type="text" onChange={handleDescription} value={description} />
      <button onClick={handleAdd}>Add</button>
    </>
  )
}