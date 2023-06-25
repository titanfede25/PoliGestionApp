import { Router } from 'express';
import {getRutas, getPolicia} from './Service.js';

const router = Router();
router.get('/getPoli/:dni/:contrasena', async(req, res)=>{ 
    const object            = await getPolicia(req.params.dni, req.params.contrasena);
    res.status(200).send(object);
})
router.get ('/getRutas/:idPolicia', async(req, res)=>{ 
    const object            = await getRutas(req.params.idPolicia);
    res.status(200).send(object);
})
export default router;
