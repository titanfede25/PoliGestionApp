USE [master]
GO
/****** Object:  Database [PoliGestion]    Script Date: 10/7/2023 11:57:33 ******/
CREATE DATABASE [PoliGestion]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PoliGestion', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PoliGestion.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PoliGestion_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PoliGestion_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [PoliGestion] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PoliGestion].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PoliGestion] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PoliGestion] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PoliGestion] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PoliGestion] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PoliGestion] SET ARITHABORT OFF 
GO
ALTER DATABASE [PoliGestion] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PoliGestion] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PoliGestion] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PoliGestion] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PoliGestion] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PoliGestion] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PoliGestion] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PoliGestion] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PoliGestion] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PoliGestion] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PoliGestion] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PoliGestion] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PoliGestion] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PoliGestion] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PoliGestion] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PoliGestion] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PoliGestion] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PoliGestion] SET RECOVERY FULL 
GO
ALTER DATABASE [PoliGestion] SET  MULTI_USER 
GO
ALTER DATABASE [PoliGestion] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PoliGestion] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PoliGestion] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PoliGestion] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PoliGestion] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PoliGestion', N'ON'
GO
ALTER DATABASE [PoliGestion] SET QUERY_STORE = OFF
GO
USE [PoliGestion]
GO
/****** Object:  User [alumno]    Script Date: 10/7/2023 11:57:33 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Dias]    Script Date: 10/7/2023 11:57:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dias](
	[idDia] [int] IDENTITY(1,1) NOT NULL,
	[dia] [varchar](50) NOT NULL,
	[FKPolicia] [int] NULL,
 CONSTRAINT [PK_Dias] PRIMARY KEY CLUSTERED 
(
	[idDia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Policias]    Script Date: 10/7/2023 11:57:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Policias](
	[idPolicia] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[numeroPlaca] [int] NOT NULL,
	[DNI] [int] NOT NULL,
	[fechaNacimiento] [date] NOT NULL,
	[password] [varchar](50) NOT NULL,
	[FKRoles] [int] NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[idPolicia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 10/7/2023 11:57:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[idRol] [int] IDENTITY(1,1) NOT NULL,
	[rol] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Rol] PRIMARY KEY CLUSTERED 
(
	[idRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rutas]    Script Date: 10/7/2023 11:57:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rutas](
	[IdRuta] [int] IDENTITY(1,1) NOT NULL,
	[longitudInicial] [float] NOT NULL,
	[latitudInicial] [float] NOT NULL,
	[direccionInicial] [varchar](max) NOT NULL,
	[longitudFinal] [float] NOT NULL,
	[latitudFinal] [float] NOT NULL,
	[direccionFinal] [varchar](max) NOT NULL,
	[horaInicial] [time](7) NOT NULL,
	[horaFinal] [time](7) NOT NULL,
	[fechaCreacion] [datetime] NOT NULL,
	[limiteValidez] [datetime] NULL,
	[FKDia] [int] NOT NULL,
 CONSTRAINT [PK_Rutas] PRIMARY KEY CLUSTERED 
(
	[IdRuta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Dias] ON 

INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (1, N'Lunes', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (3, N'Martes', 15)
SET IDENTITY_INSERT [dbo].[Dias] OFF
GO
SET IDENTITY_INSERT [dbo].[Policias] ON 

INSERT [dbo].[Policias] ([idPolicia], [nombre], [numeroPlaca], [DNI], [fechaNacimiento], [password], [FKRoles]) VALUES (1, N'dgsadg', 53425, 25432435, CAST(N'1111-11-11' AS Date), N'wgergerg', 2)
INSERT [dbo].[Policias] ([idPolicia], [nombre], [numeroPlaca], [DNI], [fechaNacimiento], [password], [FKRoles]) VALUES (15, N'sdgsdfg', 35643, 34565364, CAST(N'1788-11-11' AS Date), N'agfdgfadfg', 1)
INSERT [dbo].[Policias] ([idPolicia], [nombre], [numeroPlaca], [DNI], [fechaNacimiento], [password], [FKRoles]) VALUES (18, N'Jose Morales', 54232, 26345625, CAST(N'6555-04-25' AS Date), N'gerwgewregrw', 4)
INSERT [dbo].[Policias] ([idPolicia], [nombre], [numeroPlaca], [DNI], [fechaNacimiento], [password], [FKRoles]) VALUES (19, N'Pepe Manaos', 36455, 54376347, CAST(N'2023-08-03' AS Date), N'htrwtrwhwrht', 3)
SET IDENTITY_INSERT [dbo].[Policias] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([idRol], [rol]) VALUES (1, N'Detective')
INSERT [dbo].[Roles] ([idRol], [rol]) VALUES (2, N'Vial')
INSERT [dbo].[Roles] ([idRol], [rol]) VALUES (3, N'Patrullero')
INSERT [dbo].[Roles] ([idRol], [rol]) VALUES (4, N'Aprendiz')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
SET IDENTITY_INSERT [dbo].[Rutas] ON 

INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (3, 5456546, 84646, N'Av DIrectorio', 86468546, 546564, N'Pedernera', CAST(N'12:00:00' AS Time), CAST(N'13:00:00' AS Time), CAST(N'2023-07-10T00:00:00.000' AS DateTime), CAST(N'2023-07-10T15:00:00.000' AS DateTime), 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (18, 5324444, 52344, N'54234523', 5423444, 524355, N'3452444', CAST(N'22:00:00' AS Time), CAST(N'11:00:00' AS Time), CAST(N'2022-04-12T00:00:00.000' AS DateTime), CAST(N'2024-01-20T00:00:00.000' AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[Rutas] OFF
GO
ALTER TABLE [dbo].[Policias]  WITH CHECK ADD  CONSTRAINT [FK_Policias_Roles] FOREIGN KEY([FKRoles])
REFERENCES [dbo].[Roles] ([idRol])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Policias] CHECK CONSTRAINT [FK_Policias_Roles]
GO
ALTER TABLE [dbo].[Rutas]  WITH CHECK ADD  CONSTRAINT [FK_Rutas_Dias] FOREIGN KEY([FKDia])
REFERENCES [dbo].[Dias] ([idDia])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rutas] CHECK CONSTRAINT [FK_Rutas_Dias]
GO
USE [master]
GO
ALTER DATABASE [PoliGestion] SET  READ_WRITE 
GO
