import express,{Request,Response} from "express";
import "dotenv/config";
import cors from "cors";
import logger from "morgan";
import { ConnectSQL } from "./db/db";
import passport from "passport";
import externalAuth from "./routers/authentication";
import { StatusCodes } from "http-status-codes";
import { facebookAuth } from "./Auth/fb";
import session from "express-session";
const FB = facebookAuth()

const server = express();
server.use(express.json());
server.use(cors());
server.use(
  session({
    secret: process.env.JWT_SECRET as string,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(logger("dev"));
server.use(passport.initialize());
server.use(passport.session());
passport.use('facebook',FB)
passport.serializeUser(function (user: any, done: any) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  done(null, user);

});

server.use("/login", externalAuth);
server.get("/home", (req: Request, res: Response) => {
  res.send("Working").status(StatusCodes.OK)
});

const PORT: string | number = 8080 || (process.env.PORT as string);




(async () => {
  ConnectSQL();
  const app = server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  process.on("SIGINT", () => {
    console.log("Shutting down...");
    app.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
  });
})();
