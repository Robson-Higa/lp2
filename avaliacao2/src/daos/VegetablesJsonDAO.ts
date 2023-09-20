import { Vegetable } from '../models/vegetable'
import { VegetablesDAO } from './VegetablesDAO'

export class VegetablesJsonDAO extends VegetablesDAO {
  constructor() {
    super('vegetables.json')
    const objs: Vegetable[] = JSON.parse(this._strContent)
    this._vegetables = objs
  }
}
