import {Component, Input} from '@angular/core';
import {collegueMock} from './mock/collegue.mock';
import {matricules} from "./mock/matricules.mock";

import Collegue from "./Collegue";

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center" class="content text-dark">
            <h1 class="p-4 text-warning">
                Gestion des collègues
            </h1>
            <div class="row">
                <div class="col-lg-5 col-12">
                    <app-rechercher-collegue-par-nom [matricules]="matricules"></app-rechercher-collegue-par-nom>
                </div>
                <div class="col-12 p-3 col-lg-1 p-lg-0"></div>
                <div class="col-lg-6 col-12">
                    <!--<app-collegue [col]="collegue"></app-collegue>-->
                    <app-collegue></app-collegue>
                </div>

            </div>

        </div>

        <!--<router-outlet></router-outlet>-->
    `,
    styles: []
})
export class AppComponent {

    collegue: Collegue = collegueMock;
    matricules: string[] = matricules;
}
