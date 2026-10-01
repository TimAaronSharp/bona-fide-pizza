import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";
import { Logout } from "@/app/ui/components/auth/logout";


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
  return (
    <>
      <h1>Account Page</h1>

      <p>Hello {session?.user.name}!</p>

      <Logout />
    </>
  )
}