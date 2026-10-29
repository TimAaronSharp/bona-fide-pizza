"use client";

import { editMenuCategory } from "@/app/actions/menuCategory";
import { DbMenuCategorySchemaType } from "@/app/lib/definitions.js";
import { ChangeEvent, useState } from "react";


export function EditMenuCategory({ menuCategoryProp }: { menuCategoryProp: DbMenuCategorySchemaType }) {
  const { id } = menuCategoryProp;
  const [name, setName] = useState(menuCategoryProp.name);
  const [href, setHref] = useState(menuCategoryProp.href);
  const [imgId, setImgId] = useState(menuCategoryProp.imgId);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleHref = (e: ChangeEvent<HTMLInputElement>) => {
    setHref(e.target.value);
  }
  /*TODO I believe this is because ChangeEvent always returns a string. Coerce to a number or do something else. */
  const handleImgId = (e: ChangeEvent<HTMLInputElement>) => {
    setImgId(e.target.value);
  }

  function handleEdit() {
    editMenuCategory(id, name, href, imgId);
  }
  return (
    <>
      <label htmlFor="edit-menu-category-name">Edit Name:</label>
      <input type="text" id="edit-menu-category-name" onChange={handleName} value={name} />

      <label htmlFor="edit-menu-category-href">Edit Href:</label>
      <input type="text" id="edit-menu-category-href" onChange={handleHref} value={href} />

      <label htmlFor="edit-menu-category-imd-id">Edit ImgId:</label>
      <input type="text" id="edit-menu-category-imd-id" onChange={handleImgId} value={imgId} />

      <button onClick={handleEdit}>Edit</button>
    </>
  )
}