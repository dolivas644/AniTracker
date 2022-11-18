import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();

router.get('/', async (req, res) => {
  const anime_id= req.query.anime_id;
      try {
        const itemList = await db.any(`SELECT comment.*, users.name, users.picture FROM comment JOIN users ON comment.user_id=users.id WHERE anime_id=$1`, [anime_id]);
        res.send(itemList);
      } catch (e) {
        console.log(e);
        return res.status(400).json(e);
      }
    })
  

router.post('/', async (req, res) => {
    const listItem = {
      sub: req.body.user.sub,
      Text: req.body.Text,
      anime_id: req.body.anime_id
    }
    console.log(listItem);
  
    //select id from users where sub == sub
    const userSub = `SELECT id FROM users WHERE sub =$1`;
    const subInfo = await db.query(userSub, [listItem.sub])
    console.log(subInfo, "Finds respective user id from given sub");
    const user_id = subInfo[0].id;

    //query adds info to the junction table containing user_id & anime_id
    const query = 'INSERT INTO comment(user_id, anime_id, Text) VALUES($1, $2) RETURNING *'
    const values = [user_id, listItem.anime_id, listItem.Text]
    const result = await db.query(query, values);
    console.log(result);
    res.json(result)
  });

export default router;
