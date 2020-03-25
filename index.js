import express from "express";
import dotenv from "dotenv";
import StartPoint from "./src/services/start.point";

dotenv.config();

const { PORT } = process.env;
const app = express();

export class ServerService {
  
};

app.listen(PORT || 3000, () => {
  console.log(`Server started at port ${ PORT }`);
});
