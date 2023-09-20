import { Trabalho } from '../models/Trabalhos'
import { TrabalhosDAO } from './TrabalhosDAO'

export class TrabalhosCsvDAO extends TrabalhosDAO {
  constructor() {
    super('trabalhos.csv')

    const arr = this._strContent.split('\n').slice(1, 141)
    for (const line of arr) {
            const values = line.split(',')

      if (values.length === 3) {
        const trabalho: Trabalho = {
          code: values[0], 
          title: values[1], 
          author: values[2].toUpperCase().split('\n'),
        };

        this._trabalhos.push(trabalho)
      }
    }
  }
}
