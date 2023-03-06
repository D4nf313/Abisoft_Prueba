import { Validator, AbstractControl } from '@angular/forms';

export class MyCustomValidator implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    const value = control.value;
    if (!value || value.length < 5) {
      return { 'myCustomError': true };
    }
    return null;
  }
}
