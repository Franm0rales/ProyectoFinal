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
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(128) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `idTarjeta` int(10) unsigned DEFAULT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NOT NULL DEFAULT current_timestamp(),
  `eliminado` enum('0','1') NOT NULL DEFAULT '0',
  `avatar` int(10) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(256) DEFAULT NULL,
  `test` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `telefono_UNIQUE` (`telefono`),
  UNIQUE KEY `correo_UNIQUE` (`email`),
  CONSTRAINT `fk_usuario_alumno` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES
(23,38,'Fran','Morales Reyes','620560863','picassomorales@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Malaga',NULL,'2023-02-04 17:08:15','2023-02-10 21:58:20','1',7,'null','null',NULL),
(25,40,'jose','luis','620560865','1picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Almería',NULL,'2023-02-04 17:12:09','2023-02-13 09:13:39','0',5,'Estudiante 2º bachillerato','Me gusta jugar a videojuegos y a las cartas',NULL),
(26,41,'Fran','Morales Reyes','620560853','2picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Malaga',NULL,'2023-02-05 11:30:42','2023-02-10 21:58:37','1',8,'null','null',NULL),
(27,42,'Alex','Morales Reyes','630560853','gomez@gmail.com','1383734cc13db894a26e184e8e66da87','Malaga',NULL,'2023-02-05 11:30:54','2023-02-06 13:02:44','1',7,'null','null',NULL),
(28,43,'alex','gomez','654654654','123@gmail.com','1383734cc13db894a26e184e8e66da87','marbella',NULL,'2023-02-06 09:04:40','2023-02-06 09:04:40','0',7,'null','null',NULL),
(30,48,'Alejandro','Gomez Reyes','6205214364','3picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Almuñécar',NULL,'2023-02-08 16:11:19','2023-02-08 16:11:19','0',7,'null','null',NULL),
(31,49,'Alejandro','Gomez Reyes','6213460864','4picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Almuñécar',NULL,'2023-02-08 16:12:03','2023-02-08 16:12:03','0',7,'null','null',NULL),
(32,50,'Alejandro','Gomez Reyes','620560864','6picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Almuñécar',NULL,'2023-02-08 16:13:42','2023-02-08 16:13:42','0',7,'null','null',NULL),
(34,52,'Alejandro','Gomez Reyes','6201232364','7picassomorales@gmail.com','1383734cc13db894a26e184e8e66da87','Cuenca',NULL,'2023-02-08 16:15:14','2023-02-08 16:15:14','0',7,'null','null',NULL),
(35,53,'Alejandro','Reyes','3513513','asdfs@gmail.com','1383734cc13db894a26e184e8e66da87','Cadiz',NULL,'2023-02-09 11:16:00','2023-02-09 11:16:00','0',8,'null','null',NULL);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13 11:18:08
