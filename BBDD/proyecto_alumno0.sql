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
  `eliminado` int(1) NOT NULL DEFAULT 0,
  `avatar` int(10) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `telefono_UNIQUE` (`telefono`),
  UNIQUE KEY `correo_UNIQUE` (`email`),
  CONSTRAINT `fk_usuario_alumno` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES
(55,73,'Alejandro','Gomez Reyes','620560864','alex@mail.com','1383734cc13db894a26e184e8e66da87','Granada',0,'2023-02-13 19:05:07','2023-02-14 11:40:07',0,5,'holiiiitaa','Pedro'),
(56,74,'Alejandro','Reyes','324','alex1@mail.com','1383734cc13db894a26e184e8e66da87','Almeria',0,'2023-02-14 16:55:53','2023-02-14 16:55:53',0,8,NULL,NULL),
(59,77,'Alejandro','Reyes','324324','alex31@mail.com','1383734cc13db894a26e184e8e66da87','Almeria',0,'2023-02-14 16:56:53','2023-02-14 16:56:53',0,8,NULL,NULL),
(60,78,'Alejandro','Reyes','32432452','alex361@mail.com','1383734cc13db894a26e184e8e66da87','Almeria',0,'2023-02-14 16:57:36','2023-02-14 16:57:36',0,8,NULL,NULL),
(61,79,'Alejandro','Reyes','3243232452','ale21x361@mail.com','1383734cc13db894a26e184e8e66da87','Almeria',0,'2023-02-14 17:00:43','2023-02-14 17:00:43',0,8,NULL,NULL),
(62,80,'Diana','Teran Patiño','6265165','diana@mail.com','1383734cc13db894a26e184e8e66da87','Cordoba',7,'2023-02-14 19:29:33','2023-02-14 19:30:09',0,3,'Desarrollador web','Frontend developer'),
(63,81,'juan','guzman','653100770','juanjo@gmail.com','de6759cb0926f8444310daa53db3b480','Malaga',0,'2023-02-15 08:38:16','2023-02-15 08:43:15',0,3,NULL,NULL);
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

-- Dump completed on 2023-02-22 18:01:49
