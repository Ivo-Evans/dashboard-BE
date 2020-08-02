BEGIN;

    DROP TABLE IF EXISTS users, warmers, todos, photos, football_games CASCADE;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
  	    username VARCHAR(255) NOT NULL UNIQUE,
	    email VARCHAR(255) NOT NULL UNIQUE,
	    password_slug VARCHAR(255) NOT NULL
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

    CREATE TABLE football_games
    (
        id SERIAL PRIMARY KEY,
        home_team VARCHAR(255) NOT NULL,
        away_team VARCHAR(255) NOT NULL,
        result VARCHAR(1) NOT NULL
    );

COMMIT;