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
(28,'Descubre Talan','Te invitamos a conocer nuestras sedes regionales, nuestras ofertas, nuestros clientes y misiones emblem??ticas as?? como nuestras oportunidades de empleo a trav??s de una serie de webinars \"Nuestras regiones tienen Talan\".','images/images/talan.png','info@talan.com','919047025','Calle Poeta Paco Aquino n??4','Almeria',143,'2023-03-08 10:21:55','2023-03-08 14:10:16','2023-03-06T16:00:00Z','2023-03-07T23:00:00Z',5,'16:00',4,4.75,4),
(29,'Computer vision, el PC que todo lo ve','??Puede la c??mara de nuestro PC actuar como un ojo humano? Para dar respuesta a esta cuesti??n debemos investigar un poco m??s acerca de Computer vision, rama de Machine Learning.\r\nEduardo Vi??as, Data Engineer en BABEL, nos mostrar?? los enfoques que existen a la hora de procesar im??genes y obtener informaci??n de las mismas. Visualizaremos tambi??n c??mo se manejan las im??genes en un entorno digital y las manipularemos utilizando la librer??a OpenCV, para m??s adelante aprender el funcionamiento de las redes neuronales y utilizar una red ya entrenada.','images/images/babel.png','info@babelgroup.com','952029300','Calle Severo Ochoa n??43','Malaga',145,'2023-03-06 18:29:41','2023-03-06 18:42:38','2023-02-14T18:00:00Z','2023-02-14T23:00:00Z',8,'18:00',0,0.00,0),
(30,'Reactive, like a Pro!','En este nuevo meetup hablaremos del desarrollo reactive. Para ello contaremos con Carlos Ol??as, OutSystems Architect en BABEL, que repasar?? las capacidades principales del desarrollo con reactive, las diferencias con el desarrollo web ???tradicional??? y aquellas caracter??sticas que est??n por venir.\r\n\r\nA continuaci??n pondremos el foco en el funcionamiento del flujo completo de carga de una p??gina, la optimizaci??n de llamadas a servidor, o algunos tips avanzados. ??Crees que los conoces todos? Te animamos a descubrirlos.','images/images/babel.png','info@babelgroup.com','954159048','Plaza de las Naciones n??4','Sevilla',145,'2023-03-06 18:41:28','2023-03-08 14:59:38','2023-03-13T10:00:00Z','2023-03-15T23:00:00Z',10,'10:00',1,0.00,0),
(31,'Ingenieras definiendo el futuro','En Indra tenemos a muchas de las que est??n definiendo el futuro y transformando negocios, personas y la sociedad con las tecnolog??as m??s avanzadas\r\nEn este evento, ellas mismas nos contar??n m??s sobre su papel en estos proyectos, c??mo est??n transformando el futuro, consejos y aprendizajes de su vida profesional, y cu??les son los retos de la mujer en la ingenier??a y en el sector STEAM.','images/images/indra.png','info@indra.com','914805002','Calle De San Basilio n??14','Cordoba',140,'2023-03-05 10:13:35','2023-03-08 14:51:13','2023-03-06T18:00:00Z','2023-03-07T23:00:00Z',6,'18:00',3,4.67,3),
(32,'Engineering the Future','Si te has graduado recientemente o est??s estudiando los ??ltimos cursos de ingenier??a de telecomunicaciones, inform??tica o cualquier otra ingenier??a con vocaci??n de programaci??n o desarrollo de software, crees en el poder de la tecnolog??a para transformar el mundo y quieres llevar la ingenier??a tecnol??gica al siguiente nivel, ??te esperamos!','images/images/indra.png','info@indra.com','914805002','Calle De San Basilio n??14','Cordoba',140,'2023-03-08 10:17:26','2023-03-09 08:45:59','2023-03-18T18:00:00Z','2023-03-20T23:00:00Z',7,'18:00',3,0.00,0),
(35,'OPEN DAY: Junior dise??ador/a gr??fico/a','Grupo Mayoral, s??lida empresa en proceso de crecimiento y transformaci??n, compuesta por distintas sociedades dedicadas a la moda, quiere incorporar a su marca premium Abel&Lula un/a Dise??ador/a Gr??fico/a. Reportando a la responsable de dise??o.','images/images/mayoral.png','info@mayoral.com','958643265','Calle Reyes Cat??licos n??2','Granada',134,'2023-03-08 11:34:05','2023-03-08 20:46:43','2023-03-16T07:30:00Z','2023-03-17T23:00:00Z',3,'07:30',1,0.00,0),
(36,'OPEN DAY: Frontend developer','??Quieres trabajar como desarrollador frontend? ??Quieres conocer de primera mano como trabaja un desarrollador frontend? ??nete al OPEN DAY y pasa 3 d??as junto a los mejores programadores frontend.','images/images/mayoral.png','info@mayoral.com','958642365','Calle Reyes Cat??licos n??2','Granada',134,'2023-03-08 11:37:20','2023-03-08 11:37:56','2023-03-20T07:30:00Z','2023-03-22T23:00:00Z',2,'07:30',0,0.00,0),
(37,'T??cnico SEO','??Quieres aprender a mejorar la visibilidad de tu sitio web en los motores de b??squeda? ??Est??s interesado en conocer las t??cnicas m??s efectivas para optimizar tu contenido y conseguir enlaces externos de calidad?\r\nEntonces, este evento es para ti. Durante nuestro Open Day, tendr??s la oportunidad de aprender de la mano de expertos en SEO y poner en pr??ctica todo lo que aprendas en nuestro taller pr??ctico.','images/images/visionclick.png','info@visionclick.com','953634752','Avenida de Am??rica n??5','Huelva',139,'2023-03-08 11:48:00','2023-03-08 14:52:43','2023-03-23T08:00:00Z','2023-03-25T23:00:00Z',2,'08:00',1,0.00,0),
(38,'Data engineer lead','??Hola! Si est??s interesado en el mundo de la ingenier??a de datos, ??tenemos el evento perfecto para ti!\r\nTe invitamos a nuestro Open Day como Data Engineer Lead, donde tendr??s la oportunidad de conocer m??s sobre c??mo dise??ar, construir y mantener infraestructuras de datos escalables y efectivas.','images/images/wetaca.png','info@wetaca.com','954786521','Avda de la Sanidad P??blica n??1','Cadiz',133,'2023-03-08 11:51:23','2023-03-08 14:59:20','2023-03-05T08:30:00Z','2023-03-07T23:00:00Z',3,'08:30',2,5.00,2),
(39,'OPEN DAY: KYC ','??Atenci??n a todos los interesados en el mundo de KYC! Te invitamos a nuestro Open Day para KYC Junior, donde tendr??s la oportunidad de conocer m??s sobre el mundo de la Conoce a tu Cliente.\r\nAdem??s, tendr??s la oportunidad de interactuar con otros profesionales y aprender de sus experiencias en el campo.\r\n??No te pierdas esta oportunidad ??nica de sumergirte en el mundo de KYC! ??Reg??strate ahora para nuestro Open Day KYC Junior!','images/images/ebury.png','info@ebury.com','957856932','Avenida Ru??z Jim??nez','Jaen',132,'2023-03-08 11:54:35','2023-03-08 15:34:22','2023-03-06T09:00:00Z','2023-03-29T23:00:00Z',2,'09:00',0,0.00,0),
(40,'T??cnico/a de dise??o mec??nico','??Hola! Si te apasiona el mundo del dise??o mec??nico, ??tenemos el evento perfecto para ti! Te invitamos a nuestro Open Day para T??cnico de Dise??o Mec??nico, donde tendr??s la oportunidad de conocer m??s sobre c??mo dise??ar soluciones mec??nicas efectivas para resolver problemas de ingenier??a.','images/images/adecco.png','info@adecco.com','957865963','Paseo de la Estaci??n n??11','Jaen',135,'2023-03-08 11:57:26','2023-03-08 13:56:22','2023-02-10T08:30:00Z','2023-02-13T23:00:00Z',3,'08:30',3,4.33,3),
(41,'Gestionar la flexibilidad en el nuevo marco jur??dico y el papel de los ERTE','Os invitamos al evento \"C??mo gestionar la flexibilidad en el nuevo marco jur??dico y el papel de los ERTES\", que tendr?? lugar el pr??ximo 9 de junio en Barcelona. Se llevar?? a cabo de manera presencial y virtual.\r\n\r\nEn esta jornada se va a reflexionar sobre el impacto que la Reforma Laboral est?? teniendo sobre la gesti??n de la temporalidad y las medidas de flexibilidad en las organizaciones.','images/images/LHH.png','info@lhh.com','951362436','Calle Amor n??11','Sevilla',136,'2023-03-08 11:59:51','2023-03-08 20:47:30','2023-03-11T19:00:00Z','2023-03-13T23:00:00Z',6,'19:00',2,0.00,0),
(42,'OPEN DAY: Fisioterapeuta','??Interesado en el mundo de la fisioterapia? Reg??strate en nuestro Open Day para fisioterapeutas y aprende de expertos en la materia. Descubre c??mo evaluar lesiones musculoesquel??ticas, dise??ar planes de tratamiento personalizados y trabajar con tecnolog??as y herramientas para la terapia f??sica. Interact??a con otros profesionales y aprende de sus experiencias en el campo. ','images/images/tralemto.png','info@tralemto.com','956360321','Avenida Andaluc??a n??36','Huelva',137,'2023-03-08 12:23:35','2023-03-08 15:38:11','2023-03-28T09:00:00Z','2023-03-29T23:00:00Z',3,'09:00',0,0.00,0),
(43,'Software QA tester','??Interesado en el mundo del testing de software? Reg??strate en nuestro Open Day para Software QA Tester y aprende de expertos en la materia. Descubre c??mo realizar pruebas manuales y automatizadas, trabajar con herramientas de automatizaci??n y gestionar el proceso de pruebas. Interact??a con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad ??nica de sumergirte en el mundo del testing de software. ??Ap??ntate ahora!','images/images/novoshore.png','info@novoshore.com','951767868','Calle Severo Ochoa n??23','Malaga',142,'2023-03-08 12:28:48','2023-03-08 12:28:48','2023-03-29T08:00:00Z','2023-03-31T23:00:00Z',2,'08:00',0,0.00,0),
(44,'Trabaja con nosotros ','Para todas nuestras oficinas, buscamos constantemente estudiantes de ??ltimo grado en Ingenier??a (Industrial, Telecomunicaciones, Inform??tica, Aeroespacial, etc.), Arquitectos, ADE, Derecho, Matem??ticos, Estad??sticos, F??sicos y cualquier Doble Grado, con ganas de aprender y afrontar nuevos retos, as?? como tambi??n estudiantes de m??steres.','images/images/pwc.png','info@pwc.com','959654132','Calle Oliva n??24','Jaen',131,'2023-03-08 12:32:05','2023-03-08 15:37:24','2023-03-22T08:00:00Z','2023-03-24T23:00:00Z',10,'08:00',0,0.00,0),
(45,'OPEN DAY: Frontend developer','??Atenci??n a todos los interesados en el mundo del desarrollo frontend! Te invitamos a nuestro Open Day para Frontend Developer, donde tendr??s la oportunidad de conocer m??s sobre c??mo crear interfaces de usuario efectivas y atractivas para aplicaciones web y m??viles.','images/images/kamstrup.png','info@kamstrup.com','952654932','Avenida Jorge Luis Borges n??14','Malaga',141,'2023-03-08 12:37:38','2023-03-08 17:01:48','2023-03-12T08:00:00Z','2023-03-15T23:00:00Z',2,'08:00',1,0.00,0),
(46,'OPEN DAY: Backend developer','??Atenci??n a todos los interesados en el mundo del desarrollo backend! Te invitamos a nuestro Open Day para Backend Developer, donde tendr??s la oportunidad de conocer m??s sobre c??mo crear la l??gica de negocio y funcionalidades de aplicaciones web y m??viles.','images/images/kamstrup.png','info@kamstrup.com','952235164','Avenida Jorge Luis Borges n??14','Malaga',141,'2023-03-08 12:40:59','2023-03-08 14:50:39','2023-03-12T08:00:00Z','2023-03-15T23:00:00Z',2,'08:00',1,0.00,0),
(47,'Ciberseguridad virtual','Reg??strate en nuestro Open Day para Ciberseguridad Virtual y aprende de expertos en la materia. Descubre c??mo proteger la informaci??n y sistemas de empresas y organizaciones, identificar vulnerabilidades y amenazas, y utilizar herramientas y t??cnicas de hacking ??tico para mejorar la seguridad. Aprende tambi??n a trabajar con sistemas de seguridad y monitoreo para detectar y responder a incidentes. Interact??a con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad ??nica de sumergirte en el mundo de la ciberseguridad. ??Reg??strate ahora!','images/images/vodafone.png','info@vodafone.com','958632569','Calle Reyes Cat??licos n??2','Granada',147,'2023-03-08 12:44:24','2023-03-08 15:03:53','2023-03-16T17:00:00Z','2023-03-20T23:00:00Z',3,'17:00',1,0.00,0),
(48,'C# Software Developer','Reg??strate en nuestro Open Day para C# Software Developer y aprende a desarrollar aplicaciones robustas y escalables utilizando C# y el framework .NET. Descubre c??mo trabajar con bases de datos relacionales utilizando tecnolog??as como Entity Framework y LINQ, y c??mo utilizar herramientas y t??cnicas para mejorar la calidad y mantenibilidad del c??digo. Interact??a con otros profesionales y aprende de sus experiencias en el campo. No te pierdas esta oportunidad ??nica de sumergirte en el mundo del desarrollo de software con C#. ??Reg??strate ahora!','images/images/verisk.png','info@verisk.com','953632514','Calle Chirigota n??3','Cadiz',130,'2023-03-08 12:48:31','2023-03-08 12:48:31','2023-03-28T07:30:00Z','2023-03-30T23:00:00Z',2,'07:30',0,0.00,0),
(49,'Intelligent Automation for Business Advantage','??Atenci??n a todos los interesados en la automatizaci??n inteligente en los negocios! Te invitamos a nuestro Open Day para Intelligent Automation for Business Advantage, donde tendr??s la oportunidad de conocer m??s sobre c??mo automatizar procesos de negocio y aumentar la eficiencia en la organizaci??n.\r\n??No te pierdas esta oportunidad ??nica de sumergirte en el mundo de la automatizaci??n inteligente en los negocios! ??Reg??strate ahora para nuestro Open Day Intelligent Automation for Business Advantage!','images/images/accenture.png','info@accenture.com','951659324','Calle Betis n??2','Sevilla',138,'2023-03-08 12:51:09','2023-03-08 20:47:21','2023-03-10T16:00:00Z','2023-03-13T23:00:00Z',4,'16:00',2,0.00,0);
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
