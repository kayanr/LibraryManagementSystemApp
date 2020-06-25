
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

#creating table for the Library Management System's members
CREATE TABLE `lmsmembers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `phone_number` varchar(12) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from `lmsmembers`;

INSERT INTO `libraryms_db`.`lmsmembers`
(`id`,
`first_name`,
`last_name`,
`gender`,
`address`,
`city`,
`state`,
`postal_code`,
`phone_number`)  VALUES 
(1,'PENELOPE','GUINESS','Female','1005 BENEDICT CANYON DR','Franklin','PA','65213','627705991774'),
(2,'NICK','WAHLBERG','Male','115 MAIN STREET','Lancaster','PA','79388','911872220378'),
 (3,'ED','CHASE','Male','3160 AIRWAY AVE','Bethlehem','PA','94065','708403338270'),
 (4,'JENNIFER','DAVIS','Female','100 LANCASTER AVE','Chambersburg','PA','34021','440512153169'),
 (5,'JOHNNY','LOLLOBRIGIDA', 'Male','350 S BEVERLY DR','Easton','PA','47929','912257250465'),
 (6,'BETTE','NICHOLSON','Female','9601 WILSHIRE BLVD','Butler','PA','34689','489783829737'),
 (7,'GRACE','MOSTEL','Female','411 RANCH PARK PL','Connellsville','PA','3989','378318851631'),
 (8,'MATTHEW','JOHANSSON','Male','47 MySakila Drive','Arnold','PA','94399','680768868518'),
 (9,'JOE','SWANK','Male','28 MySQL Boulevard','Jeannette','PA','16744','42384721397'),
 (10,'CHRISTIAN','GABLE','Male','23 Workhaven Lane','Baldwin','PA','61117','471675840679'),
 (11,'ZERO','CAGE','Male','1411 Lillydale Drive','Johnstown','PA','48942','539758313890'),
 (12,'KARL','BERRY','Male','1913 Hanoi Way','Farrell','PA','76022','177727722820'),
 (13,'UMA','WOOD','Male','1121 Loja Avenue','Bellevue','PA','37359','675292816413'),
 (14,'VIVIEN','BERGEN','Female','692 Joliet Street','Beaver Falls','PA','23616','262076994845'),
 (15,'CUBA','OLIVIER','Male','1566 Inegl Manor','Duquesne','PA','94065','708403338270');

select * from `lmsmembers`;
