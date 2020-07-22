INSERT INTO flats (id, rooms_amount, flat_number)
VALUES (1, 4, 10);
INSERT INTO flats (id, rooms_amount, flat_number)
VALUES (2, 2, 5);
INSERT INTO flats (id, rooms_amount, flat_number)
VALUES (3, 3, 40);
INSERT INTO flats (id, rooms_amount, flat_number)
VALUES (4, 2, 10);

INSERT INTO houses (id, street, address)
VALUES (1, 'Bogdanovicha', '25');

INSERT INTO houses (id, street, address)
VALUES (2, 'Plehanova', '33');

INSERT INTO houses (id, street, address)
VALUES (3, 'Pushkina', '10');

INSERT INTO houses (id, street, address)
VALUES (4, 'Mihailova', '21');

INSERT INTO persons (first_name, last_name, age)
VALUES ('Antoshka', 'Baklanov', 30);

INSERT INTO persons (first_name, last_name, age, house_id, flat_id)
VALUES ('Kakoyto', 'Chel', 26, 4, 4);

INSERT INTO persons (first_name, last_name, age, house_id, flat_id)
VALUES ('Valentina', 'Ivanovna', 70, 3, 3);

INSERT INTO persons (first_name, last_name, age, house_id, flat_id)
VALUES ('Sergei', 'Ekmundovich', 41, 2, 2);

INSERT INTO persons (first_name, last_name, age, house_id, flat_id)
VALUES ('Natalia', 'Validolovna', 64, 1, 2);

INSERT INTO persons (first_name, last_name, age, house_id, flat_id)
VALUES ('James', 'Keksikov', 18, 1, 1);


SELECT first_name, last_name, age FROM persons WHERE age > 50;

SELECT first_name, last_name, age, street, address FROM persons LEFT JOIN houses on houses.id = persons.house_id WHERE street = 'Bogdanovicha' AND address = '25';

SELECT first_name, last_name, age, street, rooms_amount
FROM persons 
JOIN houses on houses.id = persons.house_id 
JOIN flats on flats.id = persons.flat_id
WHERE street = 'Plehanova' AND rooms_amount = 2;

SELECT first_name, last_name, age, street, flat_number
FROM persons 
JOIN houses on houses.id = persons.house_id 
JOIN flats on flats.id = persons.flat_id
WHERE flat_number = 10;
