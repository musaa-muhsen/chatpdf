import type {Config} from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({path: ".env.local"});

// this holds the drizzle configurations on how we want to tell drizzle where our schema file lives in, 

// this object makes sute that it will satisfy the config
// more info: https://www.freecodecamp.org/news/typescript-satisfies-operator/
// driver is going to be postgres 
// schema we're telling drizzle kit where the schema actually lives in 
// "npx drizzle-kit push:pg" related to syncing 

export default {
   driver: 'pg',
   schema: './src/lib/db/schema.ts',
   dbCredentials: {
     connectionString: process.env.DATABASE_URL!
   },
} satisfies Config