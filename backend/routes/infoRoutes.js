

import { Router } from 'express';
import { getAllInfo, createInfo, updateInfo, deleteInfo } from '../controllers/infoController.js';

const router = Router();

// you will only have to use "/" in every route since you have already stated in your server.js file that every /api/info will use the infoRoutes.js file
// example: 
// router.get('/api/info', getAllInfo);
// you will have to run localhost:3000/api/info/api/info for you to see it
router.get('/', getAllInfo);
router.post('/', createInfo);
router.put('/:id', updateInfo);
router.delete('/:id', deleteInfo);

export default router;