import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: []
})
export class AuthentificationComponent implements OnInit {

    isAuthentifier: boolean = false;
    erreurAuthentifier: string;

    constructor(private dataService: DataService, private router: Router) {
    }

    authentifier(identifiant: string, motDePasse: string): void {
        this.dataService.authentifier(identifiant, motDePasse)
            .subscribe(
                () => {
                    this.isAuthentifier = true;
                    this.erreurAuthentifier = "";
                    this.router.navigate(['/accueil']);
                },
                () => {
                    this.erreurAuthentifier = 'Echec de l\'authentification';
                }
            );
    }

    ngOnInit(): void {
        this.dataService.isAuthentifie().subscribe(
            () => this.router.navigate(['/accueil'])
        )
    }
}
