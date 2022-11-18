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
  
export default router;
