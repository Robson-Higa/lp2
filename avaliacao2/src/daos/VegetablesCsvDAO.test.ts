import { VegetablesCsvDAO } from './VegetablesCsvDAO'

let vegetableDAO: VegetablesCsvDAO

describe('Tests over VegetableCsvDAO', () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesCsvDAO()
  })

  it('should retrieve a vegetable by id', () => {
    const vegetable = vegetableDAO.findNamebyId('3')
    expect(vegetable?.name).toBe('Abobrinha Menina')
  })

  it('should retrieve a vegetable by a partial name', () => {
   const vegetable = vegetableDAO.findVegetablebyPartialName('aBo')
    expect(vegetable?.name).toBe('Abobrinha')
  })

  it('should retrieve name by benefits', () => {
    const vegetable = vegetableDAO.findNamebyBenefits('As suas folhas são ricas em vitamina ')
    expect(vegetable?.name).toBe('Alface Crespa')
  })
})