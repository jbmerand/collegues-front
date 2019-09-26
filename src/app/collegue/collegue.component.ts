import {Component, OnDestroy, OnInit} from '@angular/core';
import Collegue from "../Collegue";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-collegue',
    templateUrl: './collegue.component.html',
    styleUrls: []
})
export class CollegueComponent implements OnInit, OnDestroy {

    col: Collegue;
    collegueCourantSub: Subscription;
    fonctionnaliteSub: Subscription;

    erreurEmailMsg: string = 'Email invalide.';
    erreurPhotoUrlMsg: string = 'Url invalide.';
    collegueModifieMsg: string;

    fonctionnalite: string = 'read';

    constructor(private dataService: DataService) {
        this.collegueCourantSub = this.dataService.collegueCourantObs.subscribe((collegue: Collegue) => this.col = collegue);
        this.fonctionnaliteSub = this.dataService.fonctionnaliteObs.subscribe((fonctionnalite: string) => this.fonctionnalite = fonctionnalite);
    }

    modifierCollegue(): void {
        this.fonctionnalite = 'update';
    }

    creerCollegue(): void {
        this.fonctionnalite = 'create';
    }

    validerModifierCollegue(): void {
        this.dataService.updateCollegueSurApi(this.col).subscribe(
            () => { this.fonctionnalite = 'read'},
            (error: HttpErrorResponse) => this.collegueModifieMsg = `Echec de la modification des informations du collègue.\n${error.error}`
        );
    }

    ngOnInit() {
        this.dataService.recupererCollegueConnecte().subscribe();
    }

    ngOnDestroy() {
        this.collegueCourantSub.unsubscribe();
        this.fonctionnaliteSub.unsubscribe();
    }
}
