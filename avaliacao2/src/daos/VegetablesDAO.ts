import { join } from 'path'
import { readFileSync } from 'fs'
import { Vegetable } from '../models/Vegetable'

export class VegetablesDAO {
  protected _vegetables: Vegetable[]
  protected _strContent: string


  constructor(filename: string) {
    const fileName = join(__dirname, '..', 'data', filename)
    this._strContent = readFileSync(fileName, 'utf-8')
    this._vegetables = []
  }

  findVegetableById(id: number): Vegetable | undefined {
    const vegetable = this._vegetables.find((c) => c.id === id)
    return vegetable
  }

  findVegetableByPartialName(partialName: string): Vegetable[] {
    partialName = partialName.toUpperCase()
      const vegetables = this._vegetables.filter((vegetable) => vegetable.name.toUpperCase().includes(partialName))
      return vegetables
  }

  findVegetableByBenefits(benefitsUpper: string): Vegetable[] {
    benefitsUpper = benefitsUpper.toUpperCase()
    const benefits = this._vegetables.filter((vegetable) => vegetable.benefits.toUpperCase().includes(benefitsUpper))
      return benefits
   
}
}

