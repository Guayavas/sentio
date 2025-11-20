const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
// Estos valores deben coincidir con el docker-compose.yml
const pool = new Pool({
    user: 'user',
    host: 'localhost', // Si se corre localmente con el puerto expuesto. Si se corre dentro de docker, usar 'db'
    database: 'sentio_db',
    password: 'password',
    port: 5432,
});

module.exports = pool;
