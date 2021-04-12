# Employee Performance Review: Mutual Feedback System

This is a web application that allows employees to submit feedback toward each other's performance review.

## Technology Stack

This app is implemented using the following tech stack
- php as backend API server using the laravel framework
- reactJS as front-end framework
- MySQL DB is assumed to be used, although any other DB can be connected

### tech stack version specs

Following is the exact version of the tech stack on which this app is tested, along with the possible version where it may work but not guarenteed.
- PHP ver8 (It may work without any issues on php 7.3+)
- NodeJS ver 15

### Supported browsers

Theoretically, this app may work on all browsers but it is guaranteed to work on latest chrome in a desktop environment on both windows and mac operating system.

## Project Setup

You can run the app by following the steps listed below.

### Pre-requisites

Make sure you have following binaries already present on your system.
- php (required for API calls)
- nodeJS (needed for reactJS build steps)
- composer (for php libs/dependencies installation)
- MySql

### preparation

Once you have the prerequisites installed, you are ready to go.
Copy or clone the source into some directory, and follow the following steps to run the app.
You will need to use a cli shell prompt.

- Install php dependencies
```shell
// go to the source directory 
cd /project/source/dir

//install dependencies
composer install
```
- install react and JS dependencies
```shell
// go to the source directory 
cd /project/source/dir

//install dependencies
npm install
```
- create a new mysql database using the below sql
```sql
CREATE DATABASE app_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

- update the `.env` file with the necessary credential information

Use some text editor to edit the `.env` file located in the root dir of this project and change the DB credentials according to your own environment.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=app_db
DB_USERNAME=app_user
DB_PASSWORD=strong-password
```

- run the migration to create db tables

use the cli shell and run the below command to migrate the db table schema
```shell
// go to the source directory 
cd /project/source/dir

//run migrations
php artisan migrate
```


## How to run

Once the setup is complete you can run the app by using the cli command below

```shell
// go to the source directory 
cd /project/source/dir

//build the reactJS
npm run watch

// in a seprate shell
php artisan serve
```

This will start a local web server and serve the app on  http://127.0.0.1:8000.

From there you can open http://127.0.0.1:8000 in a browser and interact with the app.

## Tests

unit tests are placed in `tests` directory


## API Docs

API docs can be viewed using swagger-ui placed in `api-docs` directory.

Simply open the `index.html` file directly in a browser to see the API schema. 

For actual schema, you can check `api-docs/openapi.yaml` file. 

