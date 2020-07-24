CREATE DATABASE flat_journal;

CREATE TABLE flat_journal.flat (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  rooms_amount INT(11) NOT NULL,
  flat_number INT(11) NOT NULL
);

CREATE TABLE flat_journal.house (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE flat_journal.person (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT(11) NOT NULL,
  flat_id INT(11) UNSIGNED NOT NULL,
  house_id INT(11) UNSIGNED NOT NULL,
  FOREIGN KEY (flat_id) REFERENCES flat(id),
  FOREIGN KEY (house_id) REFERENCES house(id)
);
