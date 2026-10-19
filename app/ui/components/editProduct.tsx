"use client";

import { editProduct } from "@/app/actions/product";
import { DbProductSchemaType } from "@/app/lib/definitions";
import { ChangeEvent, useState } from "react";


export function EditProduct({ productProp }: { productProp: DbProductSchemaType }) {
  const { id } = productProp;
  const [name, setName] = useState(productProp.name);
  const [description, setDescription] = useState(productProp.description);
  const [category, setCategory] = useState(productProp.category);
  const [href, setHref] = useState(productProp.href);
  const [paramName, setParamName] = useState(productProp.paramName);
  const [imgId, setImgId] = useState(productProp.imgId);
  const [price, setPrice] = useState(productProp.price);

  /* NOTE currentCategory is the product's category before any updates. This is used in editProduct()
  to check if the category has changed, and if so, updateTag() will purge the currentCategory as well.*/
  const currentCategory = productProp.category;

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }

  const handleHref = (e: ChangeEvent<HTMLInputElement>) => {
    setHref(e.target.value);
  }

  const handleParamName = (e: ChangeEvent<HTMLInputElement>) => {
    setParamName(e.target.value);
  }

  const handleImgId = (e: ChangeEvent<HTMLInputElement>) => {
    setImgId(e.target.value);
  }

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  }

  function handleEdit() {
    console.log("in editProduct category is", category);
    console.log("in editProduct currentCategory is", currentCategory);
    editProduct(id, name, description, category, currentCategory, paramName, href, imgId, price);
  }

  return (
    <>
      <label htmlFor="edit-product-name">Edit Name:</label>
      <input type="text" id="edit-product-name" onChange={handleName} value={name} />

      <label htmlFor="edit-product-description">Edit Description:</label>
      <input type="text" id="edit-product-description" onChange={handleDescription} value={description} />

      <label htmlFor="edit-product-category">Edit Category:</label>
      <input type="text" id="edit-product-category" onChange={handleCategory} value={category} />

      <label htmlFor="edit-product-param-name">Edit ParamName:</label>
      <input type="text" id="edit-product-param-name" onChange={handleParamName} value={paramName} />

      <label htmlFor="edit-product-href">Edit Href:</label>
      <input type="text" id="edit-product-href" onChange={handleHref} value={href} />

      <label htmlFor="edit-product-img-id">Edit ImgId:</label>
      <input type="text" id="edit-product-img-id" onChange={handleImgId} value={imgId} />

      <label htmlFor="edit-product-price">Edit Price:</label>
      <input type="text" id="edit-product-price" onChange={handlePrice} value={price} />

      <button onClick={handleEdit}>Edit</button>
    </>
  )
}