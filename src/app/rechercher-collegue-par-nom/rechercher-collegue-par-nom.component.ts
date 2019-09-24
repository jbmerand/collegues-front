import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-rechercher-collegue-par-nom',
    templateUrl: './rechercher-collegue-par-nom.component.html',
    styleUrls: []
})
export class RechercherCollegueParNomComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    // @Input()
    matricules: string[];

    isMatriculesHidden: boolean = true;

    nom: string;

    rechercherClick(nom): void {
        this.nom = nom;
        console.log(`recherche du collègue : ${this.nom}`);
        this.matricules = this.dataService.rechercherParNom(this.nom);
        this.isMatriculesHidden = false;
    }

    ngOnInit() {
    }

}
