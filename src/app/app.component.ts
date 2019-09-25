import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "./services/data.service";

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center" class="content text-dark">
            <h1 class="p-4 text-warning">
                Gestion des collègues
            </h1>
            <div class="p-5" *ngIf="!isAuthentifier">
                <app-authentification>Chargement de la fonctionnalité d'authentification...
                </app-authentification>
                <p *ngIf="isAuthentifier"></p>
            </div>
            <div class="row">
                <div class="col-lg-5 col-12">
                    <app-rechercher-collegue-par-nom *ngIf="isAuthentifier">Chargement de la fonctionnalité de
                        recherche...
                    </app-rechercher-collegue-par-nom>
                </div>
                <div class="col-12 p-3 col-lg-1 p-lg-0"></div>
                <div class="col-lg-6 col-12">
                    <app-collegue *ngIf="isAuthentifier">Chargement du collègue...</app-collegue>
                </div>

            </div>

        </div>

        <!--<router-outlet></router-outlet>-->
    `,
    styles: []
})
export class AppComponent implements OnDestroy {

    authenticateSub: Subscription;
    isAuthentifier: boolean;

    constructor(private dataService: DataService) {
        this.authenticateSub = this.dataService.authenticateObs.subscribe((statut: boolean) => this.isAuthentifier = statut);
    }

    ngOnDestroy() {
        this.authenticateSub.unsubscribe();
    }

}
