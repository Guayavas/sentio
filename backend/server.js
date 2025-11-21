const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API SentioApp Funcionando');
});

// --- LOGIN ---
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario por email
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const user = result.rows[0];

        // Verificar contraseña (Simple comparación de texto para demo)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Login exitoso - devolvemos datos básicos (sin password)
        res.json({
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            message: 'Login exitoso'
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// --- OBTENER PERFIL ---
app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT id, full_name, email, phone, student_id FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener perfil' });
    }
});

// --- ACTUALIZAR PERFIL ---
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { full_name, email, phone, student_id } = req.body;

    try {
        const result = await pool.query(
            'UPDATE users SET full_name = $1, email = $2, phone = $3, student_id = $4 WHERE id = $5 RETURNING *',
            [full_name, email, phone, student_id, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Perfil actualizado correctamente', user: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar perfil' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
