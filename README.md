# Production-Grade-Nodejs-api
To learn and build a production grade node js backend with all the best practices implemented

To initialize a node project we need to give the below code in the terminal and y tag is to keep the default config
`npm init -y`

To install the dependencies
`npm i typescript --save-dev` - The type script is to develop the code in the deve env only so the tag is given

Initialise the project with typescript
`npx tsc --init`

`npm in @types/node --save-dev` - Install types for the node - dev only dependency - type safety for all the node objects

`npm i express` - Install the express framework
`npm i @types/express --save-dev` - Install the types for express as the dev only dependency

`npm i ts-node nodemon --save-dev` - Intall nodemon for hot reload

--> Database layer - ORM
`npm i prisma @prisma/client` - Install prisma and prisma client
`npx prisma init` Initialise the prisma, this will create a folder in the current directory named prisma

define the models in the schema.prisma file and run the script to create a migration file
`npx prisma migrate dev --name CreateusersTable` - After this it'll create a folder under prisma named migration and a migration.sql file will be there and the table will be created in the mysql server

--> Environment variables
`npm i dotenv`