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
    sub: req.body.user.sub,
    anime_id: req.body.anime.anime_id,
    title: req.body.anime.title,
    image: req.body.anime.image
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
  if (resultsAnime.length < 1) {
    const query = `INSERT into anime(mal_id, title, image) OVERRIDING SYSTEM VALUE VALUES($1, $2, $3) RETURNING mal_id`;
    const values = [listItem.anime_id, listItem.title, listItem.image]
    const result = await db.query(query, values)
    console.log(result);
  }

  //query adds info to the junction table containing user_id & anime_id
  const query = 'INSERT INTO user_anime_list(user_id, anime_id) VALUES($1, $2) RETURNING *'
  const values = [user_id, listItem.anime_id]
  const result = await db.query(query, values);
  console.log(result);
  res.json(result)
});

//concept: remove row in user_anime_list based on id
//user to remove item from their list
router.delete('/:id', async (req, res) => {
  //delete anime from user_anime_list based on id
const animeItem = req.params.id;
  try {
    await db.none(`DELETE FROM user_anime_list WHERE id=$1`, [animeItem]);
    res.send({status:'success'});
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
})

//concept: remove row in user_anime_list based on id
//user to remove item from their list
router.put('/:id', async (req, res) => {
  //delete anime from user_anime_list based on id
const animeItem = req.params.id;
const content = req.body.complete;

  try {
    await db.none(`UPDATE user_anime_list SET complete = true WHERE id=$1`, [animeItem]);
    res.send({status:'success'});
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
})

export default router;