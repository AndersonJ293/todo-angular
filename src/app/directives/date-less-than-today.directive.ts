import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateLessThanToday]',
})
export class DateLessThanTodayDirective implements OnInit {
  @Input() Date!: string;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      const dateFormat = new Date(this.Date.split('/').reverse().join('-'));
      const today = new Date();
      console.log('dateFormat:', dateFormat);
      console.log('today:', today);
      console.log('today < dateFormat:', today < dateFormat);

      if (today < dateFormat) {
        this.element.nativeElement.style.color = 'red';
      }
    }, 3000);
  }
}
