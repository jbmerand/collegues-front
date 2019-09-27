import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable, of, pipe} from "rxjs";
import {DataService} from "../services/data.service";
import {catchError, map} from "rxjs/operators";

@Directive({
    selector: '[appEmailValidator]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator {

    constructor(private dataService: DataService) {
    }

    validate(control: AbstractControl): Observable<ValidationErrors> | null {

        return this.dataService.verifierEmailExisteReq(control.value)
            .pipe(
                map(() => null),
                catchError(() => of({emailInvalide: true})))
    }
}
