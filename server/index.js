import express from "express";
import cors from "cors";
import bodyparser from 'body-parser';

import usersRouter from "./routes/newUsers.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyparser.json());

app.use("/me", usersRouter);

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
