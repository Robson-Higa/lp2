import { Vegetable } from '../models/Vegetable'
import { VegetablesDAO } from './VegetablesDAO'

export class VegetablesCsvDAO extends VegetablesDAO {
  constructor() {
    super('vegetables.csv')

    const arr = this._strContent.split('\n').slice(1, 29)
    arr.forEach((c) => {
      let values = c.split(',')
      
      const vegetable: Vegetable = {
        id: Number(values[0]),
        name: values[1],
        benefits: values[3],
      }
      this._vegetables.push(vegetable)
  })
}
}
