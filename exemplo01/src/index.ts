import { BankAccount} from './models/BankAccount'
import { Client } from './models/Client'
 
const client1 = new Client ('999.999.999-99', 'Fulano de Tal')

const account1 = new BankAccount('1234', '0', client1)
console.log(account1)