
show databases;
create database lms_db;
use lms_db;
show tables;

select * from books;
#drop table books;

CREATE TABLE books(
  id        bigint NOT NULL AUTO_INCREMENT, 
  title          VARCHAR(255) NOT NULL, 
  rating         int, 
  isbn           VARCHAR(13) NULL, 
  
  PRIMARY KEY(id)
 
);

-- books
insert into books (title,rating,isbn) values ('Lean Software Development: An Agile Toolkit', 4,'9780320000000');
insert into books (title,rating,isbn) values ('Scala in Action', 3,'9781940000000');
insert into books (title,rating,isbn) values ('Patterns of Software: Tales from the Software Community',3,'9780200000000');
insert into books (title,rating,isbn) values ('Anatomy Of LISP',4,'9780070000000');
insert into books (title,rating,isbn) values ('XML: Visual QuickStart Guide',3,'9780320000000');
insert into books (title,rating,isbn) values ('SQL Cookbook',3,'9780600000000');

select * from books;
