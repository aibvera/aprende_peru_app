# Aprende perú

Backend de aplicación web de compra de cursos asíncronos online para presentación final del curso de backend.

Incluye API REST con JWT, endpoints documentados, conexión con MongoDB y websockets para mostrar pedidos en tiempo real.
También se ha incluido CORS, pruebas unitarias y de integración.

**Desarrollado por Alejandro Bueno**

Octubre 2025

---

### Instalación

- Descargar el repositorio y abrirlo con VSCode u otro IDE. La URL del repositorio está en el `.txt` subido a Paidea.
- Crear una base de datos llamada `aprende_peru` en MongoDB.
- Crear las colecciones `courses`, `purchases` y `users`.
- Subir el JSON de la carpeta `jsons_mongo` a la colección `courses`.
- Crear y actualizar el archivo `.env` en la raiz del proyecto con las variables de entorno que representan las credenciales locales de URLs y de acceso a la base de datos MongoDB. Las variables usadas en el desarrollo están en el `.txt` subido a Paideia.
- Instalar modulos necesarios (`npm install`).
- Crear usuarios con contraseña hasheada corriendo los scripts `createAdmin.js` y `createFirstUser.js` (`node utils/createAdmin.js` y `node utils/createFirstUser.js`). No se incluyeron los usuarios como un JSON para que se pueda hashear la contraseña desde estos scripts con bcrypt.

---

### Uso de la app

- Levantar el servidor con `npm start`.
- El levantamiento de los HTML se debe hacer con un servidor que corra en `http://localhost:5500`. Se recomienda descargar Live Server (Ritwick Dey) en VSCode para simplificar el proceso.

---

### Websockets

- Levantar al archivo `static/cliente1/index.html` que funciona como cliente usuario. Este cliente simulará un usuario que hace compras.
- Levantar al archivo `static/cliente2/index.html` que funciona como cliente admin. Este cliente simulará el centro que recibe las compras en tiempo real via websocket.
- Iniciar sesión en el cliente usuario con `utest` y `123456`.
- Iniciar sesión en el cliente admin con `admin` y `admin`.
- Realizar la compra de un curso desde el cliente usuario. Esta se verá reflejada en la pantalla del cliente admin.

---

### Notas

- La documentación del proyecto está en `api-doc` (ej.: `localhost:3000/api-doc`).
