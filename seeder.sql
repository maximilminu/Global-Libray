-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2024 a las 00:30:21
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

--
-- Base de datos: `GlobalLibrary`
--

-- --------------------------------------------------------

--
-- ESTRUCTURA PARA LA TABLA DE AUTORES
--
CREATE TABLE `authors` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `surname` varchar(50) NOT NULL,
    `legal_id` varchar(50) NOT NULL,
    `nationality` varchar(50) NOT NULL,
    UNIQUE(`legal_id`),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- ESTRUCTURA PARA LA TABLA DE EDITORIALES
--
CREATE TABLE `publishers` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `address` varchar(255) NOT NULL,
    `tax_number` varchar(50) NOT NULL,
    UNIQUE(`tax_number`),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


--
-- ESTRUCTURA PARA LA TABLA DE LIBROS
--
CREATE TABLE `books` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `id_publisher` INT(11) NOT NULL ,
    `title` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `release_date` DATE NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_publisher`) REFERENCES `publishers`(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- -- --------------------------------------------------------

CREATE TABLE `books_authors` (
    `id_book` int(11) NOT NULL,
    `id_author` int(11) NOT NULL,
    PRIMARY KEY (`id_book`, `id_author`),
    FOREIGN KEY (`id_book`) REFERENCES `books` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (`id_author`) REFERENCES `authors` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO `authors` (`name`, `surname`, `legal_id`, `nationality`) VALUES
('Kirsten', 'Dunst', '38612437', 'Argentina'),
('Chris', 'Evans', '40298765', 'USA'),
('Emma', 'Watson', '29837645', 'UK'),
('Daniel', 'Radcliffe', '30928756', 'UK'),
('Scarlett', 'Johansson', '31587429', 'USA'),
('Brad', 'Pitt', '42875619', 'USA'),
('Angelina', 'Jolie', '32847561', 'USA'),
('Leonardo', 'DiCaprio', '49876234', 'USA'),
('Natalie', 'Portman', '35487621', 'Israel'),
('Tom', 'Hanks', '43218765', 'USA'),
('Meryl', 'Streep', '38976254', 'USA'),
('Jennifer', 'Lawrence', '39874652', 'USA'),
('Johnny', 'Depp', '37654219', 'USA'),
('Anne', 'Hathaway', '40927654', 'USA'),
('George', 'Clooney', '38765129', 'USA'),
('Julia', 'Roberts', '39872645', 'USA'),
('Will', 'Smith', '37456281', 'USA'),
('Matt', 'Damon', '40213876', 'USA'),
('Sandra', 'Bullock', '32987456', 'USA'),
('Ryan', 'Reynolds', '39872654', 'Canada'),
('Reese', 'Witherspoon', '41987653', 'USA'),
('Hugh', 'Jackman', '35489761', 'Australia'),
('Nicole', 'Kidman', '37856294', 'Australia'),
('Russell', 'Crowe', '40927385', 'Australia'),
('Cate', 'Blanchett', '38765421', 'Australia'),
('Heath', 'Ledger', '40123756', 'Australia'),
('Margot', 'Robbie', '39284756', 'Australia'),
('Chris', 'Hemsworth', '40827196', 'Australia'),
('Liam', 'Hemsworth', '39847162', 'Australia'),
('Hugo', 'Weaving', '37485961', 'Australia'),
('Geoffrey', 'Rush', '38746521', 'Australia'),
('Mel', 'Gibson', '38974652', 'Australia'),
('Guy', 'Pearce', '39876254', 'Australia'),
('Orlando', 'Bloom', '34987652', 'UK'),
('Keira', 'Knightley', '39847216', 'UK'),
('Kate', 'Winslet', '40927635', 'UK'),
('Jude', 'Law', '38746215', 'UK'),
('Eddie', 'Redmayne', '39847265', 'UK'),
('Tom', 'Hardy', '37652198', 'UK'),
('Benedict', 'Cumberbatch', '40923756', 'UK'),
('Idris', 'Elba', '39847265', 'UK'),
('Michael', 'Fassbender', '37486295', 'Ireland'),
('Colin', 'Farrell', '39846257', 'Ireland'),
('Liam', 'Neeson', '39875246', 'Ireland'),
('Pierce', 'Brosnan', '40927658', 'Ireland'),
('Saoirse', 'Ronan', '38746295', 'Ireland'),
('Cillian', 'Murphy', '39847265', 'Ireland'),
('Aidan', 'Turner', '38746521', 'Ireland'),
('Brendan', 'Gleeson', '39874256', 'Ireland');

  
INSERT INTO `publishers` (`name`, `address`, `tax_number`) VALUES
('Penguin Random House', '1745 Broadway, New York, NY 10019, USA', '1234567890'),
('HarperCollins', '195 Broadway, New York, NY 10007, USA', '2345678901'),
('Simon & Schuster', '1230 Avenue of the Americas, New York, NY 10020, USA', '3456789012'),
('Hachette Livre', '58 Rue Jean Bleuzen, 92170 Vanves, France', '4567890123'),
('Macmillan Publishers', '120 Broadway, New York, NY 10271, USA', '5678901234'),
('Scholastic', '557 Broadway, New York, NY 10012, USA', '6789012345'),
('Pearson', '80 Strand, London WC2R 0RL, UK', '7890123456'),
('Wiley', '111 River Street, Hoboken, NJ 07030, USA', '8901234567'),
('Springer Nature', 'Tiergartenstrasse 17, 69121 Heidelberg, Germany', '9012345678'),
('Oxford University Press', 'Great Clarendon Street, Oxford OX2 6DP, UK', '0123456789'),
('Cambridge University Press', 'University Printing House, Shaftesbury Road, Cambridge CB2 8BS, UK', '1234509876'),
('Bloomsbury Publishing', '50 Bedford Square, London WC1B 3DP, UK', '2345610987'),
('Houghton Mifflin Harcourt', '125 High Street, Boston, MA 02110, USA', '3456721098'),
('Pan Macmillan', '20 New Wharf Road, London N1 9RR, UK', '4567832109'),
('Random House', '1745 Broadway, New York, NY 10019, USA', '5678943210'),
('SAGE Publications', '2455 Teller Road, Thousand Oaks, CA 91320, USA', '6789054321'),
('Elsevier', '1600 John F. Kennedy Blvd, Suite 1800, Philadelphia, PA 19103, USA', '7890165432'),
('John Benjamins Publishing', 'Klarestraat 4, 26, 2011 VC Amsterdam, Netherlands', '8901276543'),
('Cengage Learning', '200 Pier 4 Blvd, Suite 400, Boston, MA 02210, USA', '9012387654'),
('Thomson Reuters', '30 South Colonnade, Canary Wharf, London E14 5EP, UK', '0123498765');

INSERT INTO `books` (`id_publisher`,`title`,`category`,`price`,`release_date`,`description`) VALUES
(1,'maxibook', 'cifi', 100.20, '1994-10-12', 'alto libro'),
(12,'otromaxibook', 'cifi', 200.20, '1994-10-12', 'otro alto libro'),
(13,'The Great Gatsby', 'classic', 10.99, '1925-04-10', 'A novel set in the Jazz Age'),
(14,'To Kill a Mockingbird', 'classic', 7.99, '1960-07-11', 'A novel about racial injustice'),
(15,'1984', 'dystopian', 6.99, '1949-06-08', 'A dystopian social science fiction novel'),
(16,'Pride and Prejudice', 'romance', 5.99, '1813-01-28', 'A romantic novel of manners'),
(17,'Moby-Dick', 'adventure', 8.99, '1851-10-18', 'A novel about the voyage of the whaling ship Pequod'),
(18,'War and Peace', 'historical', 12.99, '1869-01-01', 'A novel that chronicles the French invasion of Russia'),
(19,'The Catcher in the Rye', 'classic', 6.99, '1951-07-16', 'A novel about teenage rebellion'),
(10,'The Hobbit', 'fantasy', 8.99, '1937-09-21', 'A fantasy novel and children\'s book'),
(2,'Harry Potter and the Sorcerer\'s Stone', 'fantasy', 10.99, '1997-06-26', 'The first novel in the Harry Potter series'),
(3,'The Lord of the Rings', 'fantasy', 15.99, '1954-07-29', 'An epic high-fantasy novel'),
(4,'Alice\'s Adventures in Wonderland', 'fantasy', 4.99, '1865-11-26', 'A fantasy novel about a girl named Alice'),
(5,'The Adventures of Huckleberry Finn', 'adventure', 6.99, '1884-12-10', 'A novel about the adventures of a boy named Huck'),
(6,'Little Women', 'classic', 7.99, '1868-09-30', 'A novel about the lives of four sisters'),
(7,'Jane Eyre', 'romance', 6.99, '1847-10-16', 'A novel about the life of Jane Eyre'),
(8,'Brave New World', 'dystopian', 7.99, '1932-08-30', 'A dystopian social science fiction novel'),
(9,'Fahrenheit 451', 'dystopian', 6.99, '1953-10-19', 'A novel about a future society where books are banned'),
(11,'The Grapes of Wrath', 'classic', 9.99, '1939-04-14', 'A novel about the Great Depression'),
(20,'Dracula', 'horror', 5.99, '1897-05-26', 'A Gothic horror novel about Count Dracula'),
(1,'Frankenstein', 'horror', 5.99, '1818-01-01', 'A novel about a scientist who creates a monster'),
(2,'The Odyssey', 'classic', 7.99, '800-01-01', 'An ancient Greek epic poem'),
(3,'The Iliad', 'classic', 7.99, '750-01-01', 'An ancient Greek epic poem'),
(4,'Wuthering Heights', 'romance', 6.99, '1847-12-01', 'A novel about the intense and destructive love between Catherine Earnshaw and Heathcliff'),
(5,'Great Expectations', 'classic', 6.99, '1861-08-01', 'A novel about the growth and personal development of an orphan named Pip'),
(6,'The Picture of Dorian Gray', 'classic', 6.99, '1890-06-20', 'A novel about a man who remains young while his portrait ages'),
(7,'The Count of Monte Cristo', 'adventure', 9.99, '1844-08-28', 'A novel about a man who is wrongfully imprisoned and seeks revenge'),
(8,'Don Quixote', 'classic', 10.99, '1605-01-16', 'A novel about the adventures of a nobleman who reads too many chivalric romances'),
(9,'Les Misérables', 'historical', 11.99, '1862-01-01', 'A novel about the lives of several characters in post-revolutionary France'),
(10,'Crime and Punishment', 'classic', 7.99, '1866-01-01', 'A novel about a young man who commits a murder and the mental torment he suffers'),
(11,'The Brothers Karamazov', 'classic', 8.99, '1880-01-01', 'A novel about the lives of three brothers and their father'),
(12,'Madame Bovary', 'classic', 6.99, '1857-01-01', 'A novel about the life of a doctor\'s wife who has adulterous affairs and lives beyond her means'),
(13,'Anna Karenina', 'classic', 9.99, '1878-01-01', 'A novel about a woman who has an affair and the consequences it brings'),
(14,'The Divine Comedy', 'classic', 12.99, '1320-01-01', 'An epic poem about the journey of a man through Hell, Purgatory, and Paradise'),
(15,'In Search of Lost Time', 'classic', 15.99, '1913-11-01', 'A novel about the narrator\'s experiences growing up, participating in society, falling in love, and learning about art'),
(16,'One Hundred Years of Solitude', 'magical realism', 8.99, '1967-06-05', 'A novel about the Buendía family over seven generations'),
(17,'Lolita', 'classic', 7.99, '1955-09-15', 'A novel about a middle-aged professor who becomes obsessed with a twelve-year-old girl'),
(18,'The Stranger', 'classic', 5.99, '1942-01-01', 'A novel about an emotionally detached man who commits a murder'),
(19,'The Trial', 'classic', 6.99, '1925-04-26', 'A novel about a man who is arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor to the reader'),
(20,'The Sun Also Rises', 'classic', 7.99, '1926-10-22', 'A novel about a group of expatriates in Europe after World War I'),
(1,'For Whom the Bell Tolls', 'classic', 8.99, '1940-10-21', 'A novel about the Spanish Civil War'),
(2,'The Old Man and the Sea', 'classic', 5.99, '1952-09-01', 'A novel about an aging fisherman who struggles with a giant marlin far out in the Gulf Stream'),
(3,'Gone with the Wind', 'historical', 9.99, '1936-06-30', 'A novel about the American South during the Civil War and Reconstruction'),
(4,'The Sound and the Fury', 'classic', 7.99, '1929-10-07', 'A novel about the decline of the Compson family'),
(5,'Light in August', 'classic', 7.99, '1932-10-06', 'A novel about several characters in the American South'),
(6,'Catch-22', 'classic', 8.99, '1961-11-10', 'A novel about the absurdities of war and bureaucracy'),
(7,'Slaughterhouse-Five', 'classic', 6.99, '1969-03-31', 'A novel about the bombing of Dresden in World War II'),
(8,'The Grapes of Wrath', 'classic', 8.99, '1939-04-14', 'A novel about the hardships of the Great Depression'),
(9,'East of Eden', 'classic', 9.99, '1952-09-19', 'A novel about the lives of two families in the Salinas Valley, California'),
(10,'Of Mice and Men', 'classic', 5.99, '1937-11-23', 'A novel about two displaced migrant ranch workers during the Great Depression'),
(11,'A Farewell to Arms', 'classic', 7.99, '1929-09-27', 'A novel about a love affair between an American ambulance driver in the Italian army and a British nurse'),
(12,'The Bell Jar', 'classic', 6.99, '1963-01-14', 'A novel about a young woman\'s mental breakdown and recovery'),
(13,'On the Road', 'classic', 7.99, '1957-09-05', 'A novel about the travels of the narrator and his friends across the United States'),
(14,'Invisible Man', 'classic', 8.99, '1952-04-14', 'A novel about an African American man\'s social invisibility'),
(15,'Beloved', 'classic', 7.99, '1987-09-16', 'A novel about a runaway slave and her haunting by her dead daughter'),
(16,'Their Eyes Were Watching God', 'classic', 6.99, '1937-09-18', 'A novel about a woman\'s journey to find her own identity'),
(17,'Native Son', 'classic', 7.99, '1940-03-01', 'A novel about the social conditions that produce a young African American man who commits a murder'),
(18,'The Road', 'dystopian', 7.99, '2006-09-26', 'A novel about a father and son\'s journey through a post-apocalyptic world'),
(19,'No Country for Old Men', 'thriller', 7.99, '2005-07-19', 'A novel about a drug deal gone wrong in Texas'),
(20,'The Catcher in the Rye', 'classic', 6.99, '1951-07-16', 'A novel about teenage rebellion and alienation'),
(1,'Lord of the Flies', 'classic', 6.99, '1954-09-17', 'A novel about a group of boys stranded on an uninhabited island'),
(2,'Animal Farm', 'dystopian', 5.99, '1945-08-17', 'A novel about a group of farm animals who rebel against their human farmer'),
(3,'The Hobbit', 'fantasy', 8.99, '1937-09-21', 'A fantasy novel about the journey of Bilbo Baggins'),
(4,'The Lord of the Rings', 'fantasy', 15.99, '1954-07-29', 'An epic high-fantasy novel'),
(5,'The Silmarillion', 'fantasy', 10.99, '1977-09-15', 'A collection of mythopoeic stories'),
(6,'The Chronicles of Narnia', 'fantasy', 20.99, '1956-10-16', 'A series of seven fantasy novels'),
(7,'The Name of the Wind', 'fantasy', 9.99, '2007-03-27', 'A fantasy novel about the journey of a magically gifted young man'),
(8,'The Wise Man\'s Fear', 'fantasy', 10.99, '2011-03-01', 'The second book in The Kingkiller Chronicle series'),
(9,'The Eye of the World', 'fantasy', 8.99, '1990-01-15', 'The first book in The Wheel of Time series'),
(10,'A Game of Thrones', 'fantasy', 9.99, '1996-08-06', 'The first book in A Song of Ice and Fire series'),
(11,'A Clash of Kings', 'fantasy', 9.99, '1998-11-16', 'The second book in A Song of Ice and Fire series'),
(12,'A Storm of Swords', 'fantasy', 9.99, '2000-08-08', 'The third book in A Song of Ice and Fire series'),
(13,'A Feast for Crows', 'fantasy', 9.99, '2005-10-17', 'The fourth book in A Song of Ice and Fire series'),
(14,'A Dance with Dragons', 'fantasy', 9.99, '2011-07-12', 'The fifth book in A Song of Ice and Fire series'),
(15,'Good Omens', 'fantasy', 7.99, '1990-05-01', 'A comedic novel about the apocalypse'),
(16,'American Gods', 'fantasy', 8.99, '2001-06-19', 'A novel about the conflict between the old gods and the new gods in America'),
(17,'Neverwhere', 'fantasy', 7.99, '1996-09-16', 'A novel about a man who discovers a secret world beneath London'),
(18,'The Ocean at the End of the Lane', 'fantasy', 7.99, '2013-06-18', 'A novel about a man who returns to his hometown and remembers strange events from his childhood'),
(19,'Stardust', 'fantasy', 6.99, '1999-02-01', 'A novel about a young man who ventures into a magical realm to retrieve a fallen star'),
(20,'Coraline', 'fantasy', 5.99, '2002-08-04', 'A novel about a girl who discovers a parallel world behind a secret door in her new home'),
(1,'The Graveyard Book', 'fantasy', 6.99, '2008-09-30', 'A novel about a boy raised by ghosts in a graveyard'),
(2,'Anansi Boys', 'fantasy', 7.99, '2005-09-20', 'A novel about the sons of the trickster god Anansi'),
(3,'The Night Circus', 'fantasy', 8.99, '2011-09-13', 'A novel about a magical competition between two young illusionists'),
(4,'The Light Between Oceans', 'historical', 7.99, '2012-07-31', 'A novel about a lighthouse keeper and his wife who rescue a baby from a drifting boat'),
(5,'All the Light We Cannot See', 'historical', 8.99, '2014-05-06', 'A novel about a blind French girl and a German boy whose paths collide in occupied France during World War II'),
(6,'The Book Thief', 'historical', 7.99, '2005-03-14', 'A novel about a young girl living in Nazi Germany who steals books and shares them with others'),
(7,'The Help', 'historical', 8.99, '2009-02-10', 'A novel about African American maids working in white households in Jackson, Mississippi, during the early 1960s'),
(8,'Water for Elephants', 'historical', 7.99, '2006-05-26', 'A novel about a young man who joins a traveling circus during the Great Depression'),
(9,'The Kite Runner', 'historical', 7.99, '2003-05-29', 'A novel about the friendship between a wealthy boy and the son of his father\'s servant in Afghanistan'),
(10,'A Thousand Splendid Suns', 'historical', 8.99, '2007-05-22', 'A novel about the lives of two women in Afghanistan'),
(11,'Memoirs of a Geisha', 'historical', 8.99, '1997-09-27', 'A novel about the life of a geisha in Kyoto, Japan, before, during, and after World War II'),
(12,'The Guernsey Literary and Potato Peel Pie Society', 'historical', 7.99, '2008-07-29', 'A novel about the residents of the island of Guernsey during the German occupation'),
(13,'The Nightingale', 'historical', 8.99, '2015-02-03', 'A novel about two sisters in France during World War II'),
(14,'The Zookeeper\'s Wife', 'historical', 7.99, '2007-09-04', 'A novel about the keepers of the Warsaw Zoo who helped save hundreds of people during the Holocaust'),
(15,'Orphan Train', 'historical', 7.99, '2013-04-02', 'A novel about the lives of two women connected by their shared experience as orphans'),
(16,'Lilac Girls', 'historical', 8.99, '2016-04-05', 'A novel about the lives of three women during World War II'),
(17,'The Paris Wife', 'historical', 7.99, '2011-02-22', 'A novel about the marriage of Ernest Hemingway and his first wife, Hadley Richardson'),
(18,'The Goldfinch', 'fiction', 9.99, '2013-09-23', 'A novel about a boy who survives an explosion at an art museum and steals a painting'),
(19,'The Underground Railroad', 'historical', 8.99, '2016-08-02', 'A novel about a young slave who escapes from a plantation in Georgia'),
(20,'The Girl on the Train', 'thriller', 8.99, '2015-01-13', 'A psychological thriller about a woman who becomes entangled in a missing person investigation');

INSERT INTO `books_authors` (`id_book`, `id_author`) VALUES
(1,1), (2,2), (3,3), (4,4), (5,5), (6,6), (7,7), (8,8), (9,9), (10,10), (11,11), (12,12), (13,13), (14,14), (15,15), (16,16), (17,17), (18,18), (19,19), (20,20), (21,21), (22,22), (23,23), (24,24), (25,25), (26,26), (27,27), (28,28), (29,29), (30,30), (31,31), (32,32), (33,33), (34,34), (35,35), (36,36), (37,37), (38,38), (39,39), (40,40), (41,41), (42,42), (43,43), (44,44), (45,45), (46,46), (47,47), (48,48), (49,49), (50,49), (51,1), (52,2), (53,3), (54,4), (55,5), (56,6), (57,7), (58,8), (59,9), (60,10), (61,11), (62,12), (63,13), (64,14), (65,15), (66,16), (67,17), (68,18), (69,19), (70,20), (71,21), (72,22), (73,23), (74,24), (75,25), (76,26), (77,27), (78,28), (79,29), (80,30), (81,31), (82,32), (83,33), (84,34), (85,35), (86,36), (87,37), (88,38), (89,39), (90,40), (91,41), (92,42), (93,43), (94,44), (95,45), (96,46), (97,47), (98,48), (99,49), (100,49), (1,11), (2,21), (3,13), (4,14), (5,15), (6,16), (7,17), (8,18), (9,19), (10,40), (11,41), (12,42), (13,43), (14,44), (15,45), (16,46), (17,47), (18,48), (19,49), (20,40), (21,41), (22,42), (23,43), (24,44), (25,45), (26,46), (27,47), (28,48), (29,49), (30,40), (31,41), (32,42), (33,43), (34,44), (35,45), (36,46), (37,47), (38,48), (39,49), (40,30), (41,31), (42,32), (43,33), (44,34), (45,35), (46,36), (47,37), (48,38), (49,39), (50,30), (51,18), (52,18), (53,15), (54,15), (55,15), (56,15), (57,18), (58,18), (59,18), (60,28), (61,28), (62,28), (63,28), (64,48), (65,48), (66,48), (67,48), (68,38), (69,38), (70,38), (71,38), (72,19), (73,19), (74,19), (75,19), (76,14), (77,14), (78,14), (79,14), (80,23), (81,23), (82,23), (83,23), (84,25), (85,25), (86,25), (87,25), (88,42), (89,42), (90,42), (91,42), (92,33), (93,33), (94,33), (95,33), (96,22), (97,22), (98,22), (99,22), (100,17);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;