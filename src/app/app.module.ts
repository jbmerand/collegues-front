import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CollegueComponent} from './collegue/collegue.component';
import {RechercherCollegueParNomComponent} from './rechercher-collegue-par-nom/rechercher-collegue-par-nom.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercherCollegueParNomComponent,
        AuthentificationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
