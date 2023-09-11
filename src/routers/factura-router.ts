import express from 'express'
import xmlgen from 'facturacionelectronicapy-xmlgen';

const facturasRouter = express.Router()


facturasRouter.post('/factura', (req, res) => {
    const item = req.body

    var params = {
        "version" : 150,
        "fechaFirmaDigital" : "2022-08-13T00:00:00",
        "ruc" : "80069563-1",
        "razonSocial" : "DE generado en ambiente de prueba - sin valor comercial ni fiscal",
        "nombreFantasia" : "TIPS S.A. TECNOLOGIA Y SERVICIOS",
        "actividadesEconomicas" : [{
          "codigo": "1254",
          "descripcion": "Desarrollo de Software",
        }],   
        "timbradoNumero" : "12558946",
        "timbradoFecha" : "2022-08-25",
        "tipoContribuyente" : 2, 
        "tipoRegimen" : 8, 
        "establecimientos" : [{
          "codigo" : "001",
          "direccion" : "Barrio Carolina", 
          "numeroCasa" : "0", 
          "complementoDireccion1" : "Entre calle 2", 
          "complementoDireccion2" : "y Calle 7",
          "departamento" : 11,
          "departamentoDescripcion" : "ALTO PARANA",
          "distrito" : 145,
          "distritoDescripcion" : "CIUDAD DEL ESTE",
          "ciudad" : 3432,
          "ciudadDescripcion" : "PUERTO PTE.STROESSNER (MUNIC)",
          "telefono" : "0973-527155",
          "email" : "tips@tips.com.py, tips@gmail.com",
          "denominacion" : "Sucursal 1",
        }]
      };


    //TODO: Criar e salvar um novo item
    xmlgen.generateXMLDE(params, item).then(xml => {
        console.log(xml);
    }).catch(error => {
        console.log(error);
    }); 
})



export default facturasRouter