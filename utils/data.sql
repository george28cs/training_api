DROP DATABASE IF EXISTS training_database;
CREATE DATABASE training_database;

USE training_database;

DROP TABLE IF EXISTS `groupd`; 
CREATE TABLE `groupd` (
  id          INT         		NOT NULL    AUTO_INCREMENT,
  name		  VARCHAR(30)		NOT NULL,

  -- keys
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS student;
CREATE TABLE student (
  -- specific fields
  id          INT         		NOT NULL    AUTO_INCREMENT,
  first_name  VARCHAR(30)      	NOT NULL,
  last_name   VARCHAR(50) 		NOT NULL, 
  group_id	  INT				NOT NULL,
  register_date TIMESTAMP   NOT NULL    DEFAULT CURRENT_TIMESTAMP,

  -- keys
  PRIMARY KEY (id),
  FOREIGN KEY (group_id)         REFERENCES `groupd` (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO groupd (
	id,
    name
) VALUES (1, 'Ingles A2');