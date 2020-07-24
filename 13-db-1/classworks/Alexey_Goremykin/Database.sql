CREATE TABLE flat (
   id int NOT NULL PRIMARY KEY,
   rooms_amount int NOT NULL,
   flat_number int
	
);

CREATE TABLE house (
   id int NOT NULL PRIMARY KEY,
   street VARCHAR(255),
   address VARCHAR(255)
  	
);
	
CREATE TABLE person (
   id int NOT NULL PRIMARY KEY,
   first_name VARCHAR(255),
   last_name VARCHAR(255),
   age  int,
   flat_id int NOT NULL,
   house_id int NOT NULL,
  
  FOREIGN KEY (flat_id) REFERENCES flat(id) ON DELETE CASCADE,
  FOREIGN KEY (house_id) REFERENCES house(id) ON DELETE CASCADE
);
	
INSERT INTO flat VALUES (1, 1, 101);
INSERT INTO flat VALUES (2, 2, 76);
INSERT INTO flat VALUES (3, 3, 53);
INSERT INTO flat VALUES (4, 2, 42);
INSERT INTO flat VALUES (5, 3, 13);
	
SELECT * FROM flat;

INSERT INTO house VALUES (1, 'Bogdanovicha', '25');
INSERT INTO house VALUES (2, 'Plehanova', '11');
INSERT INTO house VALUES (3, 'Plehanova', '8');
INSERT INTO house VALUES (4, 'Bogdanovicha', '13');
INSERT INTO house VALUES (5, 'Bogdanovicha', '25');

SELECT * FROM house;
	
INSERT INTO person VALUES (11, 'Ukrop', 'Petrushkin', 46, 1, 1);	
INSERT INTO person VALUES (22, 'Spanch Bob', 'Square pants',33, 2, 2);	
INSERT INTO person VALUES (33, 'Grigoriy', 'Shoushenk', 67, 3, 3);	
INSERT INTO person VALUES (44, 'Kirill', 'Mefodiew', 56, 4, 4);	
INSERT INTO person VALUES (55, 'Mefodiy', 'Kirillov', 65, 5, 5);

SELECT * FROM person;

SELECT * FROM person where age > 50;
SELECT * FROM person LEFT JOIN house on person.house_id = house.id where house.street = 'Bogdanovicha' AND house.address = '25';
SELECT * FROM person LEFT JOIN flat on person.flat_id = flat.id LEFT JOIN house on person.house_id = house.id where house.street = 'Plehanova' AND flat.rooms_amount = '2';
SELECT * FROM person LEFT JOIN flat on person.flat_id = flat.id where flat_number > 9 AND flat_number < 20
