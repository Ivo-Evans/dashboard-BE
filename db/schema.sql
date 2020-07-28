BEGIN;

    DROP TABLE IF EXISTS users, warmers, todos, photos CASCADE;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
  	    username VARCHAR(255) NOT NULL UNIQUE,
	    email VARCHAR(255) NOT NULL UNIQUE,
	    password_slug VARCHAR(255) NOT NULL
    );

    CREATE TABLE todos
    (
        users_id INTEGER REFERENCES users(id),
        todo TEXT NOT NULL,
        completed BOOLEAN
    );

    CREATE TABLE photos
    (
        users_id INTEGER REFERENCES users(id),
        url VARCHAR(255) NOT NULL
    );

COMMIT;