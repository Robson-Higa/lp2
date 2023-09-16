import { Trabalho } from '../models/Trabalhos'
import { TrabalhosDAO } from './TrabalhosDAO'

export class TrabalhosJsonDAO extends TrabalhosDAO {
  constructor() {
    super('trabalhos.json')
    const objs: Trabalho[] = JSON.parse(this._strContent)
    this._trabalhos = objs
  }
}
