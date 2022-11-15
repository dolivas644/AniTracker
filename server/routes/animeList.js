import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();
//query practice
/*SELECT a.*, u.complete
FROM anime as a
JOIN user_anime_list as u
ON a.mal_id = u.anime_id
WHERE u.user_id=5;*/

router.get('/', async (req, res) => {
    const sub = req.query.sub;
    const userSub = `SELECT id FROM users WHERE sub=$1`;
    const subInfo = await db.query(userSub, [sub])
    console.log(subInfo, "Finds respective user id from given sub");
    const user_id = subInfo[0].id;
    try {
      const itemList = await db.any(`SELECT a.*, u.complete FROM anime as a JOIN user_anime_list as u ON a.mal_id = u.anime_id WHERE u.user_id=$1`, [user_id]);
      res.send(itemList);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  })

export default router;