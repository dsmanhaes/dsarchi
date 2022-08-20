import { Router } from 'express';
import { usersResponse } from "../../externalInteraction/controllers/usersController";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  return res.json(usersResponse);
});

export { userRoutes };
