import {createPool}  from 'mysql2/promise'; 

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    port:3306,
    database:process.env.DATABASE
});

export {pool}