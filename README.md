# SentioApp - Demo de Bienestar Estudiantil

Este repositorio contiene el código fuente para el demo de la aplicación **SentioApp**, diseñada para la gestión de bienestar estudiantil.

## Requisitos Previos (Windows)

1.  **Node.js**: Necesario para correr el backend y las herramientas de desarrollo.
    *   [Descargar Node.js (LTS)](https://nodejs.org/) - Instala la versión "LTS".
2.  **PostgreSQL**: La base de datos.
    *   [Descargar PostgreSQL](https://www.postgresql.org/download/windows/)
3.  **Angular CLI**: Se instala automáticamente después de instalar Node.js (ver instrucciones abajo).

## Instalación y Configuración de la Base de Datos (Paso a Paso)

Ya que no usaremos Docker, configuraremos la base de datos manualmente en Windows.

### 1. Instalar PostgreSQL
Descarga e instala PostgreSQL. Durante la instalación:
*   Te pedirá una **contraseña** para el superusuario (`postgres`). **¡Recuérdala!** (Ejemplo: `root` o `123456`).
*   Instala también **pgAdmin 4** (suele venir marcado por defecto).

### 2. Crear la Base de Datos con pgAdmin
1.  Abre la aplicación **pgAdmin 4** en tu computadora.
2.  En el panel izquierdo, conecta al servidor (te pedirá la contraseña que definiste).
3.  Haz clic derecho en "Databases" -> "Create" -> "Database...".
4.  En el nombre escribe: `sentio_db` y dale a "Save".

### 3. Crear las Tablas (Ejecutar Script)
1.  Haz clic derecho sobre tu nueva base de datos `sentio_db` y selecciona **"Query Tool"**.
2.  Copia todo el contenido del archivo `database/init.sql` que está en este proyecto.
3.  Pégalo en el editor de pgAdmin y presiona el botón de "Play" (Execute) en la barra superior.
4.  ¡Listo! La tabla de usuarios ha sido creada con un usuario de prueba.

### 4. Conectar el Backend
1.  Abre el archivo `backend/db.js` en este proyecto.
2.  Busca la línea que dice `password: 'root'`.
3.  Si tu contraseña de PostgreSQL es diferente a `root`, cámbiala ahí.

---

## Cómo Ejecutar la Aplicación

### 1. Iniciar el Backend (Servidor)

Abre una terminal (PowerShell o CMD), entra a la carpeta `backend` e instala las dependencias:

```bash
cd backend
npm install
```

Luego inicia el servidor:

```bash
node server.js
```
Verás un mensaje: "Servidor corriendo en http://localhost:3000".

### 2. Iniciar el Frontend (Página Web)

Abre **otra** terminal nueva, entra a la carpeta `frontend` e instala las dependencias:

```bash
cd frontend
npm install
```

Luego inicia la aplicación Angular:

```bash
ng serve -o
```

Esto abrirá automáticamente tu navegador en `http://localhost:4200`.

## Uso de la Aplicación

1.  **Login:** Usa las credenciales de prueba:
    *   Email: `prueba@correo.com@udenar.edu.co`
    *   Contraseña: `123456`
2.  **Home:** Verás el panel principal "Clasificador de Información".
3.  **Perfil:** Haz clic en "Perfil" para ver y editar tus datos.

## Solución de Problemas Comunes

*   **Error de conexión a la BD:** Verifica que PostgreSQL esté corriendo y que la contraseña en `backend/db.js` sea la correcta.
*   **Puerto ocupado:** Si te dice que el puerto 3000 o 4200 está ocupado, asegúrate de no tener otra instancia corriendo.
