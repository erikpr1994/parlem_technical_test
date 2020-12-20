import { Request, Response, Router } from 'express';

import models from '../../models';

import ClientService from '../../services/client';

const route = Router();

export default (app: Router) => {
  app.use('/user', route);

  route.get('/all', async (_: Request, res: Response) => {
    try {
      const { client } = await models();

      const clientServiceInstance = new ClientService(client);

      const users = await clientServiceInstance.getAllClients();

      return res.json(users).status(200);
    } catch (e) {
      res.json(e).status(404);
    }
  });

  route.get('/:id', async (req: Request, res: Response) => {
    try {
      const { client } = await models();

      const clientServiceInstance = new ClientService(client);

      const user = await clientServiceInstance.getClientById(
        Number(req.params.id)
      );

      return res.json(user).status(200);
    } catch (e) {
      res.json(e).status(404);
    }
  });
};
