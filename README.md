# REST API Node.js con MySQL
## Esta es una simple REST API construida con Node.js y MySQL para gestionar datos de empleados. La API se ha implementado en Render, y la base de datos está alojada en Clever Cloud.
Endpoint Base
https://restapi-node-mysql.onrender.com

Pruebas para la REST API

Obtener todos los empleados:
Método: GET
Ruta: /api/employees
Resultado Esperado:
Status: 200 OK
Cuerpo de la respuesta: Lista de empleados

Obtener un empleado por ID:
Método: GET
Ruta: /api/employees/:id (sustituye :id con un ID existente)
Resultado Esperado:
Status: 200 OK
Cuerpo de la respuesta: Datos del empleado con el ID proporcionado

Obtener un empleado por un ID inexistente:
Método: GET
Ruta: /api/employees/:id (sustituye :id con un ID que no existe)
Resultado Esperado:
Status: 404 Not Found
Cuerpo de la respuesta: Mensaje indicando que el empleado no fue encontrado

Crear un nuevo empleado:
Método: POST
Ruta: /api/employees
Cuerpo de la Solicitud: JSON con datos del nuevo empleado (nombre y salario)
Resultado Esperado:
Status: 201 Created
Cuerpo de la respuesta: ID, nombre y salario del nuevo empleado creado

Actualizar la información de un empleado:
Método: PATCH
Ruta: /api/employees/:id (sustituye :id con un ID existente)
Cuerpo de la Solicitud: JSON con datos actualizados del empleado (nombre y salario)
Resultado Esperado:
Status: 200 OK
Cuerpo de la respuesta: Datos actualizados del empleado

Actualizar la información de un empleado con un ID inexistente:
Método: PATCH
Ruta: /api/employees/:id (sustituye :id con un ID que no existe)
Cuerpo de la Solicitud: JSON con datos actualizados del empleado (nombre y salario)
Resultado Esperado:
Status: 404 Not Found
Cuerpo de la respuesta: Mensaje indicando que el empleado no fue encontrado

Eliminar un empleado:
Método: DELETE
Ruta: /api/employees/:id (sustituye :id con un ID existente)
Resultado Esperado:
Status: 204 No Content (sin contenido)

Eliminar un empleado con un ID inexistente:
Método: DELETE
Ruta: /api/employees/:id (sustituye :id con un ID que no existe)
Resultado Esperado:
Status: 404 Not Found
Cuerpo de la respuesta: Mensaje indicando que el empleado no fue encontrado
