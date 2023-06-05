using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;

namespace MVC.Models
{
    public static class BD
    {
        private static string _connectionString =  @"Server=A-PHZ2-CIDI-024;DataBase=PoliGestion;Trusted_Connection=True";
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
        string sql = "INSERT INTO Policias VALUES (@pIdAuto, @pIdMarca, @pMarca, @pModelo, @pPrecio, @pFechaCreacion, @pFoto1, @pFoto2, @pFoto3)";
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new { pIdAuto=Aut.IdAuto, pIdMarca = Aut.IdMarca, pMarca = Aut.Marca, pModelo = Aut.Modelo, pPrecio = Aut.Precio, pFechaCreacion=Aut.FechaCreacion, pFoto1=Aut.Foto1, pFoto2=Aut.Foto2, pFoto3=Aut.Foto3 });
        }
        }

        public static void EliminarAuto(int IdAuto){
            string sql = "DELETE FROM Autos WHERE IdAuto = @pIdAuto";
            using(SqlConnection db = new SqlConnection(_connectionString)){
                db.Execute(sql, new { pIdAuto = IdAuto });
            }
        }

        public static Auto ObtenerAutos(int IdMarca)
        {
            Auto NuevoAuto = null;
            string sql = "SELECT * FROM Autos WHERE IdMarca = @pid";
            using(SqlConnection db = new SqlConnection(_connectionString))
            {
                NuevoAuto = db.QueryFirstOrDefault<Auto>(sql, new {pId = IdMarca});
            }
            return NuevoAuto;
        }
    }
}