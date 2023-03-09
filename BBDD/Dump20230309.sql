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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `eliminado` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `correo_UNIQUE` (`email`),
  CONSTRAINT `fk_usuario_admin` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `CIF` varchar(128) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `direccion` varchar(128) DEFAULT NULL,
  `descripcion` varchar(512) DEFAULT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NOT NULL DEFAULT current_timestamp(),
  `eliminado` int(1) NOT NULL DEFAULT 0,
  `pathLogo` varchar(128) DEFAULT NULL,
  `urlEmpresa` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `CIF_UNIQUE` (`CIF`),
  UNIQUE KEY `telefono_UNIQUE` (`telefono`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES
(22,143,'Talan','A79425229','919047025','info@talan.com','1383734cc13db894a26e184e8e66da87','Madrid','Calle Raimundo Fernández Villaverde nº8','Os ayudamos a valorizar sus datos y a tener beneficio de             Tecnologías innovadoras para realizar sus proyectos de            transformación y crear valor de forma sostenible. Le ayudamos a integrar software de editores en el corazón de su negocio, recursos humanos, transformaciones de marketing... como SAP, SalesForce, Microsoft, Oracle... Y cooperemos con sus sistemas de información construidos en estas plataformas digitales.','2023-03-06 17:42:14','2023-03-08 12:13:21',0,'images/images/talan.png','www.es.talan.com'),
(23,142,'Novoshore','B93270627','951767868','info@novoshore.com','1383734cc13db894a26e184e8e66da87','Málaga','Calle Severo Ochoa nº23','Ventajas Novoshore nearshoring\r\nLa sede de novoshore se encuentra en Málaga, en la soleada costa española (Costa del Sol) y estamos ayudando a los clientes con sede en la zona EMEA a alcanzar sus objetivos comerciales. Estar ubicado en Málaga tiene muchas ventajas. La externalización de su gestión de infraestructura de TI y otras necesidades de TI a Novoshore tiene muchas otras ventajas.','2023-03-06 17:38:58','2023-03-08 12:24:53',0,'images/images/novoshore.png','www.novoshore.es'),
(24,145,'Babel','B83603191','917452370','info@babelgroup.com','1383734cc13db894a26e184e8e66da87','Las Rozas','Calle Severo Ochoa nº2','Tenemos una solución extremo a extremo: Desde la recepción de la alarma o evento, a la facturación del servicio. Desde la identificación de una avería o un alta, hasta la aceptación del parte de reparación o instalación. Plataforma tecnológica y servicios 24x7 para dar solución integral a una actividad crítica.','2023-03-06 17:47:21','2023-03-08 12:24:53',0,'images/images/babel.png','www.babelgroup.com'),
(25,140,'Indra','A28599033','914805002','info@indra.com','1383734cc13db894a26e184e8e66da87','Alcobendas','Avenida de Bruselas nº35','Indra es una de las principales compañías globales de tecnología y consultoría y el socio tecnológico para las operaciones clave de los negocios de sus clientes en todo el mundo. Su modelo de negocio está basado en una oferta integral de productos propios, con un enfoque end-to-end, de alto valor y con un elevado componente de innovación.','2023-03-06 17:33:28','2023-03-06 17:59:44',0,'images/images/indra.png','www.indra.es'),
(26,134,'Mayoral','A29076049 ','952045204','info@mayoral.com','1383734cc13db894a26e184e8e66da87','Málaga','Calle La Orotava nº118','La estrategia de Mayoral es la de promocionar su diseño y marca con personalidad y estilo propio.\r\n\r\nNuestro objetivo es crear prendas y calzado de moda de buena calidad, al mejor precio posible y entregarlas a tiempo. Confeccionamos más de 30 millones de prendas al año o, como nos gusta pensar, 30 millones de sonrisas.','2023-03-06 17:09:11','2023-03-07 09:49:33',0,'images/images/mayoral.png','www.mayoral.es'),
(27,139,'VisionClick','B93086346','952294306','info@visionclick.com','1383734cc13db894a26e184e8e66da87','Málaga','Avenida Pintor Joaquín Sorolla nº137','Somos una agencia de Marketing Online Formada por un equipo de más de 20 profesionales especializados en SEO, SEM, Social Media, Diseño Web y Diseño Gráfico. Llevamos casi una década ayudando a todo tipo de empresas a crecer y adaptándonos de manera constante a las necesidades del mercado.','2023-03-06 17:26:48','2023-03-07 09:49:33',0,'images/images/visionclick.png','www.visionclick.es'),
(28,133,'Wetaca','B87052007','910379723','info@wetaca.com','1383734cc13db894a26e184e8e66da87','Madrid','Calle Azcona nº36','Desde 2009, nuestras soluciones para las transacciones con divisas han ayudado a todas las industrias, eliminando las barreras comerciales globales a las que se enfrentan muchas organizaciones','2023-03-06 17:05:50','2023-03-07 09:49:56',0,'images/images/wetaca.png','www.wetaca.es'),
(30,132,'Ebury','W8264304J','918293722','info@ebury.com','1383734cc13db894a26e184e8e66da87','Madrid','Paseo La Castellana nº202','Desde 2009, nuestras soluciones para las transacciones con divisas han ayudado a todas las industrias, eliminando las barreras comerciales globales a las que se enfrentan muchas organizaciones','2023-03-06 16:56:19','2023-03-07 09:49:56',0,'images/images/ebury.png','www.ebury.es'),
(31,135,'Adecco','A80903180','914325600','info@adecco.com','1383734cc13db894a26e184e8e66da87','Pozuelo de Alarcón','Cerro de los Gamos nº3','Desde hace 39 años, ayudamos a las personas a encontrar un empleo y a las empresas a mejorar su competitividad a través del talento. Tenemos las soluciones de Recursos Humanos que tu negocio necesita hoy, adaptadas a tu tamaño, sector y momento de actividad.','2023-03-16 17:15:53','2023-03-08 14:47:13',0,'images/images/adecco.png','www.adecco.es'),
(32,136,'LHH','B62501325','902302030','info@lhh.com','1383734cc13db894a26e184e8e66da87','Pozuelo de Alarcón','Cerro de los Gamos nº3','Nuestras soluciones end to end de RR. HH. ayudan a organizaciones y personas alrededor de todo el mundo. A través de nuestras divisiones Career Transition & Mobility, Leadership Development y Recruitment Solutions, logramos crear grandes profesionales. Nuestro trabajo nunca acaba, porque siempre hay otro mañana para el cual prepararse hoy.','2023-03-06 17:19:46','2023-03-08 12:16:59',0,'images/images/LHH.png','www.lhh.es'),
(33,137,'Tralemto','B93301075','951292730','info@tralemto.com','1383734cc13db894a26e184e8e66da87','Málaga','Avenida Pintor Joaquín Sorolla nº137','Llevamos por bandera un impecable código ético y la máxima profesionalidad, comunicándonos siempre de la forma más transparente y sincera. Aunando experiencia y frescor, somos un equipo multidisciplinar que sólo contempla el trato personalizado y natural con nuestros clientes y candidatos.','2023-03-06 17:23:07','2023-03-08 12:16:01',0,'images/images/tralemto.png','www.tralemto.es'),
(35,131,'PWC','B48980007','902021111','info@pwc.com','1383734cc13db894a26e184e8e66da87','Madrid','Paseo La Castellana nº259','El propósito de PwC es generar confianza en la sociedad y resolver problemas importantes. Somos una red de firmas presente en 152 países con más de 327.000 profesionales comprometidos en ofrecer servicios de calidad en auditoría, asesoramiento fiscal y legal, consultoría y transacciones.','2023-03-06 16:52:54','2023-03-07 09:50:21',0,'images/images/pwc.png','www.pwc.es'),
(37,141,'Kamstrup','B87931440','605594388','info@kamstrup.com','1383734cc13db894a26e184e8e66da87','Málaga','Avenida Jorge Luis Borges nº14','Descubra el potencial de la información real\r\nHay una necesidad urgente de encontrar una ruta más ecológica y sostenible. Con nuestras soluciones de medición inteligente, nos comprometemos a ofrecer la información práctica necesaria para ayudar a nuestros clientes a garantizar el suministro de agua potable y energía. Si conocemos la mejor manera de hacer las cosas, nuestro impacto será mayor.','2023-03-06 17:36:31','2023-03-06 17:36:31',0,'images/images/kamstrup.png','www.kamstrup'),
(41,147,'Vodafone','A80907397','22122','info@vodafone.com','1383734cc13db894a26e184e8e66da87','Madrid',' Avenida de América nº115','El lugar que marcará el rumbo de la tecnología en Europa\r\nEste centro de investigación y desarrollo tecnológico está destinado a convertirse en foco de innovación y referencia en toda Europa.\r\nLocalizado en Málaga, una Smart City estratégica, generará acuerdos con empresas, universidades e instituciones para atraer talento y preparar a las nuevas generaciones de expertos. ','2023-03-06 17:51:45','2023-03-06 17:51:45',0,'images/images/vodafone.png','www.vodafone.es'),
(42,130,'Verisk','N0060418A','952275120','info@verisk.com','1383734cc13db894a26e184e8e66da87','Málaga','Calle Don Cristian nº2','está especializada en el desarrollo de soluciones y servicios de análisis predictivo y apoyo a la toma de decisiones en las áreas de suscripción, tarificación, reclamaciones de seguros, prevención de fraudes, prevención de catástrofes y riesgos climáticos, ciencia actuarial, previsión económica, etc','2023-03-06 16:51:12','2023-03-07 09:49:33',0,'images/images/verisk.png','www.verisk.com'),
(43,138,'Accenture','A80949175','915966000','info@accenture.com','1383734cc13db894a26e184e8e66da87','Madrid','Plaza Pablo Ruiz Picasso nº1','Reimagina tu carrera\r\nForjarse una carrera implica decidir qué y quién quieres ser. Hacer explotar tu curiosidad y desarrollar tu mejor versión.\r\nAquí podrás combinar tu ingenio con las últimas tecnologías para hacer realidad cosas increíbles.\r\nJuntos, podemos impulsar un cambio positivo y duradero.','2023-03-06 17:24:38','2023-03-07 09:50:21',0,'images/images/accenture.png','www.accenture.es'),
(44,148,'Releevant','B67199208','695304040','info@releevant.com','1383734cc13db894a26e184e8e66da87','Málaga','Avenida de Sor Teresa Prat nº15','Releevant es una escuela de formación tecnológica enfocada en la incorporación y especialización profesional en el mercado tech. Nuestros bootcamps, son formaciones full-time presenciales, donde en tan sólo 5 meses aprenderás desde 0 hasta obtener todos los conocimientos necesarios para trabajar como desarrollador/a. Con +200 estudiantes formados, podemos validar nuestra empleabilidad. Éste es nuestro principal objetivo.','2023-03-07 10:00:33','2023-03-07 10:00:33',0,'images/images/releevant.png','www.releevant.com');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenprueba`
--

DROP TABLE IF EXISTS `imagenprueba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagenprueba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(126) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenprueba`
--

LOCK TABLES `imagenprueba` WRITE;
/*!40000 ALTER TABLE `imagenprueba` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenprueba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestascomentarios`
--

DROP TABLE IF EXISTS `respuestascomentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuestascomentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idComentario` int(10) unsigned NOT NULL,
  `respuesta` varchar(256) NOT NULL,
  `URL` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comentarios_respCom_idx` (`idComentario`),
  CONSTRAINT `fk_comentarios_respCom` FOREIGN KEY (`idComentario`) REFERENCES `comentarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestascomentarios`
--

LOCK TABLES `respuestascomentarios` WRITE;
/*!40000 ALTER TABLE `respuestascomentarios` DISABLE KEYS */;
INSERT INTO `respuestascomentarios` VALUES
(5,19,'Muchas gracias por tu tiempo, nos gustó tu actitud durante el evento y en cuanto salga una vacante que encaje con tu perfil le llamaremos.',NULL),
(6,26,'Nos gustó mucho su actitud, guardamos sus datos para cuando salga una vacante que encaje con su perfil, le llamaremos',NULL);
/*!40000 ALTER TABLE `respuestascomentarios` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestastest`
--

LOCK TABLES `respuestastest` WRITE;
/*!40000 ALTER TABLE `respuestastest` DISABLE KEYS */;
INSERT INTO `respuestastest` VALUES
(19,7,9,12,12,7,12,9,12,9,12,80);
/*!40000 ALTER TABLE `respuestastest` ENABLE KEYS */;
UNLOCK TABLES;

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
(0,'Manejar con habilidad pequeñas piezas y herramientas como agujas, manecillas, joyas, piezas de relojería, etc.'),
(1,'Tratar y hablar con tacto a las personas'),
(2,'Ser jefe competente de un grupo, equipo o sociedad'),
(3,'Expresarte con facilidad en clase o al participar con tus amigos'),
(4,'Dibujar casas, objetos, figuras humanas, etc.'),
(5,'Cantar en un orfeón o grupo coral'),
(6,'Guiar en forma correcta y ordenada'),
(7,'Entender principios y experimentos de Biología '),
(8,'Ejecutar con rapidez y exactitud mecanizaciones matemáticas'),
(9,'Armar y componer objetos mecánicos como chapas, timbres, etc.'),
(10,'Actividades que requieren destreza manual'),
(11,'Ser miembro activo y útil en un club o sociedad'),
(12,'Organizar y dirigir festivales, encuentros deportivos, excursiones o campañas sociales'),
(13,'Redactar composiciones o artículos periodísticos'),
(14,'Pintar paisajes'),
(15,'Aprender a tocar un instrumento musical'),
(16,'Ordenar y clasificar debidamente documentos de una oficina'),
(17,'Entender principios y expreimentos de Física'),
(18,'Resolver problemas de Matemáticas'),
(19,'Desarmar, armar y componer objetos complicados'),
(20,'Manejar con habilidad herramientas de carpintería'),
(21,'Colaborar con otros para el bien de la comunidad'),
(22,'Convencer a otros para que hagan lo que tú crees que deben hacer'),
(23,'Componer versos serios o jocosos'),
(24,'Decorar artísticamente un salón, corredor, escenario o patio para un festival'),
(25,'Distinguir cuando alguien desentona en las canciones o piezas musicales'),
(26,'Contestar y redactar correctamente oficios y cartas'),
(27,'Entender principios y experimentos de Química'),
(28,'Resolver rompecabezas numéricos'),
(29,'Resolver rompecabezas de alambre o de madera'),
(30,'Manejar con facilidad herramientas mecánicas como pinzas'),
(31,'Saber escuchar a otros con paciencia y comprender su punto de vista'),
(32,'Dar órdenes a otros con seguridad y naturalidad'),
(33,'Escribir cuentos, narraciones o historietas'),
(34,'Modelar con barro, plastilina o grabar madera'),
(35,'Aprender a entonar correctamente las cancinoes de moda'),
(36,'Anotar y manejar con exactitud y rapidez nombres, números y otros datos'),
(37,'Entender principios y hechos económicos y sociales'),
(38,'Resolver problemas de Álgebra'),
(39,'Armar y componer muebles');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role` enum('0','1','2','3') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES
(73,'0'),
(80,'2'),
(81,'2'),
(118,'2'),
(119,'2'),
(120,'2'),
(121,'2'),
(122,'2'),
(123,'2'),
(124,'2'),
(125,'2'),
(126,'2'),
(127,'2'),
(128,'2'),
(129,'1'),
(130,'1'),
(131,'1'),
(132,'1'),
(133,'1'),
(134,'1'),
(135,'1'),
(136,'1'),
(137,'1'),
(138,'1'),
(139,'1'),
(140,'1'),
(141,'1'),
(142,'1'),
(143,'1'),
(144,'1'),
(145,'1'),
(146,'1'),
(147,'1'),
(148,'1');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09  9:48:27
