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
-- Table structure for table `respuestastest`
--

DROP TABLE IF EXISTS `respuestastest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuestastest` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `servicioSocial` int(10) NOT NULL,
  `ejecutivoPersuasivo` int(10) NOT NULL,
  `verbal` int(10) NOT NULL,
  `artesPlasticas` int(10) NOT NULL,
  `musical` int(10) NOT NULL,
  `organizacionOficina` int(10) NOT NULL,
  `cientifico` int(10) NOT NULL,
  `calculoNumerico` int(10) NOT NULL,
  `mecanico` int(10) NOT NULL,
  `aireLibre` int(10) NOT NULL,
  `idAlumno` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_respuestastest_alumno_idx` (`idAlumno`),
  CONSTRAINT `fk_respuestastest_alumno` FOREIGN KEY (`idAlumno`) REFERENCES `alumno` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestastest`
--

LOCK TABLES `respuestastest` WRITE;
/*!40000 ALTER TABLE `respuestastest` DISABLE KEYS */;
INSERT INTO `respuestastest` VALUES
(16,5,11,14,8,11,14,6,6,13,11,81),
(17,9,11,11,5,11,9,9,12,11,14,80);
/*!40000 ALTER TABLE `respuestastest` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16  9:40:11
