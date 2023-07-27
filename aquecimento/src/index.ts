import { Contact } from "./models/Contacts"

const sum = (a: number, b: number) => {
    return a + b
}

const n1: number = 5
const n2 = 6
console.log(sum(n1, n2))

const str1 = 'oi'
const str2 = ' galerinha'

//a linha abaixo causa um erro

//console.log(sum(str1, str2))

const c1: Contact = {
    name: 'Robson Higa',
    phone: '(67) 66955-5225',
}

console.log(c1.name)

const { name } = c1
console.log(name)

const decimal = 6
const binary = 0b10
console.log(binary)
const hex = 0xf
console.log(hex)
const big: bigint = 154164644664616668800n
console.log(big)

const arr1: number[] = [1, 3, 5, 4, 6]
const arr2: Array<number> = [12, 36, 522]
//criando uma tupla
const t1: [string, number] = ['LPs', 4]
const t2: [string, string] = ['orange', 'Laranja']
const cep1: [string, string] = ['79200-000', 'Aquidauana']
let ceps: [string, string]

ceps = ['79200-000', 'Aquidauana']