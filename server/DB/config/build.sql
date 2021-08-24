BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS video CASCADE;
DROP TABLE IF EXISTS video_user CASCADE;
DROP TABLE IF EXISTS review CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL ,
    password VARCHAR(100) NOT NULL,
    description TEXT,
    img_profile TEXT, 
    img_background TEXT
);

CREATE TABLE video(
    id SERIAL PRIMARY KEY, 
    created_by INT REFERENCES users(id),
    url TEXT NOT NULL,
    description TEXT,
    title TEXT NOT NULL,
    img TEXT,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE video_user(
    video_id INT REFERENCES users(id),
    user_id INT REFERENCES video(id)
);


CREATE TABLE review(
    user_id INT REFERENCES users(id),
    video_id INT NOT NULL, 
    text_content TEXT NOT NULL
);

COMMIT;