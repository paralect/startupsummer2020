INSERT INTO flats (id, rooms_amount, flat_number)
VALUES (1, 4, 10), (2, 2, 5), (3, 3, 40), (4, 2, 10);

INSERT INTO houses (id, street, address)
VALUES (1, 'Bogdanovicha', '25'), (4, 'Mihailova', '21'), (2, 'Plehanova', '33'), (3, 'Pushkina', '10');

INSERT INTO persons (first_name, last_name, age)
VALUES ('James', 'Keksikov', 18, 1, 1),
('Antoshka', 'Baklanov', 30, 5, 5), ('Kakoyto', 'Chel', 26, 4, 4),
('Valentina', 'Ivanovna', 70, 3, 3),
('Sergei', 'Ekmundovich', 41, 2, 2),
('Natalia', 'Validolovna', 64, 1, 2);


SELECT first_name, last_name, age FROM persons WHERE age > 50;

SELECT first_name, last_name, age, street, address FROM persons LEFT JOIN houses on houses.id = persons.house_id WHERE street = 'Bogdanovicha' AND address = '25';

SELECT first_name, last_name, age, street, rooms_amount
FROM persons 
LEFT JOIN houses on houses.id = persons.house_id 
LEFT JOIN flats on flats.id = persons.flat_id
WHERE street = 'Plehanova' AND rooms_amount = 2;

SELECT first_name, last_name, age, street, flat_number
FROM persons 
LEFT JOIN houses on houses.id = persons.house_id 
LEFT JOIN flats on flats.id = persons.flat_id
WHERE flat_number = 10;
