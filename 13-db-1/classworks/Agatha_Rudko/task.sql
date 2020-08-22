CREATE DATABASE flat_journal;
USE flat_journal;

CREATE TABLE flat (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rooms_amount INT NOT NULL,
  flat_number INT NOT NULL
);

CREATE TABLE house (
  id INT AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  flat_number VARCHAR(255) NOT NULL
);

CREATE TABLE person (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  flat_id INT,
  house_id INT,
  FOREIGN KEY (flat_id) REFERENCES flat(id) ON DELETE CASCADE,
  FOREIGN KEY (house_id) REFERENCES house(id) ON DELETE CASCADE
);

INSERT flat(rooms_amount, flat_number) VALUES (2, 123), (5, 258), (3, 666), (4, 78), (1, 25), (2, 77), (12, 10);
INSERT house(street, flat_number) VALUES ('Plehanova', 123),('Bogdanovicha', 25),('Kulman', 258),('Mew', 666), ('Privetlivaya', 10);

INSERT person(first_name, last_name, age, flat_id, house_id) VALUES ('Agatha', 'Rudko', 20, 5, 2), ('Nastya', 'Katya', 30, 1, 1), ('Lol', 'Kek', 100, 3, 4), ('Michail', 'Bulgakov', 100000, 7, 5);

SELECT id, first_name, last_name, age FROM person WHERE age > 50;
SELECT person.id, first_name, last_name, house.street, house.flat_number FROM person JOIN house ON person.house_id = house.id WHERE house.street='Bogdanovicha' AND house.flat_number = 25;
SELECT person.id, first_name, last_name, house.street, house.flat_number, flat.rooms_amount FROM person JOIN house ON person.house_id = house.id JOIN flat ON person.flat_id = flat.id WHERE house.street='Plehanova' AND flat.rooms_amount =2;
SELECT person.id, first_name, last_name, flat.flat_number  FROM person JOIN flat ON person.flat_id = flat.id WHERE flat.flat_number = 10;

