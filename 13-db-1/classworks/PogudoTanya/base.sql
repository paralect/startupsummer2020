USE flat_journal;

INSERT INTO flat (rooms_amount,flat_number) VALUES(1, 10),(2, 133),(3, 133),(2, 10);
INSERT INTO house (street,address) VALUES('Plehanova', 'Bagdanovicha 13'),('Plehanova', 'Bagdanovicha 25'),('Avtozavadskaya', 'Bagdanovicha 25'),('Mogilevskaya', 'Gagarina 7a');

INSERT INTO flat_journal.person (first_name,last_name,age,house_id,flat_id) VALUES('Pogudo', 'Tatyana',48,2,2),('Zhak', 'Victoriya',66,3,3),('Apanasyk', 'Kirill',89,4,3),('Lyzgin', 'Artyr',23,3,1);

SELECT first_name,last_name FROM flat_journal.person WHERE age>50;
SELECT first_name,last_name FROM flat_journal.person INNER JOIN flat_journal.house ON flat_journal.house.id = flat_journal.person.house_id WHERE address LIKE'Bagdanovicha 25';

SELECT first_name,last_name FROM flat_journal.person INNER JOIN flat_journal.house ON house.id = person.house_id  INNER JOIN flat ON person.flat_id = flat.id WHERE (street='Plehanova' AND rooms_amount=2);

SELECT * FROM flat_journal.person INNER JOIN flat_journal.house ON house.id = person.house_id  INNER JOIN flat ON person.flat_id = flat.id WHERE flat_number=10