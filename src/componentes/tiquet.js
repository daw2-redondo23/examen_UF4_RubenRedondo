// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
//Clase de la tabla tiquet
export class Tiquet{
    // Mapping de propiedades de la tabla tiquets
    constructor(id = null, codigo = null, created_at = null, aula = null, grupo = null, ordenador = null, descripcion = null, alumno = null, estado = null, fecha_resuelto = null){
        this.id = id,
        this.codigo = codigo
        this.created_at = created_at
        this.aula = aula
        this.grupo = grupo
        this.ordenador = ordenador
        this.descripcion = descripcion
        this.alumno = alumno
        this.estado = estado
        this.fecha_resuelto = fecha_resuelto

    }

    //leer todos los tiquets
    static async getAll () {
        let { data: tiquets, error } = await supabase
        .from('tiquets')
        .select('*')
        if (error) {
          throw new Error(error.message)
        }
        // devuelve array de objetos
        return tiquets.map(({id, codigo, created_at, aula, grupo, ordenador, descripcion, alumno, estado, fecha_resuelto}) => {
          return new Tiquet( id, codigo, created_at, aula, grupo, ordenador, descripcion, alumno, estado, fecha_resuelto)
        })
      }


      //leo solo el tiquet con el id que quiero
      static async getById (id) {
        let { data: tiquets, error } = await supabase
        .from('tiquets')
        .select('*')
        .eq('id', id)
        .single()
        if (error) {
          throw new Error(error.message)
        }
        // devuelve array de objetos
        
          return new Tiquet( tiquets.id, tiquets.codigo, tiquets.created_at, tiquets.aula, tiquets.grupo, tiquets.ordenador, tiquets.descripcion, tiquets.alumno, tiquets.estado, tiquets.fecha_resuelto)
        
      }

      //funcion para actualizar el estado
      async update () {
        const fecha =  new Date().toISOString().split('T')[0]; // transformo la fecha actual en formato 'YYYY-MM-DD para poder introducir la fecha en la que se ha resuelto el tiquet'
        const { error } = await supabase
          .from('tiquets')
          .update({
            estado: 'resuelto',
            fecha_resuelto: fecha
          })
          .eq('id', this.id)
          .single()
        if (error) {
          throw new Error(error.message)
        }
        return true
      }

      // borrar tiquet
        static async delete (id) {
            const { error } = await supabase
            .from('tiquets')
            .delete()
            .eq('id', id)
            if (error) {
            throw new Error(error.message)
            }
            return true
        }



      
}

