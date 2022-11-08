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
    //console.log(newUser);
  
    const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
    const valuesEmail = [newUser.email]
    const resultsEmail = await db.query(queryEmail, valuesEmail);
    if(resultsEmail.rows[0]){
      console.log(`Thank you ${resultsEmail.rows[0].name} for coming back`)
    } else{
    const query = 'INSERT INTO users(name, picture, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [ newUser.name, newUser.picture, newUser.email, newUser.sub]
    const result = await db.query(query, values);
    console.log(result.rows[0]);
  
    }
  
  });

export default router;