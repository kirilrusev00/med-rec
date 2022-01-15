SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS medrec DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE medrec;

CREATE TABLE medicines (
  `medicine_id` int(40) NOT NULL,
  `brand_name` varchar(80) NOT NULL,
  `generic_name` varchar(80) DEFAULT NULL,
  `substance_name` text,
  `manufacturer_name` varchar(80) DEFAULT NULL,
  `dosage_form` varchar(50) NOT NULL,
  `route` varchar(50) NOT NULL,
  `marketing_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO medicines (medicine_id, brand_name, generic_name, substance_name, manufacturer_name, dosage_form, route, marketing_status) VALUES
('ALEVE-D SINUS & COLD', 'NULL', 'NULL', 'NULL', 'TABLET, EXTENDED RELEAS', 'ORAL', 'Over-the-counter'),
('INFANTS ADVIL', 'IBUPROFEN', 'IBUPROFEN', 'GlaxoSmithKline Consumer Healthcare Holdings (US) LLC', 'SUSPENSION/DROPS', 'ORAL', 'Over-the-counter'),
('HYDROCODONE BITARTRATE AND ACETAMINOPHEN', 'NULL', 'NULL', 'NULL', 'TABLET', 'ORAL', 'Discontinued'),
('ASPIRIN AND EXTENDED - RELEASE DIPYRIDAMOLE CAPSULES, 25 MG / 200 MG', 'ASPIRIN AND EXTENDED - RELEASE DIPYRIDAMOLE', 'ASPIRIN, DIPYRIDAMOLE', 'Par Pharmaceutical, Inc.', 'CAPSULE, EXTENDED RELEASE', 'ORAL', 'Prescription'),
('NEXIUM 24HR', 'ESOMEPRAZOLE MAGNESIUM', 'ESOMEPRAZOLE MAGNESIUM', 'GlaxoSmithKline Consumer Healthcare Holdings (US) LLC', 'TABLET, DELAYED RELEASE', 'ORAL', 'Over-the-counter'),
('MINIRIN', 'NULL', 'NULL', 'NULL', 'SPRAY, METERED', 'NASAL', 'Discontinued'),
('TYLENOL W/ CODEINE NO. 4', 'NULL', 'NULL', 'NULL', 'CAPSULE', 'ORAL', 'Discontinued'),
('REMERONSOLTAB', 'MIRTAZAPINE', 'MIRTAZAPINE', 'Organon LLC, Organon USA Inc.', 'TABLET, ORALLY DISINTEGRATING', 'ORAL', 'Prescription'),
('TOPAMAX', 'TOPIRAMATE', 'TOPIRAMATE', 'Janssen Pharmaceuticals, Inc.', 'TABLET', 'ORAL', 'Prescription'),
('PREVACID SOLUTAB', 'LANSOPRAZOLE', 'LANSOPRAZOLE', 'Takeda Pharmaceuticals America, Inc.', 'TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE', 'ORAL', 'Prescription');

CREATE TABLE pharmacy_medicines (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pharmacy_medicines (id, user_id, medicine_id) VALUES
(1, 7, 1),
(2, 7, 3),
(3, 7, 4),
(4, 7, 5),
(5, 7, 7),
(6, 7, 9),
(7, 7, 10),
(8, 8, 2),
(9, 8, 3),
(10, 8, 4),
(11, 8, 6),
(12, 8, 7),
(13, 8, 8),
(14, 8, 9),
(15, 8, 10),
(16, 9, 2),
(17, 9, 3),
(18, 9, 5),
(19, 9, 6),
(20, 9, 7),
(21, 9, 8),
(22, 9, 9),
(23, 9, 10);

CREATE TABLE qr_codes (
  `qr_id` int(11) NOT NULL,
  `filename` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO qr_codes (qr_id, filename, user_id) VALUES
('minirin.png', 1),
('nexium.png', 2),
('nuelin.png', 3),
('panadeine.png', 4),
('seretide.png', 5),
('transmiderm-nitro.png', 6);

CREATE TABLE users (
  `user_id` int(40) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `address` text,
  `email` varchar(20) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `type` enum('patient','pharmacy') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users (user_id, username, `password`, `name`, `lastname`, address, email, token, `type`) VALUES
('jautumn121', 'j121', 'Julia', 'Autumn', NULL, 'julia_autumn@gmail.c', NULL, 'patient'),
('psmith', 'ps123', 'Paul', 'Smith', NULL, 'paul_smith123@gmail.', NULL, 'patient'),
('zking', 'the_king9090', 'Zoe', 'King', NULL, 'zoe_king@gmail.com', NULL, 'patient'),
('esmith', 'smith123', 'Emma', 'Smith', NULL, 'emma_smith89@gmail.c', NULL, 'patient'),
('jsmith', 'jking90', 'Jenny', 'Smith', NULL, 'jen_smith@gmail.com', NULL, 'patient'),
('esolar', 'solarium151', 'Emily', 'Solar', NULL, 'em_solar@gmail.com', NULL, 'patient'),
('mareshki', 'mareski121', 'Mareshki', NULL, 'ul. "Nikola Gabrovski" 104', 'mareshki@gmail.com', NULL, 'pharmacy'),
('subra', 'subra454', 'Subra', NULL, 'bulevard „Doctor G. M. Dimitrov“ 77', 'subra@gmail.com', NULL, 'pharmacy'),
('remedium', 'rem1231', 'Remedium', NULL, 'ulitsa "Doctor Yordan Yosifov" 4', 'remedium@gmail.com', NULL, 'pharmacy');

ALTER TABLE medicines
  ADD PRIMARY KEY (`medicine_id`);

ALTER TABLE pharmacy_medicines
  ADD PRIMARY KEY (`id`),
  ADD KEY `medicine_foreign_key` (`medicine_id`),
  ADD KEY `user_qr_foreign_key` (`user_id`);

ALTER TABLE qr_codes
  ADD PRIMARY KEY (`qr_id`);

ALTER TABLE users
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username_unique` (`username`);

ALTER TABLE medicines
  MODIFY `medicine_id` int(40) NOT NULL AUTO_INCREMENT;

ALTER TABLE pharmacy_medicines
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE qr_codes
  MODIFY `qr_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE users
  MODIFY `user_id` int(40) NOT NULL AUTO_INCREMENT;

ALTER TABLE pharmacy_medicines
  ADD CONSTRAINT `medicine_foreign_key` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`medicine_id`),
  ADD CONSTRAINT `user_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_qr_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
