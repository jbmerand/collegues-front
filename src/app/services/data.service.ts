import { Injectable } from '@angular/core';
import Collegue from "../Collegue";
import {collegueMock} from "../mock/collegue.mock";
import {matricules} from "../mock/matricules.mock";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

/*interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get http(): HttpClient {
    return this._http;
  }

  constructor(private _http: HttpClient) { }

  rechercherParNom(nom : string): string[] {

    this._http.get(`${URL_BACKEND}//collegues?nom=${nom}`)
        .subscribe((data: any) => {
          // cas ok
        }, (error:any) => {
          // cas erreur
        });
    return matricules;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }

  authentifier(identifiant: string, motDePasse: string): void {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };

    this._http.post(`${URL_BACKEND}/auth`,
        {
          "identifiant" : identifiant,
          "motDePasse" : motDePasse
        }, httpOptions).subscribe((response) => {
      console.log(response.status);
    }, (error: any) => {
      console.log("error", error);
    })
  }

}
