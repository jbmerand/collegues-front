import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-rechercher-collegue-par-nom',
    templateUrl: './rechercher-collegue-par-nom.component.html',
    styleUrls: []
})
export class RechercherCollegueParNomComponent implements OnInit {

    constructor(private dataService: DataService) {}

    matricules: string[];
    erreurRechercheMatricule: string;
    erreurRecupererMatricule: string;
    isMatriculesHidden: boolean = true;
    nom: string;

    rechercherClick(nom): void {
        this.nom = nom;
        this.dataService.rechercherParNom(this.nom)
            .subscribe(
                (value: any) => {
                    this.matricules = value;
                    this.erreurRechercheMatricule = undefined;
                },
                (error: HttpErrorResponse) => {
                    this.erreurRechercheMatricule = `Echec de la récupération du/des matricule(s). ${error.error}`;
                    this.matricules = undefined;
                });
        this.isMatriculesHidden = false;
    }

    recupererCollegue(matricule: string): void {
        this.dataService.changerFonctionnalite('read');
        this.dataService.recupererCollegueParMatricule(matricule)
            .subscribe(
            (collegue) => collegue,
            (error: HttpErrorResponse) => {
                this.erreurRecupererMatricule = `Erreur dans la récupération du collègue.`;
            }
        );
    }

    ngOnInit() {
    }

}
