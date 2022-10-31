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
-- Table structure for table `itemvalues`
--

CREATE TABLE `itemvalues` (
  `id` int(8) NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `itemvalues`
--

INSERT INTO `itemvalues` (`id`, `name`, `value`) VALUES
(1, 'Plastic bottle', 1.88),
(2, 'Plastic bags', 0.413),
(3, 'Food wrapper', 0.786),
(4, 'Yogurt containers', 0.786),
(5, 'Cotton swabs', 0.052),
(6, 'Detergent, cleaning products bottles', 6.266),
(7, 'Shampoo / shower gel / cosmetics bottles', 4.17),
(8, 'Refill packets', 0.89),
(9, 'Toothbrushes', 1.04),
(10, 'Toothpastes', 0.786),
(11, 'Take-away plastic box', 1.66),
(12, 'Take-away plastic cup', 1.04),
(13, 'Straws', 0.026),
(14, 'Disposable cutlery', 0.026),
(15, 'Plastic plates', 1.25),
(16, 'Toys, furnitures etc.', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `itemvalues`
--
ALTER TABLE `itemvalues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `itemvalues`
--
ALTER TABLE `itemvalues`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
