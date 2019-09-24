import {Component, OnInit} from '@angular/core';
import Collegue from "../Collegue";
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-collegue',
    templateUrl: './collegue.component.html',
    styleUrls: []
})
export class CollegueComponent implements OnInit {

    col: Collegue;

    fonctionnalite: string = 'read';

    constructor(private dataService: DataService) {
    }

    valoriserCollegue(): void {
        this.col = this.dataService.recupererCollegueCourant();
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
        this.valoriserCollegue();
    }

}
