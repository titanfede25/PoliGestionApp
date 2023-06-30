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
/****** Object:  User [Policia]    Script Date: 5/6/2023 12:04:00 ******/
/****** Object:  Table [dbo].[Dias]    Script Date: 5/6/2023 12:04:00 ******/
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
/****** Object:  Table [dbo].[Policias]    Script Date: 5/6/2023 12:04:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Policias](
	[DNI] [int] NOT NULL,
	[nombre] [varchar](max) NOT NULL,
	[numeroPlaca] [varchar](max) NOT NULL,
	[rol] [varchar](max) NOT NULL,
	[fechaNacimiento] [date] NOT NULL,
	[password] [varchar](max) NOT NULL,
	[idPolicia] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Policias] PRIMARY KEY CLUSTERED 
(
	[idPolicia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rutas]    Script Date: 5/6/2023 12:04:00 ******/
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
	[horaInicial] [time] NOT NULL,
	[horaFinal] [time] NOT NULL,
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

INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (1, N'lunes', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (2, N'martes', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (3, N'miércoles', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (4, N'jueves', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (5, N'viernes', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (6, N'sábado', 1)
INSERT [dbo].[Dias] ([idDia], [dia], [FKPolicia]) VALUES (7, N'domingo', 1)
SET IDENTITY_INSERT [dbo].[Dias] OFF
GO
SET IDENTITY_INSERT [dbo].[Policias] ON 

INSERT [dbo].[Policias] ([DNI], [nombre], [numeroPlaca], [rol], [fechaNacimiento], [password], [idPolicia]) VALUES (47206175, N'Federico Sznajderhaus', N'placa', N'Vial', CAST(N'2006-07-04' AS Date), N'1234', 1)
SET IDENTITY_INSERT [dbo].[Policias] OFF
GO
SET IDENTITY_INSERT [dbo].[Rutas] ON 

INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (3, -3460423425039409, -58415583984804880, N'Billinghurst 471', -3460537606827656, -5841867611313886, N'Sarmiento 3802', CAST(N'2023-05-15T06:00:00.000' AS DateTime), CAST(N'2023-05-15T08:00:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), CAST(N'2023-06-06T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (6, -34605393729721284, -5841859296466615, N'Sarmiento 3802', -3459169367097808, -58419275116615152, N'Avenida Medrano, Costa Rica &, C1176 Buenos Aires', CAST(N'2023-05-15T08:00:00.000' AS DateTime), CAST(N'2023-05-15T09:30:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), CAST(N'2023-06-06T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (7, -3459169367097808, -58419275116615152, N'Avenida Medrano, Costa Rica &, C1176 Buenos Aires', -3458927710667122, -5841617847273245, N'Medrano, Charcas y, 1746 Palermo', CAST(N'2023-05-15T09:30:00.000' AS DateTime), CAST(N'2023-05-15T11:00:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (11, -3458927710667122, -5841617847273245, N'Medrano, Charcas y, 1746 Palermo', -34597435629721472, -584077497007658, N'999,C1170ACQ, Dr. Tomás Manuel de Anchorena 901, C1170ACQ CABA', CAST(N'2023-05-15T11:00:00.000' AS DateTime), CAST(N'2023-05-15T12:30:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (12, -3459877367461269, -5839869469500792, N'Pres. José Evaristo Uriburu 1027, C1114 AAA, Buenos Aires', -34597882704369056, -58392777361689920, N'Av. Callao 951, C1021 CABA', CAST(N'2023-05-15T14:00:00.000' AS DateTime), CAST(N'2023-05-15T15:00:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[Rutas] ([IdRuta], [longitudInicial], [latitudInicial], [direccionInicial], [longitudFinal], [latitudFinal], [direccionFinal], [horaInicial], [horaFinal], [fechaCreacion], [limiteValidez], [FKDia]) VALUES (13, -34597882704369056, -58392777361689920, N'Av. Callao 951, C1021 CABA', -34604243420982184, -5841556898867309, N'Billinghurst 471, C1174 CABA', CAST(N'2023-05-15T15:00:00.000' AS DateTime), CAST(N'2023-05-15T16:00:00.000' AS DateTime), CAST(N'2023-06-05T00:00:00.000' AS DateTime), NULL, 1)
SET IDENTITY_INSERT [dbo].[Rutas] OFF
GO
ALTER TABLE [dbo].[Dias]  WITH CHECK ADD  CONSTRAINT [FK_Dias_Policias] FOREIGN KEY([FKPolicia])
REFERENCES [dbo].[Policias] ([idPolicia])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dias] CHECK CONSTRAINT [FK_Dias_Policias]
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


USE [master]
GO
CREATE LOGIN [Policia] WITH PASSWORD=N'Policia', DEFAULT_DATABASE=[PoliGestion], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO
USE [PoliGestion]
GO
CREATE USER [Policia] FOR LOGIN [Policia]
GO
USE [PoliGestion]
GO
ALTER ROLE [db_owner] ADD MEMBER [Policia]
GO
