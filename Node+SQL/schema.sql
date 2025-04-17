show tables;

CREATE TABLE usr (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHER(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL


);