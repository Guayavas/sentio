const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
// IMPORTANTE: Si tu contraseña de PostgreSQL es diferente, cámbiala aquí.
const pool = new Pool({
    user: 'postgres',       // Usuario por defecto en Windows suele ser 'postgres'
    host: 'localhost',
    database: 'sentio_db',  // Debes crear esta base de datos en pgAdmin
    password: 'root',       // CAMBIA ESTO por la contraseña que pusiste al instalar Postgres
    port: 5432,
});

module.exports = pool;
