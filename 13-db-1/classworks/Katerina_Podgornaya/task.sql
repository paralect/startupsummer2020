CREATE DATABASE flat_journal;
USE flat_journal;

CREATE TABLE flat (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rooms_amount INT,
  flat_number INT
);

CREATE TABLE house (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(255),
  address VARCHAR(255)
);

CREATE TABLE person (
  id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  age INT,
  flat_id INT NOT NULL,
  house_id INT NOT NULL,
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id)
);

INSERT INTO flat (rooms_amount, flat_number) VALUES 
	(1, 10), 
    (1, 11),
    (1, 12),
    (1 ,14),
    (2, 20),
    (2, 21),
    (2, 22),
    (3, 30),
    (4, 40);
    
INSERT INTO house (street, address) VALUES 
	("Plehanova", 1), 
    ("Plehanova", 2), 
    ("Bogdanovicha", 25), 
  	("Belomorova", 3), 
    ("Petra Mstsislavtsa", 4), 
    ("Bogdanovicha", 1);

INSERT INTO person (first_name, last_name, age, house_id, flat_id) VALUES
	("Anna","Banana", 55, 1, 1),
    ("Olga","Molga", 60, 1, 2),
    ("Arraveu","Nostef", 60, 1, 5),
    ("Olga","Burak", 60, 2, 6),
    ("Iosif","Svyatoi", 21, 2, 3),
    ("Vlasidlav","Murash", 18, 2, 3),
    ("Ostaf","Bostaf", 30, 3, 4),
    ("Uka","Baka", 45, 3, 5),
    ("Inna","Enna", 51, 4, 6),
    ("Georg","Borg", 90, 4, 7),
    ("Lesha","Gont", 80, 5, 8),
    ("Kent","Buent", 110, 6, 9);

USE flat_journal;

-- Вывести информацию по всем таблицам
SELECT * FROM flat_journal.person p
	JOIN flat_journal.house h on p.house_id = h.id
    JOIN flat_journal.flat f on p.flat_id = f.id;

-- Вывести людей у которых возраст больше 50
SELECT * FROM flat_journal.person WHERE AGE > 50;

-- Достать всех людей по адресу Богдановича 25
SELECT * FROM flat_journal.house h
	LEFT JOIN flat_journal.person p on h.id = p.house_id 
    	WHERE street = "Bogdanovicha" AND address = "25";
        
-- Вывести всех людей живущих в 2х комнатных квартирах в жилом доме на улице Плеханова
SELECT * FROM flat_journal.person p
	JOIN flat_journal.house h on p.house_id = h.id
    JOIN flat_journal.flat f on p.flat_id = f.id 
    	WHERE street = "Plehanova" AND rooms_amount = 2;
        
-- Вывести информацию по всем людям, живущих в 10-х квартирах
SELECT * FROM flat_journal.person p
    JOIN flat_journal.flat f on p.flat_id = f.id 
    	WHERE flat_number = 10;
      