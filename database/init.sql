CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    student_id VARCHAR(50),
    password VARCHAR(255) NOT NULL
);

-- Insertar usuario de prueba (La contraseña es '123456' - en un caso real debería estar encriptada)
-- 'prueba@correo.com' para el nombre completo basado en la imagen, aunque sea inusual.
INSERT INTO users (full_name, email, phone, student_id, password)
VALUES
('prueba@correo.com', 'prueba@correo.com@udenar.edu.co', '3001234567', '20241234567', '123456')
ON CONFLICT (email) DO NOTHING;
