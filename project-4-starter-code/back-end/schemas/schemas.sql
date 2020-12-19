-- write the database name that you use here
USE P4;

CREATE TABLE users
(
    id INT
    AUTO_INCREMENT NOT NULL,
   userName VARCHAR
    (45),
   email VARCHAR
    (200),
   password VARCHAR
    (200),
    PRIMARY KEY
    (id)
);
    /*
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);*/
    CREATE TABLE articles
    (
        id int
        AUTO_INCREMENT NOT NULL,
title varchar
        (100),
description varchar
        (255),
author varchar
        (50),
is_deleted TINYINT DEFAULT 0,
favoert varchar(255),
PRIMARY KEY
        (id)
);

