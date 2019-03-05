CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP DEFAULT now(),
    PRIMARY KEY(id)
);




