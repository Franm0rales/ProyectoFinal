-- MariaDB dump 10.19  Distrib 10.11.0-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: proyecto
-- ------------------------------------------------------
-- Server version	10.11.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES
(0,'Manejar con habilidad pequeñas piezas y herramientas como agujas, manecillas, joyas, piezas de relojería, etc.'),
(1,'Tratar y hablar con tacto a las personas'),
(2,'Ser jefe competente de un grupo, equipo o sociedad'),
(3,'Expresarte con facilidad en clase o al participar con tus amigos'),
(4,'Dibujar casas, objetos, figuras humanas, etc.'),
(5,'Cantar en un orfeón o grupo coral'),
(6,'Guiar en forma correcta y ordenada'),
(7,'Entender principios y experimentos de Biología '),
(8,'Ejecutar con rapidez y exactitud mecanizaciones matemáticas'),
(9,'Armar y componer objetos mecánicos como chapas, timbres, etc.'),
(10,'Actividades que requieren destreza manual'),
(11,'Ser miembro activo y útil en un club o sociedad'),
(12,'Organizar y dirigir festivales, encuentros deportivos, excursiones o campañas sociales'),
(13,'Redactar composiciones o artículos periodísticos'),
(14,'Pintar paisajes'),
(15,'Aprender a tocar un instrumento musical'),
(16,'Ordenar y clasificar debidamente documentos de una oficina'),
(17,'Entender principios y expreimentos de Física'),
(18,'Resolver problemas de Matemáticas'),
(19,'Desarmar, armar y componer objetos complicados'),
(20,'Manejar con habilidad herramientas de carpintería'),
(21,'Colaborar con otros para el bien de la comunidad'),
(22,'Convencer a otros para que hagan lo que tú crees que deben hacer'),
(23,'Componer versos serios o jocosos'),
(24,'Decorar artísticamente un salón, corredor, escenario o patio para un festival'),
(25,'Distinguir cuando alguien desentona en las canciones o piezas musicales'),
(26,'Contestar y redactar correctamente oficios y cartas'),
(27,'Entender principios y experimentos de Química'),
(28,'Resolver rompecabezas numéricos'),
(29,'Resolver rompecabezas de alambre o de madera'),
(30,'Manejar con facilidad herramientas mecánicas como pinzas'),
(31,'Saber escuchar a otros con paciencia y comprender su punto de vista'),
(32,'Dar órdenes a otros con seguridad y naturalidad'),
(33,'Escribir cuentos, narraciones o historietas'),
(34,'Modelar con barro, plastilina o grabar madera'),
(35,'Aprender a entonar correctamente las cancinoes de moda'),
(36,'Anotar y manejar con exactitud y rapidez nombres, números y otros datos'),
(37,'Entender principios y hechos económicos y sociales'),
(38,'Resolver problemas de Álgebra'),
(39,'Armar y componer muebles');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09  9:50:38
