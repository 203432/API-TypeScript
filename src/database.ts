import {Pool} from 'pg'

export let pool = new Pool ({
    user:'postgres',
    host: 'localhost',
    password:'Nintendo64',
    database:'CatalagoJuegos',
    port:5432
})