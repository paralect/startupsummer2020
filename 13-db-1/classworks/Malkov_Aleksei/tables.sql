CREATE TABLE flats (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rooms_amount int(11),
  flat_number int(11))
);

CREATE TABLE houses (
  id int NOT NULL PRIMARY KEY,
  street varchar(255),
  address varchar(255)
);

CREATE TABLE persons (
  id INT NOT NULL PRIMARY KEY,
  first_name varchar(50),
  last_name varchar(50),
  age INT(11),
  flat_id int(11) NOT NULL,
  house_id int(11) NOT NULL,
  FOREIGN KEY (flat_id) REFERENCES flats(id),
  FOREIGN KEY (house_id) REFERENCES houses(id)
);