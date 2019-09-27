import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CollegueComponent} from './collegue/collegue.component';
import {RechercherCollegueParNomComponent} from './rechercher-collegue-par-nom/rechercher-collegue-par-nom.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthentificationComponent } from './authentification/authentification.component';
import {FormsModule} from "@angular/forms";
import { CreerCollegueComponent } from './collegue/creer-collegue/creer-collegue.component';
import {NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercherCollegueParNomComponent,
        AuthentificationComponent,
        CreerCollegueComponent,
        UrlValidatorDirective,
        EmailValidatorDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbDatepickerModule
    ],
    providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
