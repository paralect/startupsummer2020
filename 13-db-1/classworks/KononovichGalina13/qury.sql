SELECT * FROM person WHERE age > 50;


SELECT first_name, last_name  FROM person INNER JOIN house ON person.id = house.id AND street = 'bogdanovicha' AND address = '25';

SELECT *  FROM person INNER JOIN house ON person.id = house.id AND street = 'bogdanovicha' AND address = '25';

SELECT person.id, person.first_name, flat.rooms_amount, house.street FROM person 
		INNER JOIN flat ON person.id = flat.id 
        INNER JOIN house ON person.house_id = house.id WHERE rooms_amount = 2 AND house.street='plexanova';
                      
SELECT * FROM person INNER JOIN house ON person.id = house.id and address = '10';