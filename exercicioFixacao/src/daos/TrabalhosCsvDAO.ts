import { Trabalho } from '../models/Trabalhos'
import { TrabalhosDAO } from './TrabalhosDAO'

export class TrabalhosCsvDAO extends TrabalhosDAO {
  constructor() {
    super('trabalhos.csv')
    const arr = this._strContent.split('\n').slice(1, 101)
    arr.forEach((c) => {
      const values = c.split(',')
      const trabalho: Trabalho = {
        code: values[0],
        title: values[1],
        author: values[2],
      }
      this._trabalhos.push(trabalho)
    })
  }
}
