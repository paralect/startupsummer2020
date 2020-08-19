CREATE DATABASE flat_journal;

CREATE TABLE flat_journal.flat(
  id INT(11) PRIMARY KEY AUTO_INCREMENT,
  rooms_amount INT(11) NOT NULL,
  flat_number INT(11) NOT NULL
);

CREATE TABLE flat_journal.house(
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE flat_journal.person(
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL ,
  age INT(11) NOT NULL ,
  flat_id INT(11),
  house_id INT(11),
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id)
)

use flat_journal;

INSERT INTO flat (rooms_amount, flat_number) 
VALUES (2, 14), (3, 5), (2,4), (6,11), (2,2);

INSERT INTO house (street, address) 
VALUES ("Avakyan", 14), 
("Chkalov", 5), 
("Asanaliev", 7),
("Bogdonovich", 25), 
("Plehanov", 7);

INSERT INTO person (first_name, last_name, age, flat_id, house_id) 
VALUES ("Vasya", "Vasyans", 38, 1,2), 
("Princess", "Thomas", 46,2 ,3), 
("Wyatt", "Trujillo", 66, 4, 1),
("Amelie", "Chadwick", 56, 3, 5),
("Tamanna", "Mahoney", 90, 1, 2);

select * from flat_journal.person where (age > 50);

select * from person inner join house on person.house_id = house.id where house.street = "Bogdonovich" and flat_journal.house.address = 25;

select * from person inner join house on person.house_id = house.id inner join flat on flat.id = person.flat_id where house.street = "Plehanov" and flat.rooms_amount = 2;

select * from person inner join flat on person.flat_id = flat.id where flat.flat_number > 10;

