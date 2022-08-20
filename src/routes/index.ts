import { Router } from 'express';
import { userRoutes } from "./users";
import { indexResponse } from "../externalInteraction/controllers/indexController";

const routes = Router();

routes.use('/users', userRoutes);

routes.get('/', (req, res) => {
  return res.json(indexResponse);
});

export { routes };
