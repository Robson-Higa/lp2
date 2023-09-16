import { TrabalhosCsvDAO } from './TrabalhosCsvDAO'

let trabalhoDAO: TrabalhosCsvDAO

describe('Tests over ContactCsvDAO', () => {
  beforeAll(() => {
    trabalhoDAO = new TrabalhosCsvDAO()
  })

  it('should retrieve a title by code', () => {
    const trabalho = trabalhoDAO.findTitlebyCode('CAE-03')
    expect(trabalho?.title).toBe('CÂMARA DE CRESCIMENTO VEGETAL EM PLATAFORMA ARDUINO')
  })

  it('should retrieve a title by part of it', () => {
    const trabalho = trabalhoDAO.findJobsByPartialTitle('câmara de crescimento vegetal EM PLATAFORMA ARDUINO')
    expect(trabalho?.title).toBe('CÂMARA DE CRESCIMENTO VEGETAL EM PLATAFORMA ARDUINO')
  })
})