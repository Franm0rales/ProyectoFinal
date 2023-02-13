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
(1,'tratar y hablar con tacto a las personas'),
(2,'ser jefe competente de un grupo, equipo o sociedad'),
(3,'expresarte con facilidad en clase o al participar con tus amigos'),
(4,'dibujar casas, objetos, figuras humanas, etc.'),
(5,'cantar en un orfeón o grupo coral'),
(6,'guiar en forma correcta y ordenada'),
(7,'entender principios y experimentos de Biología '),
(8,'ejecutar con rapidez y exactitud mecanizaciones matemáticas'),
(9,'armar y componer objetos mecánicos como chapas, timbres, etc.'),
(10,'actividades que requieren destreza manual'),
(11,'ser miembro actibo y útil en un club o sociedad'),
(12,'organizar y dirigir festivales, encuentros deportivos, excursiones o campañas sociales'),
(13,'redactar composiciones o artículos periodísticos'),
(14,'pintar paisajes'),
(15,'aprender a tocar un instrumento musical'),
(16,'ordenar y clasificar debidamente documentos de una oficina'),
(17,'entender principios y expreimentos de Física'),
(18,'resolver problemas de Matemáticas'),
(19,'desarmar, armar y componer objetos complicados'),
(20,'manejar con habilidad herramientas de carpintería'),
(21,'colaborar con otros para el bien de la comunidad'),
(22,'convencer a otros para que hagan lo que tú crees que deben hacer'),
(23,'componer versos serios o jocosos'),
(24,'decorar artísticamente un salón, corredor, escenario o patio para un festival'),
(25,'distinguir cuando alguien desentona en las canciones o piezas musicales'),
(26,'contestar y redactar correctamente oficios y cartas'),
(27,'entender principios y experimentos de Química'),
(28,'resolver rompecabezas numéricos'),
(29,'resolver rompecabezas de alambre o de madera'),
(30,'manejar con facilidad herramientas mecánicas como pinzas'),
(31,'saber escuchar a otros con paciencia y comprender su punto de vista'),
(32,'dar órdenes a otros con seguridad y naturalidad'),
(33,'escribir cuentos, narraciones o historietas'),
(34,'modelar con barro, plastilina o grabar madera'),
(35,'aprender a entonar correctamente las cancinoes de moda'),
(36,'anotar y manejar con exactitud y rapidez nombres, números y otros datos'),
(37,'entender principios y hechos económicos y sociales'),
(38,'resolver problemas de Álgebra'),
(39,'armar y componer muebles'),
(40,'manejar con habilidad pequeñas piezas y herramientas como agujas, manecillas, joyas, piezas de relojería, etc.');
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

-- Dump completed on 2023-02-13 11:18:09
