import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";


/* Sets up the path for the config to find the db environment variables in .env.local. Tells dotenv to open 
.env.local, grab the database credentials, and inject them directly into the process.env object that Node.js
provides so the rest of the app can read them.*/

config({ path: ".env.local" });

/* Creates a Drizzle ORM Client (specifically for Neon in this case). Sits on top of the driver
(@neondatabase/serverless that was installed through "pnpm add @neondatabase/serverless", which creates a connection
to and communicates with the database). Provides a TypeScript syntax to write queries to the database.*/

export const db = drizzle(process.env.DATABASE_URL!);