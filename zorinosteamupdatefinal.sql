-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2025 at 01:58 PM
-- Server version: 8.0.30
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zorinosteam`
--

-- --------------------------------------------------------

--
-- Table structure for table `log_table`
--

CREATE TABLE `log_table` (
  `id` int NOT NULL,
  `parameter_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `value` float(5,3) DEFAULT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plant_values`
--

CREATE TABLE `plant_values` (
  `id` int NOT NULL,
  `parameter_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `value` float NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plant_values`
--

INSERT INTO `plant_values` (`id`, `parameter_name`, `value`, `timestamp`) VALUES
(1, 'kelembapan_tanah', 700, '2025-01-29 20:05:42'),
(2, 'suhu_udara', 25, '2025-01-29 20:05:55'),
(3, 'penyiraman_air', 1, '2025-01-29 20:06:27'),
(4, 'penyiraman_air', 1, '2025-01-29 20:06:30'),
(5, 'penyiraman_air', 1, '2025-01-29 20:06:31'),
(6, 'penyiraman_air', 1, '2025-01-29 20:06:32'),
(7, 'penyiraman_air', 1, '2025-01-29 20:06:33'),
(8, 'penyiraman_air', 1, '2025-01-29 20:13:44'),
(9, 'penyiraman_air', 1, '2025-01-29 20:13:49'),
(10, 'penyiraman_air', 1, '2025-01-29 20:13:50'),
(11, 'suhu_udara', 30, '2025-01-29 20:14:01'),
(12, 'suhu_udara', 35, '2025-01-29 20:14:08'),
(13, 'penyiraman_air', 1, '2025-01-31 15:03:59'),
(14, 'penyiraman_air', 1, '2025-01-31 15:04:02'),
(15, 'penyiraman_air', 1, '2025-01-31 15:04:03'),
(16, 'penyiraman_air', 1, '2025-01-31 15:04:04'),
(17, 'kelembapan_tanah', 830, '2025-01-31 15:04:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log_table`
--
ALTER TABLE `log_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plant_values`
--
ALTER TABLE `plant_values`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log_table`
--
ALTER TABLE `log_table`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plant_values`
--
ALTER TABLE `plant_values`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
