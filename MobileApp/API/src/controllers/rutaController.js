import { Router } from 'express';
import {getById} from '../services/rutaService.js';

const router = Router();
router.get ('/', async(req, res)=>{ //:id

    let status = 200;
    /*if(req.params.id < 0){
        status = 400;
    }
    const object            = await getById(req.params.id);
    if(object==null){
        status = 404;
    }*/
    const object            = await getById();

    res.status(status).send(object);
})
export default router;
