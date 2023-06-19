import { Router } from 'express';
import {/*getById, */getPolicia} from './Service.js';

const router = Router();
/*router.get ('ruta/:id/:dia', async(req, res)=>{ 
    const object            = await getById(req.params.id, req.params.dia);
    res.status(200).send(object);
})*/
router.get (':dni/:contraseña', async(req, res)=>{ 
    console.log(req.params.dni)
    const object            = await getPolicia(req.params.dni, req.params.contraseña);
    res.status(200).send(object);
})
export default router;
