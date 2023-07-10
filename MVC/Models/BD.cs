using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;

namespace MVC.Models
{
    public static class BD
    {
        private static string _connectionString =  @"Server=A-PHZ2-CIDI-034;DataBase=PoliGestion;Trusted_Connection=True";
        public static List<Policia> ListarPolicias()
        {
            List<Policia> lista = new List<Policia>();
            string sql = "SELECT Policias.idPolicia, Policias.nombre, Policias.numeroPlaca, Policias.DNI, Policias.password, Policias.fechaNacimiento, Policias.FKRoles, "+ 
             "(Select count (*) from Dias where Dias.FKPolicia = Policias.idPolicia) as CantidadRutas FROM Policias";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                lista = db.Query<Policia>(sql).AsList();
            }
            return lista;
        }
        public static List<Roles> ListarRoles()
        {
            List<Roles> lista = new List<Roles>();
            string sql = "SELECT * FROM Roles";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                lista = db.Query<Roles>(sql).AsList();
            }
            return lista;
        }
        public static void AgregarPolicia(Policia Pol){
        string sql = "INSERT INTO Policias (nombre, numeroPlaca, DNI, fechaNacimiento, password, FKRoles ) VALUES (@pNombre, @pNumeroPlaca, @pDNI, @pFechaNacimiento, @pPassword, @pFKRoles)";
        Console.WriteLine("El rol a guardar es: "+Pol.FkRoles);
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pFKRoles = Pol.FkRoles, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password});
        }
        }
        public static void EliminarPolicia(int idPolicia)
        {
            string sql = "DELETE FROM Policias WHERE idPolicia = @pIdPolicia";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                db.Execute(sql, new { pIdPolicia = idPolicia });
            }
        }

        public static Policia ObtenerPolicia(int idPolicia)
        {
            Policia NuevoPoli;
            string sql = "SELECT * FROM Policias WHERE idPolicia = @pIdPolicia";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                NuevoPoli = db.QueryFirstOrDefault<Policia>(sql, new {pIdPolicia = idPolicia});
            }
            return NuevoPoli;
        }
        public static void ModificarPolicia(Policia Pol, int IdPolicia)
        {
            string sql = "UPDATE Policias set DNI = @pDNI, nombre = @pNombre, numeroPlaca = @pNumeroPlaca, fechaNacimiento = @pFechaNacimiento, password = @pPassword, FKRoles = @pFKroles WHERE IdPolicia = @pId";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password, pFKroles=Pol.FkRoles, pId = IdPolicia});
            }
        } 
    }
}