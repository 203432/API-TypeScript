import express from 'express'
import { createVideoGame, deleteVideoGame, getVideoGameById, getVideoGames, updateVideoGame} from '../controllers/videogame.controller'    

let router = express.Router();

router.get('/videogames',getVideoGames)
router.get('/videogames/:id',getVideoGameById)
router.post('/videogames',createVideoGame)
router.put('/videogames/:id',updateVideoGame)
router.delete('/videogames/:id',deleteVideoGame)


export default router