import {Component} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: []
})
export class AuthentificationComponent {

    isAuthentifier: boolean = false;
    erreurAuthentifier: string;

    constructor(private dataService: DataService) {
    }

    authentifier(identifiant: string, motDePasse: string): void {
        this.dataService.authentifier(identifiant, motDePasse)
            .subscribe(
                () => {
                    this.isAuthentifier = true;
                },
                () => {
                    this.erreurAuthentifier = 'Echec de l\'authentification';
                }
            );
    }
}
