# expressGuide

# Installation

```sh
$ npm install
$ node app
```

# Docker Commands

## Build Server Image
```sh
$ docker build -t express-server .
```

## Run Server Image
```sh
$ docker run -p 3000:3000 express-server
```

## Run Server Image With Bash
```sh
$ docker run -t -i express-server bash
```

## Build Container
```sh
$ docker-compose build
```

## Up Container
```sh
$ docker-compose up 
```