import { Vegetable } from '../models/vegetable'
import { VegetablesDAO } from './VegetablesDAO'

export class VegetablesCsvDAO extends VegetablesDAO {
  constructor() {
    super('vegetables.csv')

    const arr = this._strContent.split('\n').slice(1, 29)
    arr.forEach((c) => {
      const values = c.split(',')
      const vegetable: Vegetable = {
        id: values[0],
        name: values[1],
        benefits: values[3].replace(/,/g, ""),
      }
      this._vegetables.push(vegetable)
  })
}
}
