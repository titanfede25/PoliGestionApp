using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;

namespace MVC.Models
{
    public static class BD
    {
        private static string _connectionString =  @"Server=DESKTOP-HQIE6V6\SQLEXPRESS;DataBase=PoliGestion;Trusted_Connection=True";
        public static List<Policia> ListarPolicias()
        {
            List<Policia> lista = new List<Policia>();
            string sql = "SELECT * FROM Policias";
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
        string sql = "INSERT INTO Policias VALUES (@pDNI, @pNombre, @pNumeroPlaca, @pFKRoles, @pFKRutas, @pFechaNacimiento, @pPassword)";
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pFKRoles = Pol.FkRoles, pFKRutas = Pol.FkRutas, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password});
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

        public static Policia ObtenerPolicias(int idPolicia)
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
            string sql = "UPDATE Policias set DNI = @pDNI, nombre = @pNombre, numeroPlaca = @pNumeroPlaca, rol = @pRol, fechaNacimiento = @pFechaNacimiento, password = @pPassword, FKRoles = @pFKroles, FKRutas = @pFKutas WHERE IdPolicia = @pId";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pRol = Pol.Rol, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password, pFKroles=Pol.FkRoles, pFKutas=Pol.FkRutas, pId = IdPolicia});
            }
        } 
    }
}