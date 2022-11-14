import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();

router.get('/', async (req, res) => {
  const sub = req.query.sub;
  const userSub = `SELECT id FROM users WHERE sub =$1`;
  const subInfo = await db.query(userSub, [sub])
  console.log(subInfo, "Finds respective user id from given sub");
  const user_id = subInfo[0].id;

  try {
    const itemList = await db.any(`SELECT * FROM user_anime_list WHERE user_id=$1`, [user_id]);
    res.send(itemList);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
})

router.post('/', async (req, res) => {
  const listItem = {
    sub: req.body.sub,
    anime_id: req.body.anime_id,
  }
  console.log(listItem);

  //select id from users where sub == sub
  const userSub = `SELECT id FROM users WHERE sub =$1`;
  const subInfo = await db.query(userSub, [listItem.sub])
  console.log(subInfo, "Finds respective user id from given sub");
  const user_id = subInfo[0].id;
  
  const query = 'INSERT INTO user_anime_list(user_id, anime_id) VALUES($1, $2) RETURNING *'
  const values = [user_id, listItem.anime_id]
  const result = await db.query(query, values);
  console.log(result);
  res.json(result)
});


export default router;