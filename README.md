## Description

API integrated with wompi using node.js and
NestJs

## Install

```bash
$ yarn install
```

## Creating local database with docker compose

```bash
$ docker compose up dev-db -d
$ npx prisma migrate dev --name init
$ yarn db:seed
```

## Running the app

```bash
# development
$ yarn start
```

## Tests

```bash
# development
$ yarn test:watch
$ yarn test:e2e:watch
```
