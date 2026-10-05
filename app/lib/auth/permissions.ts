import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  product: ["create", "delete", "update"],
  order: ["create", "delete", "update"]
} as const

export const ac = createAccessControl(statement);

// Roles
export const admin = ac.newRole({
  product: ["create", "delete", "update"],
  order: ["create", "delete", "update"],
  ...adminAc.statements
})

export const manager = ac.newRole({
  product: ["create", "delete", "update"],
  order: ["create", "delete", "update"],
})

export const employee = ac.newRole({
  product: ["create", "delete", "update"],
  order: ["create", "delete", "update"],
})

export const customer = ac.newRole({
  order: ["create", "delete", "update"]
})
