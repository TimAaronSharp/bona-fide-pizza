"use client";

import { createAddress } from "@/app/actions/address";
import type { AddressLocal, FormState } from "@/app/lib/definitions";
import { useActionState } from "react";

/*TODO Implement optional initialData prop so this form can be used for editing address as well (though on the backend
the address itself will not be changed. It's "isActive" field will be set to false and a new address created for
accurate record keeping purposes).*/

export function AddressForm({ initialData }: { initialData?: AddressLocal }) {
  const initialState: FormState = {
    error: null,
    success: false
  }

  const [state, formAction, isPending] = useActionState(createAddress, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="create-address-line1">Line 1: </label>
      <input type="text" id="create-address-line1" name="line1" required />

      <label htmlFor="create-address-line2">Line 2: </label>
      <input type="text" id="create-address-line2" name="line2" />

      <label htmlFor="create-address-city">City: </label>
      <input type="text" id="create-address-city" name="city" required />

      <label htmlFor="create-address-state">State: </label>
      <input type="text" id="create-address-state" name="state" required />

      <label htmlFor="create-address-zip-code">Zip Code: </label>
      <input type="text" id="create-address-zip-code" name="zipCode" required />

      <button type="submit" disabled={isPending}>{isPending ? "Saving..." : "Add Address"}</button>
    </form>
  )
}



// const [line1, setLine1] = useState("");
// const [line2, setLine2] = useState("");
// const [city, setCity] = useState("");
// const [state, setState] = useState("");
// const [zipCode, setZipCode] = useState("");

// const handleLine1 = (e: ChangeEvent<HTMLInputElement>) => {
//   setLine1(e.target.value);
// }

// const handleLine2 = (e: ChangeEvent<HTMLInputElement>) => {
//   setLine2(e.target.value);
// }

// const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
//   setCity(e.target.value);
// }

// const handleState = (e: ChangeEvent<HTMLInputElement>) => {
//   setState(e.target.value);
// }

// const handleZipCode = (e: ChangeEvent<HTMLInputElement>) => {
//   setZipCode(e.target.value);
// }

// function handleCreateAddress(){
//   createAddress(line1, line2, city, state, zipCode);
//   setLine1("");
//   setLine2("");
//   setCity("");
//   setState("");
//   setZipCode("");
// }