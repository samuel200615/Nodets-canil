// searchController.ts
import { Request, Response } from 'express'

export const search = (req: Request, res: Response): void => {
  // Lógica da busca
  res.send('Search Results')
}
