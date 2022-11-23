import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();

router.post('/', async (req, res) => {
    const newUser = {
      name: req.body.given_name,
      picture: req.body.picture,
      email: req.body.email,
      sub: req.body.sub
    }
    // console.log(newUser);
  
    const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
    const valuesEmail = [newUser.email]
    const resultsEmail = await db.query(queryEmail, valuesEmail);
    if(resultsEmail.length > 0){
      console.log(`Thank you for coming back`)
    } else{
    const query = 'INSERT INTO users(name, picture, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [ newUser.name, newUser.picture, newUser.email, newUser.sub]
    try{
      const result = await db.query(query, values);
    }
   catch(e){
console.log(e.message);
   }
  
    }
  
  });

export default router;