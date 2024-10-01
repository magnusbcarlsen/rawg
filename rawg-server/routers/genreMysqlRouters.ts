import { Router } from 'express';
import { AppDataSource } from '../startup/data-source';
import { Genres } from '../entities/Genres';

interface Response {
    count: number;
    results: Genres[];
}

const router = Router();
const genresRepository = AppDataSource.getRepository(Genres);

// Get all genres
router.get('/', async (req, res) => {
  const genres = await genresRepository.find();
  const response: Response = {
    count: genres.length,
    results: genres,
  };
  res.json(response);
});

// Get a single genre by ID
router.get('/:id', async (req, res) => {
  const genre = await genresRepository.findOne({ where: { id: Number(req.params.id) } });
  if (genre) {
    res.json(genre);
  } else {
    res.status(404).json({ message: 'Genre not found' });
  }
});

export default router;