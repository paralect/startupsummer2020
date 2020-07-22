-- create database flat_journal;

-- CREATE USER 'flat_user'@'localhost' IDENTIFIED BY 'flat_password';
-- GRANT ALL PRIVILEGES ON flat_journal . * TO 'flat_user'@'localhost';

use flat_journal;

DROP TABLE if EXISTS person;
DROP TABLE IF EXISTS flat;
DROP TABLE IF EXISTS house;

CREATE TABLE flat (
    id INT(11) NOT NULL,
    rooms_amount INT(11),
    flat_number INT(11),
    PRIMARY KEY(id)
);

CREATE TABLE house (
  id INT(11) NOT NULL,
  street VARCHAR(255),
  address VARCHAR(255),
  PRIMARY KEY(id) 
);

CREATE TABLE person (
  id INT(11) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  age INT(11),
  flat_id INT(11),
  house_id INT(11),
  INDEX addr_ind (flat_id, house_id),
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id),
  PRIMARY KEY(id) 
);

-- fill with data
INSERT INTO flat VALUES (0, 1, 1), (1, 1, 2), (2, 1, 3), (3, 2, 10);
INSERT INTO house VALUES (0, 'Богдановича', 25), (1, 'Богдановича', 5), (2, 'Плеханова', 42);
INSERT INTO person VALUES (0, 'Vasya', 'Petrov', 55, 1, 0), (1, 'Petr', 'Vasilyev', 55, 2, 1), (2, 'Ivan', 'Ivanov', 15, 3, 2);

-- all persons age > 50
SELECT first_name, last_name FROM person WHERE age > 50;

-- all from Bogdanovicha 25
SELECT * FROM person LEFT JOIN house ON person.house_id = house.id WHERE house.street = 'Богдановича' AND house.address = 25;

-- 2-room-flats at Plehanova
SELECT * FROM person 
  LEFT JOIN flat ON person.flat_id = flat.id 
  LEFT JOIN house ON person.house_id = house.id 
  WHERE house.street = 'Плеханова' AND flat.rooms_amount = 2;

