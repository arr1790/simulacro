import mysql from 'mysql2/promise';

const DATABASE_URL='mysql://root@localhost:3306/escuela'

const connection = await mysql.createConnection(DATABASE_URL)

export default connection
