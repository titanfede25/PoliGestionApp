using System.Data.SqlClient;
using System;
using Dapper;
using System.Collections.Generic;

namespace MVC.Models
{
    public static class BD
    {
        private static string _connectionString =  @"Server=A-PHZ2-CIDI-039;DataBase=PoliGestion;Trusted_Connection=True";
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
    }
}