import express from "express"
import "dotenv/config"
import cors from "cors"
import logger from "morgan"
import { ConnectSQL } from "./db/db"


const server = express()
server.use(express.json())
server.use(cors())
server.use(logger('dev'))
const PORT:string|number = 8080 || process.env.PORT as string

(async () => {
  ConnectSQL();
  const app = server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  process.on('SIGINT', () => {
    console.log('Shutting down...');
    app.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  });
})();