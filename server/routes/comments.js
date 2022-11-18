import db from "../db/Db-connection.js";
import express from "express";
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();

router.get('/', async (req, res) => {
    const anime_id = req.query.anime_id;
    try {
        const itemList = await db.any(`SELECT comment.*, users.name, users.picture FROM comment JOIN users ON comment.user_id=users.id WHERE anime_id=$1`, [anime_id]);
        res.send(itemList);
    } catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }
})


//comment_id , text, user_id , anime_id
// INSERT INTO comment("Text", "user_id", "anime_id") VALUES('AHHHHH', 1, 322)
router.post('/', async (req, res) => {
    const listItem = {
        //   sub: req.body.user.sub,
        Text: req.body.Text,
        sub: req.body.user.sub,
        anime_id: req.body.anime.anime_id,
        //   user_id: req.body.user_id
    }
    console.log(listItem);

    //select id from users where sub == sub
    const userSub = `SELECT id FROM users WHERE sub =$1`;
    const subInfo = await db.query(userSub, [listItem.sub])
    console.log(subInfo, "Finds respective user id from given sub");
    const user_id = subInfo[0].id;

    //select anime_id from animelist if it exists
    const animeId = `SELECT mal_id FROM anime WHERE mal_id=$1 LIMIT 1`;
    const valueAnime = [listItem.anime_id]
    const resultsAnime = await db.query(animeId, valueAnime);

      //if anime info DNE insert info to anime table
//   if (resultsAnime.length < 1) {
//     const query = `INSERT into anime(mal_id, title, image) OVERRIDING SYSTEM VALUE VALUES($1, $2, $3) RETURNING mal_id`;
//     const values = [listItem.anime_id, listItem.title, listItem.image]
//     const result = await db.query(query, values)
//     console.log(result);
//   }
    //query adds info to the junction table containing user_id & anime_id
    const query = 'INSERT INTO comment("Text", "user_id", "anime_id") VALUES($1, $2, $3) RETURNING *'
    const values = [listItem.Text, user_id, listItem.anime_id,]
    const result = await db.query(query, values);
    console.log(result);
    res.status(201).json(result);
});

export default router;
