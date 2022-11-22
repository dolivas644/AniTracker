import pgPromise from 'pg-promise';
import {config} from "dotenv";

config();

//server connection
const pgp = pgPromise({});
//db connection
const db = pgp({
    connectionString: process.env.DATABASE_URL,
});

export default db;