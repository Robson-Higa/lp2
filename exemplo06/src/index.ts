import { join } from 'path'

import { user } from './User'

console.log('ola!')

export const isAdult = (age: number) => {
    if (age >= 18) {
        return true
    }

    return false
}

export const whatever = (n: number) => {
    if (n === 2) {
        return 1
    } else if (n < 2) {
        return -1
    }
}

const obj = { name: 'Fulano', phone: '(99 99999-9999)' }
const { name } = obj
console.log(name)

const path = join(__dirname, '..')
const user = new user('Fulando  de Tal', 'fulano@email.com')
console.log(path, user)
