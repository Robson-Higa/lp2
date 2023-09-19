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
   const trabalho = trabalhoDAO.findJobsByPartialTitle('DO pantANAL NO PROCESSO')
    expect(trabalho?.title).toBe('IMPACTOS DAS QUEIMADAS DO PANTANAL NO PROCESSO DE POLINIZAÇÃO DAS ABELHAS DE MATO GROSSO DO SUL')
  })

  it('should retrieve an titles by author', () => {
    const trabalho = trabalhoDAO.findJobsByAuthor('Marcia Ferreira Cristaldo')
    expect(trabalho?.title).toBe('Sistema de Monitoramento do Cultivo Aquapônico')
    expect(trabalho?.title).toBe('Robô Arduino Seguidor de Linha')
  })
})