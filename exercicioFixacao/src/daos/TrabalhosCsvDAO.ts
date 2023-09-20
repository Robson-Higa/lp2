import { Trabalho } from '../models/Trabalhos'
import { TrabalhosDAO } from './TrabalhosDAO'

export class TrabalhosCsvDAO extends TrabalhosDAO {
  constructor() {
    super('trabalhos.csv')

    const arr = this._strContent.split('\n').slice(1, 141); // Use '\n' em vez de ',' para dividir linhas e ajuste os índices.

    for (const line of arr) { // Use um loop for..of para percorrer as linhas.
      const values = line.split(','); // Divida cada linha em valores separados por vírgula.

      if (values.length === 3) { // Verifique se há exatamente 3 valores em cada linha.
        const trabalho: Trabalho = {
          code: values[0], // Use values[0] para o código.
          title: values[1], // Use values[1] para o título.
          author: values[2].split('\n'), // Divida os autores usando ';' em vez de '\n'.
        };

        this._trabalhos.push(trabalho);
      }
    }
  }
}
