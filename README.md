# SentioApp - Demo de Bienestar Estudiantil

Este repositorio contiene el código fuente para el demo de la aplicación **SentioApp**, diseñada para la gestión de bienestar estudiantil.

## Requisitos Previos

Para ejecutar este proyecto, se utilizar el framework **Docker** y **Docker Compose**.
*   [Descargar Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Instrucciones Paso a Paso

### 1. Iniciar la Base de Datos

Abre una terminal en la carpeta raíz del proyecto (donde está `docker-compose.yml`) y ejecuta:

```bash
docker-compose up -d
```

Esto descargará e iniciará una base de datos PostgreSQL. También creará automáticamente la tabla de usuarios y un usuario de prueba.

**Usuario de Prueba:**
*   Email: `prueba@correo.com@udenar.edu.co` (o intenta `prueba@correo.com` si hubo cambios)
*   Contraseña: `123456`

### 2. Iniciar el Backend (Servidor)

Abre una **nueva terminal**, entra a la carpeta `backend` e instala las dependencias:

```bash
cd backend
npm install
```

Luego inicia el servidor:

```bash
node server.js
```
Verás un mensaje: "Servidor corriendo en http://localhost:3000".

### 3. Iniciar el Frontend (Página Web)

Abre otra **nueva terminal**, entra a la carpeta `frontend` e instala las dependencias:

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

1.  **Login:** Usa las credenciales de prueba (`prueba@correo.com@udenar.edu.co` / `123456`).
2.  **Home:** Verás el panel principal "Clasificador de Información".
3.  **Perfil:** Haz clic en "Perfil" en la barra superior. Podrás ver tus datos y editarlos haciendo clic en "Editar Perfil".
4.  **Guardar:** Modifica algún dato y dale a "Guardar". Si recargas la página, verás que los datos persisten (porque se guardaron en la base de datos).

## Notas Técnicas

*   **Base de Datos:** PostgreSQL (Imagen Docker `postgres:15`).
*   **Backend:** Node.js + Express.
*   **Frontend:** Angular 16 + PrimeNG (Framework de componentes UI).
*   **Persistencia:** Los datos se guardan en el contenedor de Docker. Si borras el contenedor, los datos se reinician al estado inicial (`init.sql`).
