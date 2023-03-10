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
(19,124,40,'Mi experiencia en el Open Day como t??cnico de dise??o mec??nico fue excepcional. Los expertos presentes en el evento explicaron con detalle c??mo utilizar herramientas de dise??o CAD para crear modelos 3D de alta calidad y c??mo aplicar t??cnicas de simulaci??n para optimizar el rendimiento y la eficiencia de los dise??os.',4,'2023-03-08 13:48:24','2023-03-08 13:48:24'),
(20,80,40,'El Open Day me permiti?? mejorar mis habilidades t??cnicas y ampliar mi conocimiento sobre la industria del dise??o mec??nico. Recomiendo altamente este evento a cualquier persona interesada en este campo o que busque mejorar sus habilidades en dise??o mec??nico.',5,'2023-03-08 13:55:38','2023-03-08 13:55:38'),
(21,118,40,'Tuve la oportunidad de interactuar con otros profesionales del campo y compartir mis propias experiencias y desaf??os. Esto me permiti?? aprender de los dem??s y obtener nuevas perspectivas sobre c??mo abordar los problemas que enfrento en mi trabajo diario.',4,'2023-03-08 13:56:22','2023-03-08 13:56:22'),
(22,122,28,'Fue una experiencia muy valiosa. Aprend?? mucho sobre la empresa y sus servicios, y pude hablar con expertos de diversas ??reas. Adem??s, me qued?? impresionado por la cultura y el ambiente en Talan. Definitivamente recomendar??a a cualquier persona interesada en el mundo de la tecnolog??a que asista a un evento como este.',5,'2023-03-08 14:07:16','2023-03-08 14:07:16'),
(23,118,28,'Lo que m??s me impresion?? fue el ambiente en Talan. El equipo es muy diverso y multicultural, lo que da lugar a una gran variedad de perspectivas y enfoques. Adem??s, el ambiente es muy colaborativo y se fomenta el trabajo en equipo, lo que se traduce en un gran sentido de comunidad.',5,'2023-03-08 14:08:06','2023-03-08 14:08:06'),
(24,126,28,'Se realizaron presentaciones m??s detalladas sobre los distintos departamentos y ??reas de trabajo, desde consultor??a y an??lisis de datos hasta desarrollo de software y seguridad inform??tica. Tuve la oportunidad de hablar con expertos de cada una de estas ??reas, quienes respondieron con entusiasmo y claridad a todas mis preguntas.',5,'2023-03-08 14:09:36','2023-03-08 14:09:36'),
(25,80,28,'El evento comenz?? con una presentaci??n sobre Talan y su historia, as?? como sobre las soluciones y servicios que ofrecen. Me sorprendi?? la cantidad de proyectos que han realizado en diversas ??reas y la capacidad de personalizar soluciones para cada cliente en particular.',4,'2023-03-08 14:10:16','2023-03-08 14:10:16'),
(26,119,31,'La reuni??n comenz?? con una presentaci??n de las organizadoras del evento, quienes hablaron sobre su visi??n para el futuro de la industria tecnol??gica y c??mo las mujeres ingenieras pueden contribuir de manera significativa a este futuro. Me pareci?? muy valioso que se destacara el papel crucial que las mujeres tienen en la industria, y c??mo sus perspectivas y habilidades ??nicas pueden ser fundamentales en la resoluci??n de problemas y la toma de decisiones.',5,'2023-03-08 14:49:12','2023-03-08 14:49:12'),
(27,122,31,'Una de las cosas que m??s me gust?? de este meetup fue la oportunidad de interactuar y hacer preguntas a las ponentes. Me pareci?? que todas ellas estaban muy comprometidas en ayudar a las mujeres que est??n empezando su carrera en la tecnolog??a, y estaban dispuestas a brindar consejos y orientaci??n.',4,'2023-03-08 14:49:57','2023-03-08 14:49:57'),
(28,126,31,'El meetup \"Ingenieras definiendo el futuro\" fue una experiencia muy valiosa para m??. Me hizo reflexionar sobre el papel de las mujeres en la industria de la tecnolog??a y c??mo podemos trabajar juntas para crear un futuro mejor y m??s inclusivo. Recomiendo encarecidamente este tipo de eventos a cualquier persona que busque inspiraci??n y motivaci??n para su carrera en la tecnolog??a.',5,'2023-03-08 14:51:13','2023-03-08 14:51:13'),
(29,121,38,'Fue una experiencia muy valiosa para m??. Me permiti?? aprender sobre una empresa l??der en el campo de la ingenier??a de datos y obtener conocimientos t??cnicos ??tiles para mi carrera en el campo de la tecnolog??a. Recomiendo encarecidamente este evento a cualquier persona interesada en la ingenier??a de datos y en c??mo se est?? utilizando la tecnolog??a para aprovechar al m??ximo los datos en el mundo empresarial.',5,'2023-03-08 14:56:44','2023-03-08 14:56:44'),
(30,127,38,'La sesi??n de preguntas y respuestas fue muy valiosa para m??, ya que tuve la oportunidad de hablar con expertos en ingenier??a de datos y aprender de su experiencia en el campo. Fue muy impresionante la capacidad del equipo para responder preguntas t??cnicas complejas y brindar soluciones efectivas a los desaf??os que se presentan.',5,'2023-03-08 14:59:20','2023-03-08 14:59:20');
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
