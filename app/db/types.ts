import * as schemas from '@/app/db/schema';

// Named to match keys from "menuDataMap" so that they may be mapped over for seeding in "scripts/seed.ts"
export type menu = typeof schemas.menu.$inferSelect;
export type bread = typeof schemas.bread.$inferSelect;
export type chicken = typeof schemas.chicken.$inferSelect;
export type dessert = typeof schemas.dessert.$inferSelect;
export type drink = typeof schemas.drink.$inferSelect;
export type pasta = typeof schemas.pasta.$inferSelect;
export type specialty_pizza = typeof schemas.specialty_pizza.$inferSelect;
export type salad = typeof schemas.salad.$inferSelect;
export type sandwich = typeof schemas.sandwich.$inferSelect;