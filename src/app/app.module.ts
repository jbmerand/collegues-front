import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercherCollegueParNomComponent } from './rechercher-collegue-par-nom/rechercher-collegue-par-nom.component';

@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercherCollegueParNomComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
