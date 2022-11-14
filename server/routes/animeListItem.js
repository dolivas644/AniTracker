import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();

router.get('/', async (req, res) =>{
    try{
        const itemList = await db.any(`SELECT * FROM user_anime_list`, [true]);
        res.send(itemList);
    }catch(e){
        console.log(e);
        return res.status(400).json(e);
    }
})

router.post('/', async (req, res) => {
    const listItem = {
      user_id: req.body.user_id,
      anime_id: req.body.anime_id,
    }
    console.log(listItem);

    const query = 'INSERT INTO user_anime_list(user_id, anime_id) VALUES($1, $2) RETURNING *'
    const values = [listItem.user_id, listItem.anime_id]
    const result = await db.query(query, values);
    console.log(result);
    res.json(result)
  });


export default router;