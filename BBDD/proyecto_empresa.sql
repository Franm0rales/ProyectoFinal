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
(22,143,'Talan','A79425229','919047025','info@talan.com','1383734cc13db894a26e184e8e66da87','Madrid','Calle Raimundo Fern??ndez Villaverde n??8','Os ayudamos a valorizar sus datos y a tener beneficio de             Tecnolog??as innovadoras para realizar sus proyectos de            transformaci??n y crear valor de forma sostenible. Le ayudamos a integrar software de editores en el coraz??n de su negocio, recursos humanos, transformaciones de marketing... como SAP, SalesForce, Microsoft, Oracle... Y cooperemos con sus sistemas de informaci??n construidos en estas plataformas digitales.','2023-03-06 17:42:14','2023-03-08 12:13:21',0,'images/images/talan.png','www.es.talan.com'),
(23,142,'Novoshore','B93270627','951767868','info@novoshore.com','1383734cc13db894a26e184e8e66da87','M??laga','Calle Severo Ochoa n??23','Ventajas Novoshore nearshoring\r\nLa sede de novoshore se encuentra en M??laga, en la soleada costa espa??ola (Costa del Sol) y estamos ayudando a los clientes con sede en la zona EMEA a alcanzar sus objetivos comerciales. Estar ubicado en M??laga tiene muchas ventajas. La externalizaci??n de su gesti??n de infraestructura de TI y otras necesidades de TI a Novoshore tiene muchas otras ventajas.','2023-03-06 17:38:58','2023-03-08 12:24:53',0,'images/images/novoshore.png','www.novoshore.es'),
(24,145,'Babel','B83603191','917452370','info@babelgroup.com','1383734cc13db894a26e184e8e66da87','Las Rozas','Calle Severo Ochoa n??2','Tenemos una soluci??n extremo a extremo: Desde la recepci??n de la alarma o evento, a la facturaci??n del servicio. Desde la identificaci??n de una aver??a o un alta, hasta la aceptaci??n del parte de reparaci??n o instalaci??n. Plataforma tecnol??gica y servicios 24x7 para dar soluci??n integral a una actividad cr??tica.','2023-03-06 17:47:21','2023-03-08 12:24:53',0,'images/images/babel.png','www.babelgroup.com'),
(25,140,'Indra','A28599033','914805002','info@indra.com','1383734cc13db894a26e184e8e66da87','Alcobendas','Avenida de Bruselas n??35','Indra es una de las principales compa????as globales de tecnolog??a y consultor??a y el socio tecnol??gico para las operaciones clave de los negocios de sus clientes en todo el mundo. Su modelo de negocio est?? basado en una oferta integral de productos propios, con un enfoque end-to-end, de alto valor y con un elevado componente de innovaci??n.','2023-03-06 17:33:28','2023-03-06 17:59:44',0,'images/images/indra.png','www.indra.es'),
(26,134,'Mayoral','A29076049 ','952045204','info@mayoral.com','1383734cc13db894a26e184e8e66da87','M??laga','Calle La Orotava n??118','La estrategia de Mayoral es la de promocionar su dise??o y marca con personalidad y estilo propio.\r\n\r\nNuestro objetivo es crear prendas y calzado de moda de buena calidad, al mejor precio posible y entregarlas a tiempo. Confeccionamos m??s de 30 millones de prendas al a??o o, como nos gusta pensar, 30 millones de sonrisas.','2023-03-06 17:09:11','2023-03-07 09:49:33',0,'images/images/mayoral.png','www.mayoral.es'),
(27,139,'VisionClick','B93086346','952294306','info@visionclick.com','1383734cc13db894a26e184e8e66da87','M??laga','Avenida Pintor Joaqu??n Sorolla n??137','Somos una agencia de Marketing Online Formada por un equipo de m??s de 20 profesionales especializados en SEO, SEM, Social Media, Dise??o Web y Dise??o Gr??fico. Llevamos casi una d??cada ayudando a todo tipo de empresas a crecer y adapt??ndonos de manera constante a las necesidades del mercado.','2023-03-06 17:26:48','2023-03-07 09:49:33',0,'images/images/visionclick.png','www.visionclick.es'),
(28,133,'Wetaca','B87052007','910379723','info@wetaca.com','1383734cc13db894a26e184e8e66da87','Madrid','Calle Azcona n??36','Desde 2009, nuestras soluciones para las transacciones con divisas han ayudado a todas las industrias, eliminando las barreras comerciales globales a las que se enfrentan muchas organizaciones','2023-03-06 17:05:50','2023-03-07 09:49:56',0,'images/images/wetaca.png','www.wetaca.es'),
(30,132,'Ebury','W8264304J','918293722','info@ebury.com','1383734cc13db894a26e184e8e66da87','Madrid','Paseo La Castellana n??202','Desde 2009, nuestras soluciones para las transacciones con divisas han ayudado a todas las industrias, eliminando las barreras comerciales globales a las que se enfrentan muchas organizaciones','2023-03-06 16:56:19','2023-03-07 09:49:56',0,'images/images/ebury.png','www.ebury.es'),
(31,135,'Adecco','A80903180','914325600','info@adecco.com','1383734cc13db894a26e184e8e66da87','Pozuelo de Alarc??n','Cerro de los Gamos n??3','Desde hace 39 a??os, ayudamos a las personas a encontrar un empleo y a las empresas a mejorar su competitividad a trav??s del talento. Tenemos las soluciones de Recursos Humanos que tu negocio necesita hoy, adaptadas a tu tama??o, sector y momento de actividad.','2023-03-16 17:15:53','2023-03-08 14:47:13',0,'images/images/adecco.png','www.adecco.es'),
(32,136,'LHH','B62501325','902302030','info@lhh.com','1383734cc13db894a26e184e8e66da87','Pozuelo de Alarc??n','Cerro de los Gamos n??3','Nuestras soluciones end to end de RR. HH. ayudan a organizaciones y personas alrededor de todo el mundo. A trav??s de nuestras divisiones Career Transition & Mobility, Leadership Development y Recruitment Solutions, logramos crear grandes profesionales. Nuestro trabajo nunca acaba, porque siempre hay otro ma??ana para el cual prepararse hoy.','2023-03-06 17:19:46','2023-03-08 12:16:59',0,'images/images/LHH.png','www.lhh.es'),
(33,137,'Tralemto','B93301075','951292730','info@tralemto.com','1383734cc13db894a26e184e8e66da87','M??laga','Avenida Pintor Joaqu??n Sorolla n??137','Llevamos por bandera un impecable c??digo ??tico y la m??xima profesionalidad, comunic??ndonos siempre de la forma m??s transparente y sincera. Aunando experiencia y frescor, somos un equipo multidisciplinar que s??lo contempla el trato personalizado y natural con nuestros clientes y candidatos.','2023-03-06 17:23:07','2023-03-08 12:16:01',0,'images/images/tralemto.png','www.tralemto.es'),
(35,131,'PWC','B48980007','902021111','info@pwc.com','1383734cc13db894a26e184e8e66da87','Madrid','Paseo La Castellana n??259','El prop??sito de PwC es generar confianza en la sociedad y resolver problemas importantes. Somos una red de firmas presente en 152 pa??ses con m??s de 327.000 profesionales comprometidos en ofrecer servicios de calidad en auditor??a, asesoramiento fiscal y legal, consultor??a y transacciones.','2023-03-06 16:52:54','2023-03-07 09:50:21',0,'images/images/pwc.png','www.pwc.es'),
(37,141,'Kamstrup','B87931440','605594388','info@kamstrup.com','1383734cc13db894a26e184e8e66da87','M??laga','Avenida Jorge Luis Borges n??14','Descubra el potencial de la informaci??n real\r\nHay una necesidad urgente de encontrar una ruta m??s ecol??gica y sostenible. Con nuestras soluciones de medici??n inteligente, nos comprometemos a ofrecer la informaci??n pr??ctica necesaria para ayudar a nuestros clientes a garantizar el suministro de agua potable y energ??a. Si conocemos la mejor manera de hacer las cosas, nuestro impacto ser?? mayor.','2023-03-06 17:36:31','2023-03-06 17:36:31',0,'images/images/kamstrup.png','www.kamstrup'),
(41,147,'Vodafone','A80907397','22122','info@vodafone.com','1383734cc13db894a26e184e8e66da87','Madrid',' Avenida de Am??rica n??115','El lugar que marcar?? el rumbo de la tecnolog??a en Europa\r\nEste centro de investigaci??n y desarrollo tecnol??gico est?? destinado a convertirse en foco de innovaci??n y referencia en toda Europa.\r\nLocalizado en M??laga, una Smart City estrat??gica, generar?? acuerdos con empresas, universidades e instituciones para atraer talento y preparar a las nuevas generaciones de expertos. ','2023-03-06 17:51:45','2023-03-06 17:51:45',0,'images/images/vodafone.png','www.vodafone.es'),
(42,130,'Verisk','N0060418A','952275120','info@verisk.com','1383734cc13db894a26e184e8e66da87','M??laga','Calle Don Cristian n??2','est?? especializada en el desarrollo de soluciones y servicios de an??lisis predictivo y apoyo a la toma de decisiones en las ??reas de suscripci??n, tarificaci??n, reclamaciones de seguros, prevenci??n de fraudes, prevenci??n de cat??strofes y riesgos clim??ticos, ciencia actuarial, previsi??n econ??mica, etc','2023-03-06 16:51:12','2023-03-07 09:49:33',0,'images/images/verisk.png','www.verisk.com'),
(43,138,'Accenture','A80949175','915966000','info@accenture.com','1383734cc13db894a26e184e8e66da87','Madrid','Plaza Pablo Ruiz Picasso n??1','Reimagina tu carrera\r\nForjarse una carrera implica decidir qu?? y qui??n quieres ser. Hacer explotar tu curiosidad y desarrollar tu mejor versi??n.\r\nAqu?? podr??s combinar tu ingenio con las ??ltimas tecnolog??as para hacer realidad cosas incre??bles.\r\nJuntos, podemos impulsar un cambio positivo y duradero.','2023-03-06 17:24:38','2023-03-07 09:50:21',0,'images/images/accenture.png','www.accenture.es'),
(44,148,'Releevant','B67199208','695304040','info@releevant.com','1383734cc13db894a26e184e8e66da87','M??laga','Avenida de Sor Teresa Prat n??15','Releevant es una escuela de formaci??n tecnol??gica enfocada en la incorporaci??n y especializaci??n profesional en el mercado tech. Nuestros bootcamps, son formaciones full-time presenciales, donde en tan s??lo 5 meses aprender??s desde 0 hasta obtener todos los conocimientos necesarios para trabajar como desarrollador/a. Con +200 estudiantes formados, podemos validar nuestra empleabilidad. ??ste es nuestro principal objetivo.','2023-03-07 10:00:33','2023-03-07 10:00:33',0,'images/images/releevant.png','www.releevant.com');
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
