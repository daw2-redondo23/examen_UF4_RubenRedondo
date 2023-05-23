import { header } from "./componentes/header";
import panel from "./vistas/panel";

//inyecto el componente header en la etiqueta header y cargo su funcionalidad
document.querySelector('header').innerHTML = header.template
header.script()
//inyecto el componente panel en la etiqueta header y cargo su funcionalidad

document.querySelector('main').innerHTML = panel.template
panel.script()
