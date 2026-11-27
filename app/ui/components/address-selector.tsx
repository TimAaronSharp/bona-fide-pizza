"use client";

import { AddressForm } from "@/app/lib/definitions";

export function AddressSelector({ addresses }: { addresses: AddressForm[] }) {

  return (
    <>
      {addresses.map((address) => (
        <fieldset key={address.id} className="border">
          <input type="radio" id={`address-${address.id}-id`} name="address-selection-group" value={address.id}></input>
          <label htmlFor={`address-${address.id}-id`}>{address.line1} {address.city} {address.state} {address.zipCode}</label>
        </fieldset>
      ))}
    </>
  )
}