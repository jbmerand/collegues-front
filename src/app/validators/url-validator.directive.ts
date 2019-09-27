import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    if(control.value && control.value.toLowerCase().startsWith('http')) {
      return null;
    } else {
      return {
        urlInvalide: true
      }
    }

  }

}
