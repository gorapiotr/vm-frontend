import {AbstractControl} from '@angular/forms';

export class ArrayValidator {
  static requiredArray(control: AbstractControl): {[key: string]: any} | null {
    const result = !control.value || (Array.isArray(control.value) && !control.value.length);
    return result ? { required: result} : null;
  }
}
