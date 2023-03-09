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
  `idTarjeta` int(10) unsigned DEFAULT 0,
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
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES
(55,73,'Alejandro','Gomez ','620560864','alex@mail.com','1383734cc13db894a26e184e8e66da87','Granada',0,'2023-02-13 19:05:07','2023-03-06 16:33:12',0,8,'admin','admin'),
(62,80,'Diana','Teran','626516523','diana@mail.com','1383734cc13db894a26e184e8e66da87','Cordoba',32,'2023-02-14 19:29:33','2023-03-08 20:58:49',0,8,'Ingeniera de diseño','Product manager'),
(65,118,'Francisco','Fregenal','652312123','fran@mail.com','1383734cc13db894a26e184e8e66da87','Malaga',41,'2023-03-06 16:29:04','2023-03-08 15:02:49',0,7,'Frontend developer',NULL),
(66,119,'Maria','Pérez','723695132','maria@mail.com','1383734cc13db894a26e184e8e66da87','Granada',32,'2023-03-06 16:30:22','2023-03-09 08:45:59',0,8,'Estudiante 2º bachillerato','Me gustaría trabajar como frontend developer'),
(67,120,'Ana','Sánchez','695213468','ana@mail.com','1383734cc13db894a26e184e8e66da87','Almeria',49,'2023-03-06 16:31:07','2023-03-08 15:03:18',0,8,NULL,NULL),
(68,121,'Jose','Bustos ','695871233','jose@mail.com','1383734cc13db894a26e184e8e66da87','Huelva',32,'2023-03-06 16:32:04','2023-03-08 14:58:05',0,4,NULL,NULL),
(69,122,'Natalia','Sanz','643031985','natalia@mail.com','1383734cc13db894a26e184e8e66da87','Sevilla',46,'2023-03-06 16:32:53','2023-03-08 14:50:39',0,3,NULL,NULL),
(70,123,'Lucía','Martínez','698712460','lucia@mail.com','1383734cc13db894a26e184e8e66da87','Cadiz',47,'2023-03-06 16:34:03','2023-03-08 15:03:53',0,3,NULL,NULL),
(71,124,'Dani','Agraz','632987156','dani@mail.com','1383734cc13db894a26e184e8e66da87','Jaen',49,'2023-03-06 16:34:34','2023-03-08 13:54:58',0,2,NULL,NULL),
(72,125,'Carlos','Viano','651321984','carlos@mail.com','1383734cc13db894a26e184e8e66da87','Cordoba',35,'2023-03-06 16:35:05','2023-03-08 15:24:40',0,4,NULL,NULL),
(73,126,'Yanira','Ruiz','789302451','yanira@mail.com','1383734cc13db894a26e184e8e66da87','Huelva',45,'2023-03-06 16:35:43','2023-03-08 14:51:22',0,8,NULL,NULL),
(74,127,'Rocio','Castaño','625142563','rocio@mail.com','1383734cc13db894a26e184e8e66da87','Sevilla',30,'2023-03-06 16:36:30','2023-03-08 14:59:38',0,3,NULL,NULL),
(75,128,'Rafa','Ramos','632145698','rafa@mail.com','1383734cc13db894a26e184e8e66da87','Malaga',37,'2023-03-06 16:37:15','2023-03-08 14:52:43',0,7,NULL,NULL);
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

-- Dump completed on 2023-03-09  9:50:39
