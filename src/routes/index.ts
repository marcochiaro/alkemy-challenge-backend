import { Router } from "express";
// import auth from "./auth";
// import user from "./user";
import operation from "./operation";

const routes = Router();

//TODO: IMPLEMENT AUTH
// routes.use("/auth", auth);
// routes.use("/users", user);
routes.use("/operations", operation);

export default routes;
