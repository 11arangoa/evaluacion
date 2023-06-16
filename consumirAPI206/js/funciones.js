 
//al desplegar en el servidor colocar la base de datos del servidor 
 const url = 'http://localhost:8082/api/usuario'

const listarDatos= async()=>{
    let respuesta=''
    let body = document.getElementById('contenido')
    //url de donde se tiene la api
    //consultar/ trabajar apis desde javascript
    fetch (url, {
        method:'GET',
        mode:'cors',
        headers:{"Content-type": "application/json; charset=UTF-8"}
    })

    //obtener la respuesta y convertirla a json 

    .then((resp)=> resp.json())
    //data contiene la informacion
    .then(function(data){
        //devuelve los datos
        let listaUsuarios = data.usuarios
        //manera de llevar  rapido la lista
        return listaUsuarios.map(function(usuario){
            
            respuesta+=`<tr><td>${usuario.direccion}</td>`+
            `<td>${usuario.latitud}</td>`+
            `<td>${usuario.longitud}</td>`+
            `<td>${usuario.descripcion}</td>`+
            `<td>${usuario.fecha}</td>`+
            `<td> <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar( ${JSON.stringify(usuario)})'>Editar</a><td><a class="waves-effect waves-light btn modal-danger red" href='#' onclick='eliminar(${JSON.stringify(usuario)})'>Eliminar</a></td></tr>`   
            body.innerHTML= respuesta 
            
        })
    })
}

const registrar = async() =>{

    let _direccion = document.getElementById('direccion').value
    let _latitud = document.getElementById('latitud').value
    let _longitud = document.getElementById('longitud').value
    let _descripcion = document.getElementById('descripcion').value

    
        fetch (url,{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(_usuario),//Convertir el objeto _usuario a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp)=> resp.json())
        .then(json => {
         //   alert(json.msg)// mensaje que retorna la api
         Swal.fire(
            json.msg,
            '',
            'success'
          )
    })
        
    
    }   



const editar=(usuario)=>{
    document.getElementById('direccion').value= ''
    document.getElementById('latitud').value=''
    document.getElementById('longitud').value= ''
    document.getElementById('descripcion').value= ''

    document.getElementById('direccion').value= usuario.direccion
    document.getElementById('latitud').value= usuario.latitud
    document.getElementById('longitud').value= usuario.longitud
    document.getElementById('descripcion').value= usuario.descripcion
    
}


//Actualizar editar
const actualizar = async() =>{

    let _direccion = document.getElementById('direccion').value
    let _latitud = document.getElementById('latitud').value
    let _longitud = document.getElementById('longitud').value
    let _descripcion = document.getElementById('descripcion').value

   
        fetch (url,{
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(_usuario),//Convertir el objeto _usuario a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp)=> resp.json())
        .then(json => {
            alert(json.msg)
    })
}


const eliminar = (id)=>{
    if(confirm('Esta seguro de realizar la eliminacion?')== true){
  
    
            let usuario = {
                _id: id
            }
            fetch (url,{
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(usuario),//Convertir el objeto _usuario a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then((resp)=> resp.json())
            .then(json => {
                alert(json.msg)
        })
       
    }
    
}

if(document.querySelector('#btnRegistrar')){
    document.querySelector('#btnRegistrar')
    .addEventListener('click',registrar)

}

if(document.querySelector('#btnActualizar')){
   document.querySelector('#btnActualizar')
   .addEventListener('click',actualizar)
}




