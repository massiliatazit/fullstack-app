CREATE TABLE users(
    uid SERIAL PRIMARY KEY,
    username VARCHAR (255) UNIQUE,
    email VARCHAR (255),
    email_verified BOOLEAN,
    date_created DATE,
    last_login DATE
)

CREATE TABLE posts(

    pid SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body varchar,
    user_id INT REFERENCES users(uid),
    author VARCHAR REFERENCES users(username),
    date_created TIMESTAMP
    
    )
    