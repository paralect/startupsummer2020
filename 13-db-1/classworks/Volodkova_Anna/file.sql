CREATE DATABASE flat_journal;


CREATE TABLE flat_journal.flat (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  rooms_amount INT(11) UNSIGNED NOT NULL,
  flat_number INT(11) UNSIGNED NOT NULL
);

CREATE TABLE flat_journal.house (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE flat_journal.person (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
    age INT(11) UNSIGNED NOT NULL,
    flat_id INT(11) UNSIGNED,
    house_id INT(11) UNSIGNED,
    FOREIGN KEY (flat_id) REFERENCES flat(id),
    FOREIGN KEY (house_id) REFERENCES house(id)
);

USE flat_journal;

INSERT INTO flat (rooms_amount,flat_number) VALUES ( 3, 176), (2, 87), (1, 100), (2,10);

INSERT INTO house (street,address) VALUES ('Kabushkina', '20'), ('Uakubova', '15'),
('Plehanova', '56'), ('Bogdanovicha', '25') ;

INSERT INTO person (first_name, last_name, age, flat_id, house_id) VALUES
('Ann', 'Volodkova', 20, 4, 3), ('Travis', 'Scott', 52, 1, 4);

SELECT * FROM flat;
SELECT * FROM house;
SELECT * FROM person;

SELECT * FROM person WHERE age > 50;

SELECT * FROM person p
LEFT JOIN house h  ON p.house_id = h.id where h.street = 'Bogdanovicha'
AND h.address = '25';

SELECT * FROM person p
LEFT JOIN house h  ON p.house_id = h.id
LEFT JOIN flat f ON p.flat_id = f.id WHERE f.rooms_amount = 2 AND h.street = 'Plehanova';

SELECT * FROM person p
LEFT JOIN flat f ON p.flat_id = f.id WHERE f.flat_number = 10;