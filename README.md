# react-sharp
## Sistema de control de RRHH

### React.js con Microsoft .NET como backend y postgreSQL como base de datos

Estructura del proyecto:
```
.
├── server
│   ├── ReacsharpAPI
│   ...
├── db
│   └── init.db
├── web
│   └── react-app
│   ├── ...
├── compose-app
│   └── compose.yaml
└── README.md
```

[_compose.yaml_](compose-app/compose.yaml)
```
services:
  server-db:
    image: 'postgres:16.1-alpine3.19'
    container_name: server-db
    ports:
      - 5432:5432
    volumes:
      - ../db/:/docker-entrypoint-initdb.d
      - postgres-server:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=rrhh
      - POSTGRES_USER=rrhh
      - POSTGRES_PASSWORD=rrhh
    networks:
      - server-db
  
  server:
    build:
      context: ../server/reactSharpAPI/
    container_name: server
    environment:
      - DB_HOST=server-db
      - DB_PORT=5432
      - DB_NAME=rrhh
      - DB_USER=rrhh
      - DB_PASSWORD=rrhh
    ports:
      - 5001:5001
    ...
```
El archivo define los tres servicios que van a levantarse `web`, `server` y `server-db`.
Al momento de levantar el proyecto, docker compose asigna el puerto 3000 al servicio web del puerto del contenedor al host local como se especifica en el archivo.
Verificar que el puerto 3000 ya no este en uso para que funcione correctamente el deploy.

## Deploy de la aplicacion con docker compose

```
$ cd compose-app
$ docker compose up
Creating network "web-server" with the default driver
Building web
[Web 1/6] : FROM docker.io/library/node:16
[web 2/6] WORKDIR /app
[web 3/6] COPY ./package*.json ./
...
web        |
web        | webpack compiled with 1 warning
not        | Application succefully started, open browser in http://localhost:3000
```

## Verificar estado

Luego de finalizar el deploy, ir a `http://localhost:3000` en tu navegador y verificar que la aplicacion esta corriendo.

Detener y eliminar los contenedores
```
$ docker compose down -v
```
