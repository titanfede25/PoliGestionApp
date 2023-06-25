import sql from 'mssql';
import configDB from './db.js';

export const getPolicia = async (dni, contraseña) => {
    const conn = await sql.connect(configDB);
    const results = await conn
        .request()
        .input('pDni', sql.VarChar, dni)
        .input('pContraseña', sql.VarChar, contraseña)
        .query('SELECT idPolicia from Policias where DNI=@pDni and password=@pContraseña');

    if (results.recordset.length > 0) {
        return results.recordset[0];
    } else {
        return null;
    }
};
export const getRutas = async (idPolicia) => {
    const conn = await sql.connect(configDB);
    let dayOfWeekName = new Date().toLocaleString('default', {weekday: 'long'});

    const results = await conn
        .request()
        .input('pIdPolicia', sql.Int, idPolicia)
        .input('pDia', sql.VarChar, dayOfWeekName)
        .query('SELECT Dias.dia, rutas.* from Policias inner join Dias on Policias.idPolicia = Dias.FKPolicia inner join Rutas on Dias.idDia = Rutas.FKDia where Policias.idPolicia = @pIdPolicia and Dias.dia = @pDia order by Rutas.horaInicial');
    return results.recordset[0];
};
