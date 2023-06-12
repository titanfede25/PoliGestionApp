import { Router } from 'express';
import {getById} from '../services/Service.js';

const router = Router();
router.get ('/:id/:dia', async(req, res)=>{ 
    const object            = await getById(req.params.id, req.params.dia);
    res.status(200).send(object);
})
router.get ('/:id/:dia', async(req, res)=>{ 
    const object            = await getById(req.params.id, req.params.dia);
    res.status(200).send(object);
})
export default router;
