import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center" class="content text-dark">
            <h1 class="p-4 text-warning">
                Gestion des collègues
            </h1>
            <app-authentification>Chargement de la fonctionnalité d'authentification...</app-authentification>
            <div class="row">
                <div class="col-lg-5 col-12">
                    <app-rechercher-collegue-par-nom>Chargement de la fonctionnalité de recherche...</app-rechercher-collegue-par-nom>
                </div>
                <div class="col-12 p-3 col-lg-1 p-lg-0"></div>
                <div class="col-lg-6 col-12">
                    <app-collegue>Chargement du collègue...</app-collegue>
                </div>

            </div>

        </div>

        <!--<router-outlet></router-outlet>-->
    `,
    styles: []
})
export class AppComponent {

}
