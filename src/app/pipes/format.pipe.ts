import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const texte = value.replace(/_/g, ' ')

    const mots = texte.split(' ');
    return mots
      .map((mot, index) => {
        if(index === 0) {
          return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
        }
        return mot.toLowerCase();
      })
      .join(' ');
  }
}
