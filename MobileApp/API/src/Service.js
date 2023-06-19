import sql from 'mssql';
import configDB from './db.js';

/*export const getById = async (id, dia) => {
    const conn      = await sql.connect(configDB);
    const results   = await conn.request().input('pId', sql.Int, id).input('pDia', sql.Int, dia).query('SELECT * FROM Rutas inner join Dias on Rutas.FKDia=Dias.idDia inner join Policias on Dias.FKPolicia = Policias.idPolicia where Policias.DNI = @pId and Rutas.FKDia = @pDia'); 
    return results.recordset;
}*/

export const getPolicia = async (dni, contraseña) => {
    const conn = await sql.connect(configDB);
    const results = await conn
        .request()
        .input('pDni', sql.VarChar, dni)
        .input('pContraseña', sql.VarChar, contraseña)
        .query('SELECT * from Policias where DNI=@pDni and password=@pContraseña');

    if (results.recordset.length > 0) {
        return results.recordset[0];
    } else {
        return null;
    }
};
