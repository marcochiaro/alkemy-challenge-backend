import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    //middleware
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    // register express routes from defined application routes

    //routes
    app.use("/", routes);

    // setup express app here
    // ...

    // start express server
    app.listen(PORT, () =>
      console.log(
        "Express server has started on port 3000. Open http://localhost:3000/users to see results"
      )
    );
  })
  .catch((error) => console.log(error));
