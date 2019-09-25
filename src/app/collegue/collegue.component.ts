import {Component, OnDestroy, OnInit} from '@angular/core';
import Collegue from "../Collegue";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-collegue',
    templateUrl: './collegue.component.html',
    styleUrls: []
})
export class CollegueComponent implements OnInit, OnDestroy {

    col: Collegue;
    collegueCourantSub: Subscription;

    fonctionnalite: string = 'read';

    constructor(private dataService: DataService) {
        this.collegueCourantSub = this.dataService.collegueCourantObs.subscribe((collegue: Collegue) => this.col = collegue);
    }

    modifierCollegue(): void {
        console.log('Modification du collègue');
        this.fonctionnalite = 'update';
    }

    creerCollegue(): void {
        console.log('Création du collègue');
        this.fonctionnalite = 'create';
    }

    validerModifierCollegue(): void {
        console.log('Validation de la modification du collègue');
    }

    ngOnInit() {
        this.dataService.recupererCollegueConnecte().subscribe();
    }

    ngOnDestroy() {
        this.collegueCourantSub.unsubscribe();
    }
}
