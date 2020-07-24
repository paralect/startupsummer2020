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
  flat_id INT(11) ,
  house_id INT(11) ,
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id)
)

use flat_journal;

INSERT INTO house(street, address) VALUES 
('Pushinskaya','34'), 
('Gagarina','214'), 
('Mtysevicha','568'), 
('Prityckogo','1'), 
('Plehanova','47'), 
('Bogdanovicha', '25');
# SELECT * FROM house;

INSERT INTO flat(rooms_amount, flat_number) VALUES 
(3,2), 
(4,6), 
(2,10),
(2,65);
# SELECT * FROM flat;


INSERT INTO person(first_name,last_name, age, flat_id, house_id) VALUES 
('Vasechka','Vasilevich', 8, 2, 3), 
('Denis','Radkevich', 8, 2, 3), 
('Some','Body', 64, 1, 5),
('Once','ToldMe', 64, 4, 5),
('Vanya','Vanevich', 74, 3, 6);
# SELECT * FROM person;


# # Вывести людей у которых возраст больше 50
SELECT * FROM person WHERE age>50;

# Достать всех людей по адресу Богдановича 25
SELECT * FROM person INNER JOIN house ON person.house_id=house.id 
WHERE street='Bogdanovicha' AND address='25';


# Вывести всех людей живущих в 2х комнатных квартирах в жилом доме на улице Плеханова
SELECT * FROM person INNER JOIN house ON person.house_id=house.id  INNER JOIN flat ON person.flat_id=flat.id 
WHERE street='Plehanova' AND rooms_amount=2;

# Вывести информацию по всем людям, живущих в 10-х квартирах
SELECT * FROM person INNER JOIN flat ON person.flat_id=flat.id 
WHERE flat_number=10;
