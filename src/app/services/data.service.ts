import { Injectable } from '@angular/core';
import Collegue from "../Collegue";
import {collegueMock} from "../mock/collegue.mock";
import {matricules} from "../mock/matricules.mock";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom : string): string[] {
    return matricules;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
