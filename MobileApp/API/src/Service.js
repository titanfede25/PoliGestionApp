import sql from 'mssql';
import configDB from './db.js';

export const getPolicia = async (dni, contraseña) => {
    const conn = await sql.connect(configDB);
    let results1 = await conn
        .request()
        .input('pDni', sql.VarChar, dni)
        .input('pContraseña', sql.VarChar, contraseña)
        .query('SELECT idPolicia from Policias where DNI=@pDni and password=@pContraseña');
        
    if (results1.recordset.length > 0) {
        let dayOfWeekName = new Date().toLocaleString('default', {weekday: 'long'});
        let results2 = await conn
        .request()
        .input('pIdPolicia', sql.Int, results1.recordset[0].idPolicia)
        .input('pDia', sql.VarChar, dayOfWeekName)
        .query('SELECT rutas.* from Policias inner join Dias on Policias.idPolicia = Dias.FKPolicia inner join Rutas on Dias.idDia = Rutas.FKDia where Policias.idPolicia = @pIdPolicia and Dias.dia = @pDia order by Rutas.horaInicial');
        results1.recordset[0].dia = dayOfWeekName;
        results1.recordset[0].rutas = results2.recordset;
        return results1.recordset[0];
    } else {
        return null;
    }
};
