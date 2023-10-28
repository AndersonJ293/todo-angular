import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]',
})
export class DateMaskDirective {
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.match(/\D/g)) {
      input.value = input.value.replace(/\D/g, '');
    }

    const apenasNumeros = value.replace(/\D/g, '');

    if (apenasNumeros.length >= 3 && apenasNumeros.length < 5) {
      input.value = `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2)}`;
      return;
    }

    if (apenasNumeros.length >= 5) {
      input.value = `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(
        2,
        4
      )}/${apenasNumeros.slice(4, 8)}`;
      return;
    }
  }

  constructor() {}
}
