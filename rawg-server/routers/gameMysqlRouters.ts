import { Router } from 'express';
import { AppDataSource } from '../startup/data-source';
import { Games } from '../entities/Games';


interface Response {
    count: number;
    results: Games[];
}

const router = Router();
const gamesRepository = AppDataSource.getRepository(Games);



// Get all games
router.get('/', async (req, res) => {
  const games = await gamesRepository.find();
  const response: Response = {
    count: games.length,
    results: games,
  };
  res.json(response);
});

// Get a single game by ID
// router.get('/:id', async (req, res) => {
//   const game = await gamesRepository.findOne({ where: { id: Number(req.params.id) } });
//   if (game) {
//     res.json(game);
//   } else {
//     res.status(404).json({ message: 'Game not found' });
//   }
// });



export default router;