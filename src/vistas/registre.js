import { User } from "../componentes/user"
import login from "./login"

export default{
    template: `<div class="pt-5">
                <h1 class="w-100 text-center">Registro</h1>
                <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
                <label for="email" class="mt-2 form-label">User: </label>
                <input  id="inputUsuario" type="text" class="form-control" placeholder="usuario@mail.com">

                <label for="pass" class="mt-2 form-label">Contraseña: </label>
                <input id="inputPassword" type="password" class="form-control">

                <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
                </form>
            </div>`,
    script: async()=>{

        document.querySelector('#enviar').addEventListener("click", async(e)=>{  //detecto el click en el boton enviar 
            e.preventDefault()
            try {

                let usuarioRegistro = { //recojo los valores de los inputs y los guardo en un objeto 
                    email: document.querySelector('#inputUsuario').value,
                    password: document.querySelector('#inputPassword').value
                }
        
               const nuevoUsuario = await User.create(usuarioRegistro) //me regsitro con el email y el password de los inputs anteriores
               console.log(nuevoUsuario); //muestro el nuevo usuario creado
               alert("Usuario creado correctamente, antes de loggearte confirma el mail, Gracias!") //una alerta para indicar que el usuario se ha creado correctamente y advertirle que tiene que confirmar el mail
               document.querySelector('main').innerHTML = login.template //cargo la ventana del login y su funcionalidad
               login.script()

            } catch (error) {
                alert(error) //si hay algun error lo muestro por pantalla con una alerta
            }
            
        })
        
    }
}