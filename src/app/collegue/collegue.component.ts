import {Component, Input, OnInit} from '@angular/core';
import Collegue from "../Collegue";
import { collegueMock } from "../mock/collegue.mock";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input()
  col: Collegue = collegueMock;

  fonctionnalite: string = 'read';

  modifierCollegue() {
    console.log('Modification du collègue');
    this.fonctionnalite = 'update';
  }

  creerCollegue() {
    console.log('Création du collègue');
    this.fonctionnalite = 'create';
  }

  validerModifierCollegue() {
    console.log('Validation de la modification du collègue');

  }

  ngOnInit() {
  }

}
