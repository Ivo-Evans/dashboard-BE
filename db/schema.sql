BEGIN;

    DROP TABLE IF EXISTS teams, users, warmers, todos, photos CASCADE;

    CREATE TABLE teams
    (
        id SERIAL PRIMARY KEY,
        team VARCHAR(255) NOT NULL UNIQUE
    );

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
  	    username VARCHAR(255) NOT NULL UNIQUE,
	    email VARCHAR(255) NOT NULL UNIQUE,
	    password_slug VARCHAR(255) NOT NULL,
        teams_id INTEGER REFERENCES teams(id)
    );

    CREATE TABLE warmers
    (
        id SERIAL PRIMARY KEY,
        warmer VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        users_id INTEGER REFERENCES users(id)
    );

    CREATE TABLE todos
    (
        id SERIAL PRIMARY KEY,
        users_id INTEGER REFERENCES users(id),
        todo TEXT,
        completed BOOLEAN
    );

    CREATE TABLE photos
    (
        id SERIAL PRIMARY KEY,
        users_id INTEGER REFERENCES users(id),
        url VARCHAR(255) NOT NULL
    );

COMMIT;