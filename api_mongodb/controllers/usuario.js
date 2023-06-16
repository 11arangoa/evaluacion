//Importar paquetes requeridos de node
const {response}= require('express')



//Importacion de los modelos 
const Usuario=require('../models/usuario')
const { get } = require('mongoose')

//insercion, modificacion de datos

//consultar
const usuarioGet = async(req, res = response)=>{
    const{direccion}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const usuarios = await Usuario.find()
    res.json({
        usuarios
    })
}


const usuarioPost = async(req,res = response) => {
    const body = req.query//Captura de atributos
    const {direccion,latitud,longitud, descripcion,fecha} = req.query
    
   

    
        
        mensaje= 'La inserción se realizo exitosamente'
    
       
    
    

    res.json({
        mmsg: mensaje
    })
   
    console.log(mensaje)
    
       
    }



    


const usuarioPut= async(req, res= response)=>{
    //captura atributos o parametros
    const{direccion, latitud, descripcion, fecha}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const usuario= await Usuario.findOneAndUpdate({direccion:direccion}, {latitud:latitud,longitud:longitud, descripcion:descripcion})
        mensaje='La modificacion se efectuo correctamente'

    }
    catch(error){
        mensaje='Se presentaron problemas en la modificacion'

    }

   

    res.json({
        msg: mensaje 
    })

}

const usuarioDelete= async(req, res= response)=>{
    //captura atributos o parametros
    const{direccion, latitud, descripcion, fecha }=req.query
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const usuario= await Usuario.findOneAndDelete({direccion:direccion})
        mensaje='La eliminacion se efectuo correctamente.'

    }
    catch(error){
        mensaje='Se presentaron problemas en  la eliminacion.'

    }

   

    res.json({
        msg: mensaje 
    })

}


module.exports={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}