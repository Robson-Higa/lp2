import { TrabalhosCsvDAO } from './TrabalhosCsvDAO'

let trabalhoDAO: TrabalhosCsvDAO

describe('Tests over ContactCsvDAO', () => {
  beforeAll(() => {
    trabalhoDAO = new TrabalhosCsvDAO()
  })

  it('should retrieve a contact by its email', () => {
    const trabalho = trabalhoDAO.findTitlebyCode('CAE-03')
    expect(trabalho?.title).toBe('CÂMARA DE CRESCIMENTO VEGETAL EM PLATAFORMA ARDUINO')
  })
})