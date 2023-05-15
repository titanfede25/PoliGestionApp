import sql from 'mssql';
import configDB from '../models/db.js';

export const getById = async (id) => {
    const conn      = await sql.connect(configDB);
    const results   = await conn.request().input('pId', sql.Int, id).query('SELECT * FROM Rutas where fkPolicia = @pId');
    return results.recordset;
}