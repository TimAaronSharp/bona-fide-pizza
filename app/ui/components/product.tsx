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
  const [linkName, setLinkName] = useState("");
  const [href, setHref] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const handleLinkName = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkName(e.target.value);
  };

  const handleHref = (e: ChangeEvent<HTMLInputElement>) => {
    setHref(e.target.value);
  };

  const handleImgSrc = (e: ChangeEvent<HTMLInputElement>) => {
    setImgSrc(e.target.value);
  };

  const handleImgAlt = (e: ChangeEvent<HTMLInputElement>) => {
    setImgAlt(e.target.value);
  };

  const handleImgWidth = (e: ChangeEvent<HTMLInputElement>) => {
    setImgWidth(e.target.value);
  };

  const handleImgHeight = (e: ChangeEvent<HTMLInputElement>) => {
    setImgHeight(e.target.value);
  };




  function handleAdd() {
    addProduct(name, description, linkName, href, imgSrc, imgAlt, imgWidth, imgHeight);
    setName("");
    setDescription("");
    setLinkName("");
    setHref("");
    setImgSrc("");
    setImgAlt("");
    setImgWidth(0);
    setImgHeight(0);
  }

  return (
    <>
      <label htmlFor="create-product-">Product Name:</label>
      <input type="text" id="create-product-" onChange={handleName} value={name} />

      <label htmlFor="create-product-description">Description:</label>
      <input type="text" id="create-product-description" onChange={handleDescription} value={description} />

      <label htmlFor="create-product-link-name">Link Name:</label>
      <input type="text" id="create-product-link-name" onChange={handleLinkName} value={linkName} />

      <label htmlFor="create-product-href">Href:</label>
      <input type="text" id="create-product-href" onChange={handleHref} value={href} />

      <label htmlFor="create-product-img-src">Img Src:</label>
      <input type="text" id="create-product-img-src" onChange={handleImgSrc} value={imgSrc} />

      <label htmlFor="create-product-img-alt">Img Alt:</label>
      <input type="text" id="create-product-img-alt" onChange={handleImgAlt} value={imgAlt} />
      {/* If incorporating with zod, remember to change type to "text" and just coerce to a number . One benefit is the field can be truly empty with string/text instead of 0 (what I initially set it as in useState(0)) and to avoid decimal bugs when typing. When setting state on every single keystroke (using Number(e.target.value) inside onChange React will/can sometimes remove decimal points, so 50. becomes 50 before the user can finish typing their number (not that it matters for what I'm doing, but just wanted to include this note for myself for learning.)) */}
      <label htmlFor="create-product-img-width">Img Width:</label>
      <input type="number" id="create-product-img-width" onChange={handleImgWidth} value={imgWidth} />

      <label htmlFor="create-product-img-height">Img Height:</label>
      <input type="number" id="create-product-img-height" onChange={handleImgHeight} value={imgHeight} />

      <button onClick={handleAdd}>Add</button>
    </>
  )
}