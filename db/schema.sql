BEGIN;

    DROP TABLE IF EXISTS users, todos, photos CASCADE;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
  	    username VARCHAR(255) NOT NULL UNIQUE,
	    email VARCHAR(255) NOT NULL UNIQUE,
	    password_slug VARCHAR(255) NOT NULL
    );

    CREATE TABLE todos
    (
        id SERIAL PRIMARY KEY,
        users_id INTEGER REFERENCES users(id),
        todo TEXT NOT NULL,
        completed BOOLEAN
    );

    CREATE TABLE photos
    (
        id SERIAL PRIMARY KEY,
        users_id INTEGER REFERENCES users(id),
        url VARCHAR(255) NOT NULL
    );

COMMIT;