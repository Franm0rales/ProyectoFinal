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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `IdUsuario` int(10) unsigned NOT NULL,
  `IdTarjeta` int(10) unsigned NOT NULL,
  `comentario` varchar(1024) NOT NULL,
  `rating` int(1) DEFAULT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_comentarios_alumnos_idx` (`IdUsuario`),
  KEY `fk_comentarios_tarjeta_idx` (`IdTarjeta`),
  CONSTRAINT `fk_comentarios_alumnos` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentarios_tarjeta` FOREIGN KEY (`IdTarjeta`) REFERENCES `tarjeta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES
(19,124,40,'Mi experiencia en el Open Day como técnico de diseño mecánico fue excepcional. Los expertos presentes en el evento explicaron con detalle cómo utilizar herramientas de diseño CAD para crear modelos 3D de alta calidad y cómo aplicar técnicas de simulación para optimizar el rendimiento y la eficiencia de los diseños.',4,'2023-03-08 13:48:24','2023-03-08 13:48:24'),
(20,80,40,'El Open Day me permitió mejorar mis habilidades técnicas y ampliar mi conocimiento sobre la industria del diseño mecánico. Recomiendo altamente este evento a cualquier persona interesada en este campo o que busque mejorar sus habilidades en diseño mecánico.',5,'2023-03-08 13:55:38','2023-03-08 13:55:38'),
(21,118,40,'Tuve la oportunidad de interactuar con otros profesionales del campo y compartir mis propias experiencias y desafíos. Esto me permitió aprender de los demás y obtener nuevas perspectivas sobre cómo abordar los problemas que enfrento en mi trabajo diario.',4,'2023-03-08 13:56:22','2023-03-08 13:56:22'),
(22,122,28,'Fue una experiencia muy valiosa. Aprendí mucho sobre la empresa y sus servicios, y pude hablar con expertos de diversas áreas. Además, me quedé impresionado por la cultura y el ambiente en Talan. Definitivamente recomendaría a cualquier persona interesada en el mundo de la tecnología que asista a un evento como este.',5,'2023-03-08 14:07:16','2023-03-08 14:07:16'),
(23,118,28,'Lo que más me impresionó fue el ambiente en Talan. El equipo es muy diverso y multicultural, lo que da lugar a una gran variedad de perspectivas y enfoques. Además, el ambiente es muy colaborativo y se fomenta el trabajo en equipo, lo que se traduce en un gran sentido de comunidad.',5,'2023-03-08 14:08:06','2023-03-08 14:08:06'),
(24,126,28,'Se realizaron presentaciones más detalladas sobre los distintos departamentos y áreas de trabajo, desde consultoría y análisis de datos hasta desarrollo de software y seguridad informática. Tuve la oportunidad de hablar con expertos de cada una de estas áreas, quienes respondieron con entusiasmo y claridad a todas mis preguntas.',5,'2023-03-08 14:09:36','2023-03-08 14:09:36'),
(25,80,28,'El evento comenzó con una presentación sobre Talan y su historia, así como sobre las soluciones y servicios que ofrecen. Me sorprendió la cantidad de proyectos que han realizado en diversas áreas y la capacidad de personalizar soluciones para cada cliente en particular.',4,'2023-03-08 14:10:16','2023-03-08 14:10:16'),
(26,119,31,'La reunión comenzó con una presentación de las organizadoras del evento, quienes hablaron sobre su visión para el futuro de la industria tecnológica y cómo las mujeres ingenieras pueden contribuir de manera significativa a este futuro. Me pareció muy valioso que se destacara el papel crucial que las mujeres tienen en la industria, y cómo sus perspectivas y habilidades únicas pueden ser fundamentales en la resolución de problemas y la toma de decisiones.',5,'2023-03-08 14:49:12','2023-03-08 14:49:12'),
(27,122,31,'Una de las cosas que más me gustó de este meetup fue la oportunidad de interactuar y hacer preguntas a las ponentes. Me pareció que todas ellas estaban muy comprometidas en ayudar a las mujeres que están empezando su carrera en la tecnología, y estaban dispuestas a brindar consejos y orientación.',4,'2023-03-08 14:49:57','2023-03-08 14:49:57'),
(28,126,31,'El meetup \"Ingenieras definiendo el futuro\" fue una experiencia muy valiosa para mí. Me hizo reflexionar sobre el papel de las mujeres en la industria de la tecnología y cómo podemos trabajar juntas para crear un futuro mejor y más inclusivo. Recomiendo encarecidamente este tipo de eventos a cualquier persona que busque inspiración y motivación para su carrera en la tecnología.',5,'2023-03-08 14:51:13','2023-03-08 14:51:13'),
(29,121,38,'Fue una experiencia muy valiosa para mí. Me permitió aprender sobre una empresa líder en el campo de la ingeniería de datos y obtener conocimientos técnicos útiles para mi carrera en el campo de la tecnología. Recomiendo encarecidamente este evento a cualquier persona interesada en la ingeniería de datos y en cómo se está utilizando la tecnología para aprovechar al máximo los datos en el mundo empresarial.',5,'2023-03-08 14:56:44','2023-03-08 14:56:44'),
(30,127,38,'La sesión de preguntas y respuestas fue muy valiosa para mí, ya que tuve la oportunidad de hablar con expertos en ingeniería de datos y aprender de su experiencia en el campo. Fue muy impresionante la capacidad del equipo para responder preguntas técnicas complejas y brindar soluciones efectivas a los desafíos que se presentan.',5,'2023-03-08 14:59:20','2023-03-08 14:59:20');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
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
