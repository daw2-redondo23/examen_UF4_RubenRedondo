import { User } from "../componentes/user"
import panel from "./panel"

export default{
    template: `<div class="pt-5">
    <h1 class="w-100 text-center">Login</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input id="inputEmail" type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input id="inputPassword" type="password" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>`,
    script: async()=>{
      document.querySelector('#enviar').addEventListener("click", async(e)=>{ //detecto el click en el boton enviar 
        e.preventDefault()

        try {
          
          let usuarioLogin = { //recojo los valores de los inputs y los guardo en un objeto 
            email: document.querySelector('#inputEmail').value,
            password: document.querySelector('#inputPassword').value
          }

          const usuarioLoggeado = await User.login(usuarioLogin) //me loggeo con el email y el password de los inputs anteriores

          if(usuarioLoggeado){ //si el usuario se ha podido loggear se pintara el email en un span arriba a la derecha del header
            document.querySelector('#emailUsuario').innerHTML = usuarioLoggeado.email
            document.querySelector('#login').innerHTML = 'LOGOUT'
          }
          alert("Bienvenido!!!") //una alerta para indicar que te has loggeado
          document.querySelector('main').innerHTML = panel.template //vuelvo a pintar el panel para poder realizar alguna accion
          panel.script() //cargo la funcionalidad del panel

        } catch (error) {
          alert(error) //en caso de haber algun error lo muestro en una alerta
        }
      })
    }
}