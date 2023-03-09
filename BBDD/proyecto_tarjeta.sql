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
  `descripcion` varchar(1024) NOT NULL,
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
  `mediaRating` double(5,2) DEFAULT 0.00,
  `comentariosAlumnos` int(5) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `fk_empresa_tarjeta_idx` (`idEmpresa`),
  CONSTRAINT `fk_empresa_tarjeta` FOREIGN KEY (`idEmpresa`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
INSERT INTO `tarjeta` VALUES
(28,'Descubre Talan','Te invitamos a conocer nuestras sedes regionales, nuestras ofertas, nuestros clientes y misiones emblemáticas así como nuestras oportunidades de empleo a través de una serie de webinars \"Nuestras regiones tienen Talan\".','images/images/talan.png','info@talan.com','919047025','Calle Poeta Paco Aquino nº4','Almeria',143,'2023-03-08 10:21:55','2023-03-08 14:10:16','2023-03-06T16:00:00Z','2023-03-07T23:00:00Z',5,'16:00',4,4.75,4),
(29,'Computer vision, el PC que todo lo ve','¿Puede la cámara de nuestro PC actuar como un ojo humano? Para dar respuesta a esta cuestión debemos investigar un poco más acerca de Computer vision, rama de Machine Learning.\r\nEduardo Viñas, Data Engineer en BABEL, nos mostrará los enfoques que existen a la hora de procesar imágenes y obtener información de las mismas. Visualizaremos también cómo se manejan las imágenes en un entorno digital y las manipularemos utilizando la librería OpenCV, para más adelante aprender el funcionamiento de las redes neuronales y utilizar una red ya entrenada.','images/images/babel.png','info@babelgroup.com','952029300','Calle Severo Ochoa nº43','Malaga',145,'2023-03-06 18:29:41','2023-03-06 18:42:38','2023-02-14T18:00:00Z','2023-02-14T23:00:00Z',8,'18:00',0,0.00,0),
(30,'Reactive, like a Pro!','En este nuevo meetup hablaremos del desarrollo reactive. Para ello contaremos con Carlos Olías, OutSystems Architect en BABEL, que repasará las capacidades principales del desarrollo con reactive, las diferencias con el desarrollo web “tradicional” y aquellas características que están por venir.\r\n\r\nA continuación pondremos el foco en el funcionamiento del flujo completo de carga de una página, la optimización de llamadas a servidor, o algunos tips avanzados. ¿Crees que los conoces todos? Te animamos a descubrirlos.','images/images/babel.png','info@babelgroup.com','954159048','Plaza de las Naciones nº4','Sevilla',145,'2023-03-06 18:41:28','2023-03-08 14:59:38','2023-03-13T10:00:00Z','2023-03-15T23:00:00Z',10,'10:00',1,0.00,0),
(31,'Ingenieras definiendo el futuro','En Indra tenemos a muchas de las que están definiendo el futuro y transformando negocios, personas y la sociedad con las tecnologías más avanzadas\r\nEn este evento, ellas mismas nos contarán más sobre su papel en estos proyectos, cómo están transformando el futuro, consejos y aprendizajes de su vida profesional, y cuáles son los retos de la mujer en la ingeniería y en el sector STEAM.','images/images/indra.png','info@indra.com','914805002','Calle De San Basilio nº14','Cordoba',140,'2023-03-05 10:13:35','2023-03-08 14:51:13','2023-03-06T18:00:00Z','2023-03-07T23:00:00Z',6,'18:00',3,4.67,3),
(32,'Engineering the Future','Si te has graduado recientemente o estás estudiando los últimos cursos de ingeniería de telecomunicaciones, informática o cualquier otra ingeniería con vocación de programación o desarrollo de software, crees en el poder de la tecnología para transformar el mundo y quieres llevar la ingeniería tecnológica al siguiente nivel, ¡te esperamos!','images/images/indra.png','info@indra.com','914805002','Calle De San Basilio nº14','Cordoba',140,'2023-03-08 10:17:26','2023-03-09 08:45:59','2023-03-18T18:00:00Z','2023-03-20T23:00:00Z',7,'18:00',3,0.00,0),
(35,'OPEN DAY: Junior diseñador/a gráfico/a','Grupo Mayoral, sólida empresa en proceso de crecimiento y transformación, compuesta por distintas sociedades dedicadas a la moda, quiere incorporar a su marca premium Abel&Lula un/a Diseñador/a Gráfico/a. Reportando a la responsable de diseño.','images/images/mayoral.png','info@mayoral.com','958643265','Calle Reyes Católicos nº2','Granada',134,'2023-03-08 11:34:05','2023-03-08 20:46:43','2023-03-16T07:30:00Z','2023-03-17T23:00:00Z',3,'07:30',1,0.00,0),
(36,'OPEN DAY: Frontend developer','¿Quieres trabajar como desarrollador frontend? ¿Quieres conocer de primera mano como trabaja un desarrollador frontend? Únete al OPEN DAY y pasa 3 días junto a los mejores programadores frontend.','images/images/mayoral.png','info@mayoral.com','958642365','Calle Reyes Católicos nº2','Granada',134,'2023-03-08 11:37:20','2023-03-08 11:37:56','2023-03-20T07:30:00Z','2023-03-22T23:00:00Z',2,'07:30',0,0.00,0),
(37,'Técnico SEO','¿Quieres aprender a mejorar la visibilidad de tu sitio web en los motores de búsqueda? ¿Estás interesado en conocer las técnicas más efectivas para optimizar tu contenido y conseguir enlaces externos de calidad?\r\nEntonces, este evento es para ti. Durante nuestro Open Day, tendrás la oportunidad de aprender de la mano de expertos en SEO y poner en práctica todo lo que aprendas en nuestro taller práctico.','images/images/visionclick.png','info@visionclick.com','953634752','Avenida de América nº5','Huelva',139,'2023-03-08 11:48:00','2023-03-08 14:52:43','2023-03-23T08:00:00Z','2023-03-25T23:00:00Z',2,'08:00',1,0.00,0),
(38,'Data engineer lead','¡Hola! Si estás interesado en el mundo de la ingeniería de datos, ¡tenemos el evento perfecto para ti!\r\nTe invitamos a nuestro Open Day como Data Engineer Lead, donde tendrás la oportunidad de conocer más sobre cómo diseñar, construir y mantener infraestructuras de datos escalables y efectivas.','images/images/wetaca.png','info@wetaca.com','954786521','Avda de la Sanidad Pública nº1','Cadiz',133,'2023-03-08 11:51:23','2023-03-08 14:59:20','2023-03-05T08:30:00Z','2023-03-07T23:00:00Z',3,'08:30',2,5.00,2),
(39,'OPEN DAY: KYC ','¡Atención a todos los interesados en el mundo de KYC! Te invitamos a nuestro Open Day para KYC Junior, donde tendrás la oportunidad de conocer más sobre el mundo de la Conoce a tu Cliente.\r\nAdemás, tendrás la oportunidad de interactuar con otros profesionales y aprender de sus experiencias en el campo.\r\n¡No te pierdas esta oportunidad única de sumergirte en el mundo de KYC! ¡Regístrate ahora para nuestro Open Day KYC Junior!','images/images/ebury.png','info@ebury.com','957856932','Avenida Ruíz Jiménez','Jaen',132,'2023-03-08 11:54:35','2023-03-08 15:34:22','2023-03-06T09:00:00Z','2023-03-29T23:00:00Z',2,'09:00',0,0.00,0),
(40,'Técnico/a de diseño mecánico','¡Hola! Si te apasiona el mundo del diseño mecánico, ¡tenemos el evento perfecto para ti! Te invitamos a nuestro Open Day para Técnico de Diseño Mecánico, donde tendrás la oportunidad de conocer más sobre cómo diseñar soluciones mecánicas efectivas para resolver problemas de ingeniería.','images/images/adecco.png','info@adecco.com','957865963','Paseo de la Estación nº11','Jaen',135,'2023-03-08 11:57:26','2023-03-08 13:56:22','2023-02-10T08:30:00Z','2023-02-13T23:00:00Z',3,'08:30',3,4.33,3),
(41,'Gestionar la flexibilidad en el nuevo marco jurídico y el papel de los ERTE','Os invitamos al evento \"Cómo gestionar la flexibilidad en el nuevo marco jurídico y el papel de los ERTES\", que tendrá lugar el próximo 9 de junio en Barcelona. Se llevará a cabo de manera presencial y virtual.\r\n\r\nEn esta jornada se va a reflexionar sobre el impacto que la Reforma Laboral está teniendo sobre la gestión de la temporalidad y las medidas de flexibilidad en las organizaciones.','images/images/LHH.png','info@lhh.com','951362436','Calle Amor nº11','Sevilla',136,'2023-03-08 11:59:51','2023-03-08 20:47:30','2023-03-11T19:00:00Z','2023-03-13T23:00:00Z',6,'19:00',2,0.00,0),
(42,'OPEN DAY: Fisioterapeuta','¿Interesado en el mundo de la fisioterapia? Regístrate en nuestro Open Day para fisioterapeutas y aprende de expertos en la materia. Descubre cómo evaluar lesiones musculoesqueléticas, diseñar planes de tratamiento personalizados y trabajar con tecnologías y herramientas para la terapia física. Interactúa con otros profesionales y aprende de sus experiencias en el campo. ','images/images/tralemto.png','info@tralemto.com','956360321','Avenida Andalucía nº36','Huelva',137,'2023-03-08 12:23:35','2023-03-08 15:38:11','2023-03-28T09:00:00Z','2023-03-29T23:00:00Z',3,'09:00',0,0.00,0),
(43,'Software QA tester','¿Interesado en el mundo del testing de software? Regístrate en nuestro Open Day para Software QA Tester y aprende de expertos en la materia. Descubre cómo realizar pruebas manuales y automatizadas, trabajar con herramientas de automatización y gestionar el proceso de pruebas. Interactúa con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad única de sumergirte en el mundo del testing de software. ¡Apúntate ahora!','images/images/novoshore.png','info@novoshore.com','951767868','Calle Severo Ochoa nº23','Malaga',142,'2023-03-08 12:28:48','2023-03-08 12:28:48','2023-03-29T08:00:00Z','2023-03-31T23:00:00Z',2,'08:00',0,0.00,0),
(44,'Trabaja con nosotros ','Para todas nuestras oficinas, buscamos constantemente estudiantes de último grado en Ingeniería (Industrial, Telecomunicaciones, Informática, Aeroespacial, etc.), Arquitectos, ADE, Derecho, Matemáticos, Estadísticos, Físicos y cualquier Doble Grado, con ganas de aprender y afrontar nuevos retos, así como también estudiantes de másteres.','images/images/pwc.png','info@pwc.com','959654132','Calle Oliva nº24','Jaen',131,'2023-03-08 12:32:05','2023-03-08 15:37:24','2023-03-22T08:00:00Z','2023-03-24T23:00:00Z',10,'08:00',0,0.00,0),
(45,'OPEN DAY: Frontend developer','¡Atención a todos los interesados en el mundo del desarrollo frontend! Te invitamos a nuestro Open Day para Frontend Developer, donde tendrás la oportunidad de conocer más sobre cómo crear interfaces de usuario efectivas y atractivas para aplicaciones web y móviles.','images/images/kamstrup.png','info@kamstrup.com','952654932','Avenida Jorge Luis Borges nº14','Malaga',141,'2023-03-08 12:37:38','2023-03-08 17:01:48','2023-03-12T08:00:00Z','2023-03-15T23:00:00Z',2,'08:00',1,0.00,0),
(46,'OPEN DAY: Backend developer','¡Atención a todos los interesados en el mundo del desarrollo backend! Te invitamos a nuestro Open Day para Backend Developer, donde tendrás la oportunidad de conocer más sobre cómo crear la lógica de negocio y funcionalidades de aplicaciones web y móviles.','images/images/kamstrup.png','info@kamstrup.com','952235164','Avenida Jorge Luis Borges nº14','Malaga',141,'2023-03-08 12:40:59','2023-03-08 14:50:39','2023-03-12T08:00:00Z','2023-03-15T23:00:00Z',2,'08:00',1,0.00,0),
(47,'Ciberseguridad virtual','Regístrate en nuestro Open Day para Ciberseguridad Virtual y aprende de expertos en la materia. Descubre cómo proteger la información y sistemas de empresas y organizaciones, identificar vulnerabilidades y amenazas, y utilizar herramientas y técnicas de hacking ético para mejorar la seguridad. Aprende también a trabajar con sistemas de seguridad y monitoreo para detectar y responder a incidentes. Interactúa con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad única de sumergirte en el mundo de la ciberseguridad. ¡Regístrate ahora!','images/images/vodafone.png','info@vodafone.com','958632569','Calle Reyes Católicos nº2','Granada',147,'2023-03-08 12:44:24','2023-03-08 15:03:53','2023-03-16T17:00:00Z','2023-03-20T23:00:00Z',3,'17:00',1,0.00,0),
(48,'C# Software Developer','Regístrate en nuestro Open Day para C# Software Developer y aprende a desarrollar aplicaciones robustas y escalables utilizando C# y el framework .NET. Descubre cómo trabajar con bases de datos relacionales utilizando tecnologías como Entity Framework y LINQ, y cómo utilizar herramientas y técnicas para mejorar la calidad y mantenibilidad del código. Interactúa con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad única de sumergirte en el mundo del desarrollo de software con C#. ¡Regístrate ahora!','images/images/verisk.png','info@verisk.com','953632514','Calle Chirigota nº3','Cadiz',130,'2023-03-08 12:48:31','2023-03-08 12:48:31','2023-03-28T07:30:00Z','2023-03-30T23:00:00Z',2,'07:30',0,0.00,0),
(49,'Intelligent Automation for Business Advantage','¡Atención a todos los interesados en la automatización inteligente en los negocios! Te invitamos a nuestro Open Day para Intelligent Automation for Business Advantage, donde tendrás la oportunidad de conocer más sobre cómo automatizar procesos de negocio y aumentar la eficiencia en la organización.\r\n¡No te pierdas esta oportunidad única de sumergirte en el mundo de la automatización inteligente en los negocios! ¡Regístrate ahora para nuestro Open Day Intelligent Automation for Business Advantage!','images/images/accenture.png','info@accenture.com','951659324','Calle Betis nº2','Sevilla',138,'2023-03-08 12:51:09','2023-03-08 20:47:21','2023-03-10T16:00:00Z','2023-03-13T23:00:00Z',4,'16:00',2,0.00,0);
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

-- Dump completed on 2023-03-09  9:50:39
