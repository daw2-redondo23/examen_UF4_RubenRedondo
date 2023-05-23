import { Tiquet } from "../componentes/tiquet"
import { User } from "../componentes/user"

export default{
    template: `<h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table id="ticketsPendientes" class="table mt-4">
      
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table id="ticketsResueltos" class="table mt-4">

    </table>`,
    script: async()=>{
        const usuario = await User.getUser()
        if
        let tablaPendientes = `<thead>
                                    <tr>
                                    <th>Código</th>
                                    <th>Fecha</th>
                                    
                                    <th>Aula</th>
                                    <th>Grupo</th>
                                    <th>Ordenador</th>
                                    <th>Descripción</th>
                                    <th>Alumno</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>`

        let tablaResueltos = `<thead>
                                <tr>
                                <th>Código</th>
                                <th>Fecha</th>
                                <th>Fecha resuelto</th>
                                <th>Aula</th>
                                <th>Grupo</th>
                                <th>Ordenador</th>
                                <th>Descripción</th>
                                <th>Alumno</th>
                                <th></th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>`

        let tiquets = await Tiquet.getAll() //obtengo todos los tiquets de la base de datos
        console.log(tiquets); //los muestro por consola para ver lo que obtengo
        tiquets.forEach(tiquets => {  //para cada tiquet que obtengo genero una fila con todos los datos y los botones y los clasifico segun el estado que tienen
            if(tiquets.estado == 'pendiente'){
                tablaPendientes += `<tr data-id="${tiquets.id}">
                                        <td>${tiquets.codigo}</td>
                                        <td>${tiquets.created_at}</td>
                                        <td>${tiquets.aula}</td>
                                        <td>${tiquets.grupo}</td>
                                        <td>${tiquets.ordenador}</td>
                                        <td>${tiquets.descripcion}</td>
                                        <td>${tiquets.alumno}</td>
                                        <td><button data-id="${tiquets.id}" class="btn btn-success btnResolver" title="Resolver ticket">Resolver</button></td>
                                        <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                        </button>
                                        </td>
                                        <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                                        </button></td>
                                        <td><button data-id="${tiquets.id}" class="btn btn-danger btnEliminar" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                                        </i>
                                        </button></td>
                                    </tr>`
            }
            else{
            tablaResueltos += `<tr data-id="${tiquets.id}">
                                    <td>${tiquets.codigo}</td>
                                    <td>${tiquets.created_at}</td>
                                    <td>${tiquets.fecha_resuelto}</td>
                                    <td>${tiquets.aula}</td>
                                    <td>${tiquets.grupo}</td>
                                    <td>${tiquets.ordenador}</td>
                                    <td>${tiquets.descripcion}</td>
                                    <td>${tiquets.alumno}</td>
                                    <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                                    </button></td>
                                    <td><button data-id="${tiquets.id}" class="btn btn-danger btnEliminar" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                                    </i>
                                    </button></td>
                                </tr>`
            }
            
        })

        tablaPendientes += `</tbody>`
        document.querySelector('#ticketsPendientes').innerHTML = tablaPendientes //inyecto las filas de los tiquets con el estado pendiente en la tabla de tiquets pendientes
        
        //añadir a la tabla de tickets resueltos
        tablaResueltos += `</tbody>`
        document.querySelector('#ticketsResueltos').innerHTML = tablaResueltos //inyecto las filas de los tiquets con el estado resuelto en la tabla de tiquets resueltos
        

        //detecto todos los botones resolver para actualizar el estado
        let btnResolver = document.querySelectorAll('.btnResolver')

        btnResolver.forEach(async(boton)=>{ //para cada boton detecto si se hace click
            boton.addEventListener('click', async(e)=>{
                e.preventDefault()
                let id = event.target.dataset.id //recojo el id que tiene el botón
                let tiquetAresolver = await Tiquet.getById(id)  //recojo el tiquet que tiene el id que me ha enviado el boton resolver
                tiquetAresolver.update() //actualizo el estado del tiquet
                location.reload() //recargo la pagina
            })
            
          })
        
          //detecto todos los botones eliminar para eliminar el estado
          let btnEliminar = document.querySelectorAll('.btnEliminar')

          btnEliminar.forEach(async(boton)=>{ //para cada boton detecto si se hace click
              boton.addEventListener("click", async(e)=>{
                e.preventDefault()
                let id = event.target.dataset.id //recojo el id que tiene el botón
                await Tiquet.delete(id) //elimino el tiquet que tiene ese id
                location.reload() //recargo la pagina
              })
          })
        
     
    }
}