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
        public static void AgregarPolicia(Policia Pol){
        string sql = "INSERT INTO Policias VALUES (@pDNI, @pNombre, @pNumeroPlaca, @pRol, @pFechaNacimiento, @pPassword)";
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pRol = Pol.Rol, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password});
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
        public static void ModificarPolicia(Policia Pol, int Idpolicia)
        {
            string sql = "UPDATE Policia set DNI = @pDNI, nombre = @pNombre, numeroPlaca = @pNumeroPlaca, rol = @pRol, fechaNacimiento = @pFechaNacimiento, password = @pPassword WHERE idPolicia = @pId";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                db.Execute(sql, new {pId = Pol.Idpolicia, pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pRol = Pol.Rol, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password});
            }
        }  
    }
}