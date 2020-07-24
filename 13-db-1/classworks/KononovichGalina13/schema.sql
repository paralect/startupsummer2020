CREATE DATABASE flat_journal;

CREATE TABLE flat(
  id INT(11) PRIMARY KEY,
  rooms_amount INT(11) NOT NULL,
  flat_number INT(11) NOT NULL);

CREATE TABLE house (
  id INT(11) PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL);

CREATE TABLE person(
  id INT PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  age INT NOT NULL,
  flat_id INT,
  house_id INT,
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id));
                                        

                                        
INSERT INTO flat VALUES (1, 3, 25);
INSERT INTO flat VALUES (2, 2, 27);
INSERT INTO flat VALUES (3, 1, 29);
INSERT INTO flat VALUES (4, 4, 33);
INSERT INTO flat VALUES (5, 2, 279);
                                          
INSERT INTO house VALUES (1, 'kirova', '32');
INSERT INTO house VALUES (2, 'bogdanovicha', '25');
INSERT INTO house VALUES (3, 'bogdanovicha', '81');
INSERT INTO house VALUES (4, 'plexanova', '2');
INSERT INTO house VALUES (5, 'kirova', '10');
                                        
INSERT INTO person VALUES (1, 'galina', 'kononovich', 21, 2, 1);
INSERT INTO person VALUES (2, 'nina', 'nematova', 18, 1, 3);
INSERT INTO person VALUES (3, 'alex', 'dankov', 42, 4, 2);
INSERT INTO person VALUES (4, 'kate', 'popova', 58, 5, 5);
INSERT INTO person VALUES (5, 'pasha', 'koval', 23, 3, 4);                                          