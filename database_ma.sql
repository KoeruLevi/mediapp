-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2024 a las 20:50:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_ma`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmacia`
--

CREATE TABLE `farmacia` (
  `id_farmacia` int(11) NOT NULL,
  `nombre_farmacia` varchar(100) NOT NULL,
  `direccion_farmacia` varchar(150) NOT NULL,
  `foto_farmacia` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `farmacia`
--

INSERT INTO `farmacia` (`id_farmacia`, `nombre_farmacia`, `direccion_farmacia`, `foto_farmacia`) VALUES
(1, 'Farmacias Ahumada', 'Barros Arana 501', ''),
(2, 'Farmacias Doctor Simi', ' OHiggins 1107', ''),
(3, 'Farmacias Cruz Verde', 'Paicavi 312', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmaco`
--

CREATE TABLE `farmaco` (
  `id_farmaco` int(11) NOT NULL,
  `nombre_farmaco` varchar(100) NOT NULL,
  `mg_farmaco` int(11) NOT NULL,
  `cant_farmaco` int(11) NOT NULL,
  `precio_farmaco` varchar(100) NOT NULL,
  `foto_farmaco` blob NOT NULL,
  `id_pa` int(11) NOT NULL,
  `id_farmacia` int(11) NOT NULL,
  `id_lab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `farmaco`
--

INSERT INTO `farmaco` (`id_farmaco`, `nombre_farmaco`, `mg_farmaco`, `cant_farmaco`, `precio_farmaco`, `foto_farmaco`, `id_pa`, `id_farmacia`, `id_lab`) VALUES
(1, 'Qurax', 25, 30, '26.195', '', 1, 1, 3),
(2, 'Clonex', 1, 30, '7.990', '', 6, 3, 5),
(3, 'Neuroval', 5, 30, '9.945', '', 4, 1, 5),
(4, 'Letico', 50, 30, '5.600', '', 2, 2, 7),
(5, 'Traviata', 20, 30, '51.690', '', 3, 3, 4),
(6, 'Parodox', 20, 30, '26.289', '', 3, 1, 7),
(7, 'Tramadol Clorhidrato', 100, 10, '3.795', '', 5, 1, 8),
(8, 'Traviata', 20, 30, '14.400', '', 3, 2, 4),
(9, 'Quetium', 100, 30, '24.794', '', 1, 3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorio`
--

CREATE TABLE `laboratorio` (
  `id_lab` int(11) NOT NULL,
  `nombre_lab` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `laboratorio`
--

INSERT INTO `laboratorio` (`id_lab`, `nombre_lab`) VALUES
(1, 'ASCEND'),
(2, 'Seven Pharma'),
(3, 'Megalabs'),
(4, 'Andromaco'),
(5, 'SAVAL'),
(6, 'Mintlab'),
(7, 'Eurofarma'),
(8, 'Laboratorio Chile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `principio_activo`
--

CREATE TABLE `principio_activo` (
  `id_pa` int(11) NOT NULL,
  `nombre_pa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `principio_activo`
--

INSERT INTO `principio_activo` (`id_pa`, `nombre_pa`) VALUES
(1, 'Quetiapina'),
(2, 'Lamotrigina'),
(3, 'Paroxetina'),
(4, 'Clotiazepam'),
(5, 'Tramadol'),
(6, 'Clonazepam');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `farmacia`
--
ALTER TABLE `farmacia`
  ADD PRIMARY KEY (`id_farmacia`);

--
-- Indices de la tabla `farmaco`
--
ALTER TABLE `farmaco`
  ADD PRIMARY KEY (`id_farmaco`),
  ADD KEY `id_farmacia` (`id_farmacia`),
  ADD KEY `id_lab` (`id_lab`),
  ADD KEY `id_pa` (`id_pa`);

--
-- Indices de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`id_lab`);

--
-- Indices de la tabla `principio_activo`
--
ALTER TABLE `principio_activo`
  ADD PRIMARY KEY (`id_pa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `farmacia`
--
ALTER TABLE `farmacia`
  MODIFY `id_farmacia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `farmaco`
--
ALTER TABLE `farmaco`
  MODIFY `id_farmaco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  MODIFY `id_lab` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `principio_activo`
--
ALTER TABLE `principio_activo`
  MODIFY `id_pa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `farmaco`
--
ALTER TABLE `farmaco`
  ADD CONSTRAINT `farmaco_ibfk_1` FOREIGN KEY (`id_farmacia`) REFERENCES `farmacia` (`id_farmacia`) ON UPDATE CASCADE,
  ADD CONSTRAINT `farmaco_ibfk_2` FOREIGN KEY (`id_lab`) REFERENCES `laboratorio` (`id_lab`) ON UPDATE CASCADE,
  ADD CONSTRAINT `farmaco_ibfk_3` FOREIGN KEY (`id_pa`) REFERENCES `principio_activo` (`id_pa`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
