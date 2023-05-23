import login from "../vistas/login"
import panel from "../vistas/panel"
import registre from "../vistas/registre"
import { User } from "./user"

export const header = {
    template: `<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
      <div>
        <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
        <button id="login" class="btn btn-secondary ms-2" value="">LOGIN</button>
        <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
      </div>
      <div>
        <span id="emailUsuario"></span>
        
      </div>
    </div>
  </nav>`,
    script: async()=>{
      
      //cargo la vista panel y su funcionalidad
        document.querySelector('#panel').addEventListener("click", (e)=>{
          e.preventDefault()
          document.querySelector('main').innerHTML = panel.template
          panel.script()
        })

        //cargo la vista login y su funcionalidad
        document.querySelector('#login').addEventListener("click", (e)=>{
          e.preventDefault()
          document.querySelector('main').innerHTML = login.template
          login.script()
        })

        //cargo la vista registro y su funcionalidad
        document.querySelector('#registro').addEventListener("click", (e)=>{
          e.preventDefault()
          document.querySelector('main').innerHTML = registre.template
          registre.script()
        })

        let btnLogin = document.querySelector('#login')
        btnLogin.addEventListener("click", (e)=>{
          e.preventDefault()

          if(btnLogin.value == 'logout'){
              User.logout()
              btnLogin.innerHTML = 'LOGIN'
              document.querySelector('#emailUsuario').innerHTML = ``
          }
        })
    }
}