USE flat_journal;

INSERT INTO flat VALUES (78, 2, 10), (18, 2, 42), (2, 2, 10), (3, 2, 333), (56, 2, 565);

INSERT INTO house VALUES (18, 'Plehanova', '119'), (3, 'Alohadance', '322'), (2, 'Bogdanovicha', '25'), (8, 'Miracle', '1337'), (1, 'Noone', '228');

INSERT INTO person VALUES (1, 'vasya', 'petrov', 22, 18, 18), (2, 'ilya', 'protsko', 19, 2, 18), (3, 'timur', 'ermakov', 19, 18, 2), (56, 'alexander', 'ermolaev', 18, 18, 2), (18, 'leha', 'belenko', 60, 56, 2);

SELECT * FROM person WHERE age > 50;

SELECT * FROM person LEFT JOIN house ON person.house_id = house.id WHERE house.street = 'Bogdanovicha' AND house.address = '25';

SELECT * FROM person
	LEFT JOIN house
    	ON person.house_id = house.id
    LEFT JOIN flat
    	ON person.flat_id = flat.id
WHERE flat.rooms_amount = 2 AND house.street = 'Plehanova';

SELECT * FROM person LEFT JOIN flat ON person.flat_id = flat.id WHERE flat.flat_number = 10;
