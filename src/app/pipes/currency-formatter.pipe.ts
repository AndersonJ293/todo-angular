import { Pipe, PipeTransform } from '@angular/core';

interface IProps {
  style: string;
  currency: string;
  fractionDigits: number;
}

@Pipe({
  name: 'currencyFormatter',
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: string, args: IProps): unknown {
    const formattedValue = Number(value).toLocaleString('pt-BR', args);
    return formattedValue;
  }
}
