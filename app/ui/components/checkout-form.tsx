"use client";


import { useActionState } from "react";
import { AddressSelector } from "@/app/ui/components/address-selector";
import { AddressLocal, FormState } from "@/app/lib/definitions.js";
import { addToOrderAction } from "@/app/actions/order";



export function CheckoutForm({ addresses }: { addresses: AddressLocal[] }) {
  const initialState: FormState = {
    error: null,
    success: false
  }

  const [state, formAction, isPending] = useActionState(addToOrderAction, initialState);

  return (
    <>
      <form action={formAction}>
        <AddressSelector addresses={addresses} />
        {/*TODO Create/add credit card selector component. */}
        <button type="submit">Place Order</button>
      </form>
    </>
  )
}