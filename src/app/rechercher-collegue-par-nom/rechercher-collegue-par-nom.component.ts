import { Component, OnInit } from '@angular/core';
import {matricules} from "../mock/matricules.mock";

@Component({
  selector: 'app-rechercher-collegue-par-nom',
  templateUrl: './rechercher-collegue-par-nom.component.html',
  styleUrls: ['./rechercher-collegue-par-nom.component.css']
})
export class RechercherCollegueParNomComponent implements OnInit {

  constructor() { }

  matricules = matricules;

  isMatriculesHidden = true;

  rechercherClick() {
    this.isMatriculesHidden = false;
  }

  ngOnInit() {
  }

}
