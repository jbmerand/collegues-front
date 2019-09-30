import {Component, OnInit} from '@angular/core';
import Collegue from "../../Collegue";
import {DataService} from "../../services/data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-creer-collegue',
    templateUrl: './creer-collegue.component.html',
    styles: [
        'input.ng-dirty.ng-invalid {border-color: tomato}'
    ]
})
export class CreerCollegueComponent implements OnInit {

    collegue: Collegue = new Collegue(null, null, null, null, null, null);
    erreurCreerCollegueReqMsg: string;
    champsInvalideMsg: string = 'Champ invalide.';

    constructor(private dataService: DataService) {
    }

    creerCollegue(formCreationCollegue: NgForm): void {
        if(formCreationCollegue.invalid) {
            this.erreurCreerCollegueReqMsg = 'Merci de compléter ou de corriger le formulaire.';
            return;
        }
        this.dataService.creerCollegueReq(this.collegue).subscribe(
            (collegue) => {
                formCreationCollegue.reset();
                this.erreurCreerCollegueReqMsg = undefined;
                this.collegue = new Collegue(null, null, null, null, null, null);
            },
            (error: HttpErrorResponse) => {
                console.log(this.collegue);
                console.log(error);
                this.erreurCreerCollegueReqMsg = `Echec de création du collègue.`
            }
        );
    }

    ngOnInit() {
    }

}
