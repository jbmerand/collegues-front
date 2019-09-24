import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: []
})
export class AuthentificationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  authentifier(identifiant: string, motDePasse: string): void {
    console.log(identifiant + motDePasse);
    this.dataService.authentifier(identifiant, motDePasse);
  }

  ngOnInit() {
  }

}
