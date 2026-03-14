
show databases;
create database libraryms_db;
use libraryms_db;
show tables;


CREATE TABLE `books` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `rating` int DEFAULT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



select * from libraryms_db.books;
#insert books...inserts 6 records
insert into books (id, title, author, rating, isbn) values (1,'Lean Software Development: An Agile Toolkit', 'Tom Poppendieck', 4,'9780320000000'),
 (2,'Scala in Action', 'Nilanjan Raychaudhuri', 3,'9781940000000'),
 (3,'Patterns of Software: Tales from the Software Community','Richard P. Gabriel',3,'9780200000000'),
 (4,'Anatomy Of LISP','Anatomy Of LISP', 4,'9780070000000'),
(5,'XML: Visual QuickStart Guide','Goldberg Kevin Howard' ,3,'9780320000000'),
 (6,'SQL Cookbook', 'Anthony Molinaro', 3,'9780600000000');

select * from books;


CREATE TABLE members (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    membership_date DATE,
    membership_type VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE loans (
    id BIGINT NOT NULL AUTO_INCREMENT,
    book_id BIGINT,
    member_id BIGINT,
    checkout_date DATE,
    due_date DATE,
    return_date DATE,
    PRIMARY KEY (id),
    CONSTRAINT fk_loans_book FOREIGN KEY (book_id) REFERENCES books(id),
    CONSTRAINT fk_loans_member FOREIGN KEY (member_id) REFERENCES members(id)
);
