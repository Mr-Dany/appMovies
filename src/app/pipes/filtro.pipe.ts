import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listmovies: any[], texto: string): any[] {
    if(texto === '' ){
      return listmovies;
    }
    texto = texto.toLowerCase();

    return listmovies.filter( item => {
      return item.title.toLowerCase()
              .include(texto );
    });
  }
}

