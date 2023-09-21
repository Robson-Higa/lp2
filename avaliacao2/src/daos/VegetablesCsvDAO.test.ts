import { VegetablesCsvDAO } from './VegetablesCsvDAO'

let vegetableDAO: VegetablesCsvDAO

describe('Tests over VegetableCsvDAO', () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesCsvDAO()
  })

  it('should retrieve a vegetable by id', () => {
    const vegetable = vegetableDAO.findVegetableById(3)
    expect(vegetable?.name).toBe('Abobrinha Menina')
  })

  it('should retrieve a vegetable by a partial name', () => {
   const vegetables = vegetableDAO.findVegetableByPartialName('sAl')
   for(let i=0; i<vegetables.length; i++){
    expect(vegetables[i].name.toLowerCase().includes("sal")).toBe(true)
  } 
  })

  it('should retrieve name by benefits', () => {
    const vegetables = vegetableDAO.findVegetableByBenefits('ajuda emagrecer')
    for(let i=0; i<vegetables.length; i++){
      expect(vegetables[i].benefits.toLowerCase().includes("ajuda emagrecer")).toBe(true)
    }
  })
})