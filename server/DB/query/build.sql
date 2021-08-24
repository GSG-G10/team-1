BEGIN 

DROP TABLE IF EXISTS user, video_user, video;

CREATE TABLE user{
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    description TEXT,
    img_profile TEXT;
};

CREATE TABLE video_user{
    video_id INT NOT NULL,
    user_id INT NOT NULL;
}


CREATE TABLE video{
    id SERIAL PRIMARY KEY, 
    url TEXT NOT NULL UNIQUE,
    description TEXT,
    title TEXT NOT NULL,
    img TEXT;
};


CREATE TABLE review{
    user_id INT NOT NULL,
    video_id INT NOT NULL, 
    text_content TEXT NOT NULL;
};

COMMIT;