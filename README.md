
# Inventario Frontend
Aplicación web para gestión de inventario desarrollada con React y Tailwind CSS. Consume la API REST del backend con autenticación JWT.
 
---
 
## Tecnologías utilizadas
 
| Capa | Tecnología |
|------|-----------|
| Lenguaje | JavaScript |
| Framework | React |
| Estilos | Tailwind CSS |
| HTTP Client | Fetch API |
| Puerto | 3000 |
 
---
 
## Funcionalidades
 
- Inicio de sesión con autenticación JWT
- Listado de productos con paginación
- Agregar, editar y eliminar productos
- Rutas protegidas (requieren sesión activa)
- Conexión con API REST del backend
 
---
 
## Estructura del proyecto
 
```
src/
├── Login.js               # Pantalla de inicio de sesión
├── ProductPage.js         # Gestión de productos (CRUD)
├── services/
│   └── productService.js  # Llamadas a la API REST
└── index.js               # Punto de entrada
```
 
---
 
## Configuración
 
### Requisitos previos
 
- Node.js 20+
- Backend corriendo en `http://localhost:8082`
 
### Instalar dependencias
 
```bash
npm install
```
 
### Ejecutar el proyecto
 
```bash
npm start
```
 
La aplicación estará disponible en `http://localhost:3000`
 
---
 
## Conexión con el Backend
 
Este frontend consume la API REST del backend desarrollado en Spring Boot.  
Repositorio del backend: [inventario-backend](https://github.com/Jey00002/inventario-backend)
 
---
 
## Autor
 
**Jacob** — [@Jey00002](https://github.com/Jey00002)  
Estudiante de Ingeniería de Sistemas — Universidad Tecnológica del Perú
