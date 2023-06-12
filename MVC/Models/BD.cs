using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;

namespace MVC.Models
{
    public static class BD
    {
        private static string _connectionString =  @"Server=A-PHZ2-CIDI-038;DataBase=PoliGestion;Trusted_Connection=True";
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
        string sql = "INSERT INTO Policias VALUES (@pDNI, @pNombre, @pNumeroPlaca, @pRol, @pFechaNacimiento, @pPassword, @pIdPolicia)";
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new {pDNI = Pol.DNI, pNombre = Pol.Nombre, pNumeroPlaca = Pol.NumeroPlaca, pRol = Pol.Rol, pFechaNacimiento=Pol.FechaNacimiento, pPassword=Pol.Password, pIdPolicia=Pol.Idpolicia});
        }
        }
        public static void EliminarPolicia(int idPolicia){
            string sql = "DELETE FROM Autos WHERE idPolicia = @pIdPolicia";
            using(SqlConnection db = new SqlConnection(_connectionString)){
                db.Execute(sql, new { pIdPolicia = idPolicia });
            }
        }
    }
}