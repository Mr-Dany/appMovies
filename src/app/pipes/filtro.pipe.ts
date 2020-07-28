import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string): any[] {
    console.log(arreglo);
    if ( texto === '' ) {
      return arreglo;
    }
    return arreglo.filter( item => {
      //debugger
      return item.original_name.toLowerCase()
              .includes( texto.toLowerCase() );
    });
    //return arreglo;
  }
  
}

