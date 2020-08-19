USE flat_journal;

/* 1) */

INSERT INTO house (street, address)
VALUES ('Bogdanovicha', '25'), ('Plehanova', '30'), ('Odincova', '119');

INSERT INTO flat (rooms_amount, flat_number)
VALUES (2, 10), (1, 10), (3, 2), (9, 13);

INSERT INTO person (first_name, last_name, age, flat_id, house_id)
VALUES ('vasya', 'ivanov', 30, 1, 1), ('ivan', 'vasya', 50, 2, 1), ('leha', 'alexey', 99, 1, 2), ('egor', 'elaray', 25, 4, 2);


/* 2) */
SELECT *
FROM person
WHERE age > 50;

/* 3) */
SELECT *
FROM person
	INNER JOIN house
    	ON person.house_id = house.id 
WHERE house.street = 'Bogdanovicha' AND house.address = '25';

/* 4) */
SELECT *
FROM person
	INNER JOIN house
    	ON person.house_id = house.id 
	INNER JOIN flat
    	ON person.flat_id = flat.id
WHERE house.street = 'Plehanova' AND flat.rooms_amount = 2;

/* 5) */
SELECT *
FROM person
	INNER JOIN flat
    	ON person.flat_id = flat.id
WHERE flat.flat_number = 10
