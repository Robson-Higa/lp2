import { join } from 'path'
import { readFileSync } from 'fs'
import { Trabalho } from '../models/Trabalhos'
import { title } from 'process'

export class TrabalhosDAO {
  protected _trabalhos: Trabalho[]
  protected _strContent: string


  constructor(filename: string) {
    const fileName = join(__dirname, '..', 'data', filename)
    this._strContent = readFileSync(fileName, 'utf-8')
    this._trabalhos = []
  }

  findTitlebyCode(code: string): Trabalho | undefined {
    const trabalho = this._trabalhos.find((c) => c.code === code)
    return trabalho
  }

  findJobsByPartialTitle(partialTitle: string): Trabalho  | undefined {
    partialTitle = partialTitle.toUpperCase()
      const trabalhos = this._trabalhos.find((trabalho) => trabalho.title.toUpperCase().includes(partialTitle))
      return trabalhos
  }

  findJobsByAuthor(author: string): Trabalho | undefined {
    author = author.toUpperCase()
    const authors = this._trabalhos.find((trabalho) => trabalho.author.toUpperCase().includes(author))
      return authors
   
}
}

