import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateLessTodayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const [dd, mm, yyyy] = control.value.split('/');

    const inputDate = new Date(yyyy, mm - 1, dd, 23, 59, 59);

    const currentDate = new Date();

    if (inputDate < currentDate) {
      return { dateLessToday: true };
    }

    return null;
  };
}
