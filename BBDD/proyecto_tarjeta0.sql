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
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) NOT NULL,
  `descripcion` varchar(128) NOT NULL,
  `imagen` varchar(128) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(128) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `idEmpresa` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NOT NULL DEFAULT current_timestamp(),
  `fechaInicio` varchar(45) NOT NULL,
  `fechaFin` varchar(45) NOT NULL,
  `plazas` int(5) NOT NULL,
  `horaInicio` varchar(45) NOT NULL,
  `alumnos` int(5) NOT NULL DEFAULT 0,
  `mediaRating` double(5,2) NOT NULL,
  `comentariosAlumnos` int(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_empresa_tarjeta_idx` (`idEmpresa`),
  CONSTRAINT `fk_empresa_tarjeta` FOREIGN KEY (`idEmpresa`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
INSERT INTO `tarjeta` VALUES
(5,'meetUp PYTHON','curso de Python',NULL,'acsdfa@mail.com','16531','POLO CONTENIDOS DIGITAL','Málaga',82,'2023-02-15 14:02:19','2023-02-15 17:57:08','2023-02-22T17:00:00Z','2023-02-24T17:00:00Z',5,'17:00',1,4.00,1),
(6,'meetUp PYTHON','curso de Python',NULL,'acsdfa@mail.com','16531','POLO CONTENIDOS DIGITAL','Málaga',83,'2023-02-15 14:03:34','2023-02-15 20:12:54','2023-02-19T17:00:00Z','2023-03-20T17:00:00Z',5,'18:35',4,3.00,4),
(7,'PYTHON','ASDFADSFSSA',NULL,'asdfa@gm.com','adfewds','asdfagfasd','malaga',83,'2023-02-15 14:12:11','2023-03-09 20:06:26','2023-03-12T17:00:00Z','2023-02-13T17:00:00Z',10,'20:30',1,5.00,1);
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-22 18:01:49
