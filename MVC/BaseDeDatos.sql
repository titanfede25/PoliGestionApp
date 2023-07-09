USE [master]
GO
/****** Object:  Database [PoliGestion]    Script Date: 9/7/2023 18:15:11 ******/
CREATE DATABASE [PoliGestion]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PoliGestion', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\PoliGestion.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PoliGestion_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\PoliGestion_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
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
ALTER DATABASE [PoliGestion] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [PoliGestion] SET QUERY_STORE = OFF
GO
USE [PoliGestion]
GO
/****** Object:  Table [dbo].[Dias]    Script Date: 9/7/2023 18:15:11 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Policias]    Script Date: 9/7/2023 18:15:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Policias](
	[idPolicia] [int] IDENTITY(1,1) NOT NULL,
	[DNI] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[numeroPlaca] [varchar](50) NOT NULL,
	[fechaNacimiento] [date] NOT NULL,
	[password] [varchar](max) NOT NULL,
	[FKRoles] [int] NOT NULL,
	[FKRutas] [int] NULL,
 CONSTRAINT [PK_Policias] PRIMARY KEY CLUSTERED 
(
	[idPolicia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 9/7/2023 18:15:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[idRoles] [int] IDENTITY(1,1) NOT NULL,
	[roles] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Rol] PRIMARY KEY CLUSTERED 
(
	[idRoles] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rutas]    Script Date: 9/7/2023 18:15:11 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Policias] ON 

INSERT [dbo].[Policias] ([idPolicia], [DNI], [nombre], [numeroPlaca], [fechaNacimiento], [password], [FKRoles], [FKRutas]) VALUES (1, 65443345, N'jose', N'25346', CAST(N'1111-11-11' AS Date), N'eeeeeerrrrr', 2, NULL)
SET IDENTITY_INSERT [dbo].[Policias] OFF
GO
SET IDENTITY_INSERT [dbo].[Rol] ON 

INSERT [dbo].[Rol] ([idRoles], [roles]) VALUES (1, N'Vial')
INSERT [dbo].[Rol] ([idRoles], [roles]) VALUES (2, N'Detective')
INSERT [dbo].[Rol] ([idRoles], [roles]) VALUES (3, N'Patrullero')
INSERT [dbo].[Rol] ([idRoles], [roles]) VALUES (4, N'Aprendiz')
SET IDENTITY_INSERT [dbo].[Rol] OFF
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
