-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 17, 2022 at 10:54 AM
-- Server version: 10.6.9-MariaDB
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitnami_wordpress`
--

-- --------------------------------------------------------

--
-- Table structure for table `calculatorlogs`
--

CREATE TABLE `calculatorlogs` (
  `id` int(11) NOT NULL,
  `name` varchar(535) NOT NULL,
  `avatar` text NOT NULL,
  `score` varchar(535) NOT NULL,
  `ip` varchar(535) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `calculatorlogs`
--

INSERT INTO `calculatorlogs` (`id`, `name`, `avatar`, `score`, `ip`) VALUES
(1, 'PoisonReducer', 'avatarImg', '123.00', '115.186.168.225'),
(2, 'Recycleman', '', '4.51', '115.186.168.225'),
(3, 'GarbadeDestroyer', '', '1.25', '115.186.168.225'),
(4, 'PoisonReducer', '', '0.05', '101.50.103.187'),
(5, 'PoisonReducer', '', '3.76', '101.50.103.187'),
(6, 'HydroStrainer', '', '1.57', '202.73.30.62'),
(7, 'HydroStrainer', '', '10.00', '202.73.30.62'),
(8, 'ClassifierGirl', '', '1111.05', '202.73.30.62'),
(9, 'ClassifierGirl', '', '1388.75', '202.73.30.62'),
(10, 'TrashIncinerator', '', '5.85', '49.127.68.41'),
(11, 'ClassifierGirl', '', '0.41', '2001:8004:1520:35a0:dd28:ea7:42fb:f6ff'),
(12, 'ClassifierGirl', '', '1.88', '2001:8004:1520:35a0:dd28:ea7:42fb:f6ff'),
(13, 'ClassifierGirl', '', '1.88', '2001:8004:1520:35a0:dd28:ea7:42fb:f6ff'),
(14, 'ClassifierGirl', '', '1.88', '2001:8004:1520:35a0:dd28:ea7:42fb:f6ff'),
(15, 'ClassifierGirl', '', '1.88', '2001:8004:1520:35a0:dd28:ea7:42fb:f6ff'),
(16, 'HydroStrainer', '', '1.00', '118.138.54.114'),
(17, 'ClassifierGirl', '', '1.00', '118.138.54.114'),
(18, 'ClassifierGirl', '', '7.94', '118.138.54.114'),
(19, 'ClassifierGirl', '', '1.00', '118.138.54.114'),
(20, 'HydroStrainer', '', '104.36', '144.168.56.126'),
(21, 'HydroStrainer', '', '104.36', '144.168.56.126'),
(22, 'PoisonReducer', 'https://wastodo.me/wp-content/uploads/2022/10/kid_1-removebg-preview.png', '250.64', '2407:d000:a:f4cf:c8f:36d2:2812:300a'),
(23, 'PoisonReducer', 'https://wastodo.me/wp-content/uploads/2022/10/kid_4-removebg-preview.png', '1.88', '2407:d000:a:f4cf:5802:dec6:a33e:4597'),
(24, 'Name 3', 'null', '112.50', '144.168.56.126'),
(25, 'HydroStrainer', 'https://wastodo.me/wp-content/uploads/2022/10/kid_1-removebg-preview.png', '115.44', '58.110.135.6'),
(26, 'ClassifierGirl', 'https://wastodo.me/wp-content/uploads/2022/10/kid_1-removebg-preview.png', '1.00', '43.225.100.178'),
(27, 'Name 3', 'https://wastodo.me/wp-content/uploads/2022/10/kid_1-removebg-preview.png', '1.00', '43.225.100.178'),
(28, 'PoisonReducer', 'https://wastodo.me/wp-content/uploads/2022/10/kid_4-removebg-preview.png', '12.00', '43.225.100.178'),
(29, 'ClassifierGirl', 'https://wastodo.me/wp-content/uploads/2022/10/kid_1-removebg-preview.png', '1.00', '43.225.100.178'),
(30, 'HydroStrainer', 'https://wastodo.me/wp-content/uploads/2022/10/kid_2-removebg-preview.png', '1100000.00', '43.225.100.178'),
(31, 'ClassifierGirl', 'https://wastodo.me/wp-content/uploads/2022/10/kid_3-removebg-preview.png', '1000.00', '43.225.100.178'),
(32, 'ClassifierGirl', 'https://wastodo.me/wp-content/uploads/2022/10/kid_3-removebg-preview.png', '11111.00', '43.225.100.178');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calculatorlogs`
--
ALTER TABLE `calculatorlogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calculatorlogs`
--
ALTER TABLE `calculatorlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
