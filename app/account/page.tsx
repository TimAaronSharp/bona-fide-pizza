import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";
import { Logout } from "@/app/ui/components/auth/logout";

/* TODO If I invoke create "getHeaders() and invoke it in the component page it says "Property 'user' does not exist on
type 'Promise<{ session: (...goes on forever with the entire session and user type that is being returned from the 
await. If I simply write the function logic inside the component it does not give that error. It's not important for
the functionality of this project, but look into why that is later. I would like to have the logic in a utility
if possible so the component is cleaner, unless there is a reason not to. */

// async function getHeaders() {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   });
//   return session;
// }


export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  // const session = getHeaders();
  return (
    <>
      <h1>Account Page</h1>

      <p>Hello {session?.user.name}!</p>

      <Logout />
    </>
  )
}