import { join } from 'path'
import { readFileSync } from 'fs'
import { Vegetable } from '../models/vegetable'

export class VegetablesDAO {
  protected _vegetables: Vegetable[]
  protected _strContent: string


  constructor(filename: string) {
    const fileName = join(__dirname, '..', 'data', filename)
    this._strContent = readFileSync(fileName, 'utf-8')
    this._vegetables = []
  }

  findNamebyId(id: string): Vegetable | undefined {
    const vegetable = this._vegetables.find((c) => c.id === id)
    return vegetable
  }

  findVegetablebyPartialName(partialName: string): Vegetable  | undefined {
    partialName = partialName.toUpperCase()
      const vegetables = this._vegetables.find((vegetable) => vegetable.name.toUpperCase().includes(partialName))
      return vegetables
  }

  findNamebyBenefits(benefitsUpper: string): Vegetable | undefined {
    benefitsUpper = benefitsUpper.toUpperCase()
    const benefits = this._vegetables.find((vegetable) => vegetable.benefits.toUpperCase() === benefitsUpper)
      return benefits
   
}
}

