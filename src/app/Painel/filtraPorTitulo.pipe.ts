import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
 name: 'filtraPorTitulo'
})

// 5.3, 5.5, 5.7, 5.9, 5.11
export class FiltraPorTituloPipe implements PipeTransform {
  transform(elementos, digitado) {
    //console.log(elementos, digitado)

    return elementos.filter((elemento) => {
            // digitado | titulo
            const tituloAjustado = elemento.titulo.toLowerCase()
            const digitadoAjustado = digitado.toLowerCase()

            const resultado = tituloAjustado.includes(digitadoAjustado)

            return resultado
          })

  }
}
