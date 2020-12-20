# parlem_technical_test

Para lanzar la app, es necesario añadir un archivo .env dentro de /server con los siguientes datos:

```
PORT=4000
DB_HOST=db
DB_PORT=5432
POSTGRES_DB=parlem
POSTGRES_USER=erik
POSTGRES_PASSWORD=parlem
NODE_ENV=development
```

Una vez creado el archivo, des de la raíz, ejecutar el comando:

`docker-compose up`

Esto creara 3 aplicaciones:
DB
Server
Client

Una vez realizado esto, ya podrá ejecutar la aplicación.
