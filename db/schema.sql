DROP DATABASE IF EXISTS gitpetusers_db;
CREATE DATABASE gitpetusers_db;
USE gitpetusers_db;

CREATE TABLE gitpet_users (
	id int NOT NULL AUTO_INCREMENT,
	uname varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
	pass varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

