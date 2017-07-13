import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any): string {
      const noimagen = 'assets/img/noimage.png';
      if ( !value ) {
          return noimagen;
      }
    return (value.length > 0) ? value[1].url : noimagen;
  }

}
