import express from "express";
import cors from "cors";
import bodyparser from 'body-parser';
import path from "path";
import { fileURLToPath } from "url";
import animeListRouter from "./routes/animeList.js"
import usersRouter from "./routes/newUsers.js";
import animeListItemRouter from "./routes/animeListItem.js"
import completedListRouter from "./routes/completedList.js"

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyparser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
app.use(express.static(REACT_BUILD_DIR));;

app.use("/me", usersRouter);
app.use("/myanimelist", animeListItemRouter);
app.use("/animeList", animeListRouter)
app.use("/completedList", completedListRouter);

app.get("/", function(req, res) {
    res.json("Working request")
})

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
