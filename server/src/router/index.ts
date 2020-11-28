import { Router } from 'express';

import clientController from '../clients/clientController';

const router = Router();

router.get('/user', clientController.getClientData);

export default router;
