Se va a trabajar con Node JS

En Bash
npm init
package: ver_1
version: (1.0.0)
description: NodeJS SQL
author: el que queramos
package.json -> es el archivo que debe de generar

npm i express

npm i -D nodemon  //para entrar en modo desarrollo

//instalar pug <https://pugjs.org/api/express.html>
npm i pug
// para ejecutar la vista
npm run server
En el json
Patito24 - root

<p>No tocar Node-modules ni package-lock.json</p>
Controller
    - Express
    - MySQL
    - Seguridad
        - Tokens

Crear carpeta de 'config', 'controllers', 'public', 'routes', 'views', estas son las carpetas recomendadas

Tarea
Diseñar la base de datos del carrito
Para el proyecto de hotel, crear el esquema de la BD y crear una tabla que diga 'misdatos' con
los datos id, dato1 ...dato5 (como varchar(255)), primary key(id),default character set utf8mb
y se guarda con un source esquema.sql