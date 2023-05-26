const { response, request } = require('express');
const { bd_mmcbs } = require('../database/config');
// const {  } = require('../models');

const getDB = async(req = request, res = response) => {
    
    const mail = process.env.MAIL
    const query = `Select concat(carro.nombre,"-",carro.numero) as carro,
                if(autorizado.en_practica=1,"En Practica"," ") as Estado,
            date_format(fecha_practica_solicitada,"%d/%m/%Y") as "Fecha solicitud practica",
                date_format(fecha_en_practica,"%d/%m/%Y") as "Fecha inicio practica",
            idautorizado as "Ver examenes"
            From conductor
            inner join autorizado on autorizado.conductor_idconductor=conductor.idconductor
            inner join carro on autorizado.carro_idcarro=carro.idcarro
            where en_practica=1 and practica_solicitada=1 and autorizado=0 and conductor.email ='${mail}';`

    const result = await bd_mmcbs.query(query)
    console.log(result);

    res.json({
        result
    })

}

module.exports = {
    getDB,
}