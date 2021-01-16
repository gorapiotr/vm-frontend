import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html'
})
export class InputValidationComponent {
  @Input() control: AbstractControl;
}
