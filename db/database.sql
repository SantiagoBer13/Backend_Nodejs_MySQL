CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    PRIMARY KEY(id) 
)