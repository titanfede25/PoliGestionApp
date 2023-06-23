import { Router } from 'express';
import {/*getById, */getPolicia} from './Service.js';

const router = Router();
/*router.get ('ruta/:id/:dia', async(req, res)=>{ 
    const object            = await getById(req.params.id, req.params.dia);
    res.status(200).send(object);
})*/
router.get('/getPoli/:dni/:contrasena', async(req, res)=>{ 
    const object            = await getPolicia(req.params.dni, req.params.contrasena);
    res.status(200).send(object);
})
export default router;
