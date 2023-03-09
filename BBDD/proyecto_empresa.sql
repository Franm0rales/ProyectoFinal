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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09  9:50:39
