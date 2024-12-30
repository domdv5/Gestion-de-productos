# Proyecto de Gestión de Productos

Este proyecto implementa una aplicación completa de gestión de productos que permite:

- Autenticación de usuarios.
- Listado de productos.
- Búsqueda de productos.
- Agregar productos.
- Eliminar productos.

El backend interactúa con la API de DummyJSON para manejar las operaciones CRUD de los productos.

## Requisitos

### Software Necesario

- Node.js (v20 o superior)
- npm (v6 o superior)
- Editor de texto (como VS Code)

### Dependencias

#### Backend

- `express`
- `cors`
- `node-fetch`
- `nodemon` (opcional, para desarrollo)

#### Frontend

- `react`
- `react-router-dom`
- `@mui/material`

### Herramienta Utilizada

El frontend se creó utilizando **Vite**, una herramienta rápida para proyectos modernos de React. Esto permite un inicio más veloz y un mejor rendimiento durante el desarrollo. Vite se instala automáticamente al ejecutar `npm install` en el directorio del frontend, por lo que no necesitas instalarlo manualmente.

## Instrucciones de Instalación y Ejecución

### 1. Clonar el Repositorio

```bash
$ git clone https://github.com/domdv5/Gestion-de-productos
$ cd proyecto-gestion-productos
```

### 2. Configuración del Backend

#### a. Navegar al Directorio del Backend

```bash
$ cd backend
```

#### b. Instalar Dependencias

```bash
$ npm install
```

#### c. Iniciar el Servidor

```bash
$ npm run dev
```

Por defecto, el servidor estará disponible en: `http://localhost:4000`

#### Rutas del Backend

- **Login:** `POST /login`
- **Datos del Usuario:** `GET /user`
- **Lista de Productos:** `GET /products`
- **Buscar Productos:** `GET /products/search?q={query}`
- **Agregar Producto:** `POST /products`
- **Eliminar Producto:** `DELETE /products/{id}`

### 3. Configuración del Frontend

#### a. Navegar al Directorio del Frontend

```bash
$ cd ../frontend
```

#### b. Instalar Dependencias

```bash
$ npm install
```

#### c. Iniciar el Servidor

```bash
$ npm run dev
```

Por defecto, el servidor del frontend estará disponible en: `http://localhost:3000`

### 4. Prueba de la Aplicación

1. Abre el navegador en `http://localhost:3000`.
2. Inicia sesión con las credenciales:
   - **Usuario:** `emilys`
   - **Contraseña:** `emilyspass`
3. Realiza las siguientes acciones:
   - **Buscar Productos:** Utiliza la barra de búsqueda para filtrar productos.
   - **Agregar Productos:** Abre el modal para agregar un nuevo producto.
   - **Eliminar Productos:** Aunque puedes eliminar productos de la tabla, **estos no se eliminan del servidor. Esta funcionalidad es simulada debido a las limitaciones de la API de DummyJSON. Por lo tanto, los productos eliminados seguirán viéndose en el servidor en nuevas solicitudes.**

### Notas Importantes

1. **Persistencia de Datos:** Los datos agregados o eliminados no se guardan permanentemente en la API de DummyJSON; son simulados por la API.
2. **Manejo de Errores:** Si hay errores al interactuar con la API, se muestran mensajes en la consola del navegador o del servidor.
3. **Customización:** Puedes adaptar el backend para usar una base de datos real si necesitas persistencia.

### Scripts Útiles

#### Backend

- `npm run dev`: Inicia el servidor en modo desarrollo con `nodemon`.

#### Frontend

- `npm start`: Inicia el servidor del frontend.

### Estructura del Proyecto

#### Backend

```
backend/
├── controllers/
│   ├── loginController.js
│   ├── productController.js
├── routes/
│   ├── login.js
│   ├── products.js
├── services/
│   ├── dummyApi.js
├── index.js
```

#### Frontend

```
frontend/
├── src/
│   ├── components/
│   │   ├── AddProductModal.jsx
│   │   ├── Header.jsx
│   │   ├── ProductTable.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Products.jsx
│   ├── services/
│   │   ├── authService.js
│   │   ├── productService.js
│   ├── App.jsx
│   ├── main.jsx
```

