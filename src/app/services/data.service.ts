import {Injectable} from '@angular/core';
import Collegue from "../Collegue";
import {Observable, of, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {tap} from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private authenticate = new Subject<boolean>();
    private _collegueCourant = new Subject<Collegue>();

    constructor(private _http: HttpClient) {
    }

    get authenticateObs(): Observable<boolean> {
        return this.authenticate.asObservable();
    }

    get http(): HttpClient {
        return this._http;
    }

    get collegueCourantObs(): Observable<Collegue> {
        return this._collegueCourant.asObservable();
    }

    rechercherParNom(nom: string): Observable<string[]> {

        const httpOptions = {
            withCredentials: true
        };

        return this._http.get<string[]>(`${URL_BACKEND}/collegues?nom=${nom}`, httpOptions);
    }

    recupererCollegueConnecte(): Observable<Collegue> {
        const httpOptions = {
            withCredentials: true
        };

        return this._http.get<Collegue>(`${URL_BACKEND}/auth/user`, httpOptions)
            .pipe(tap((collegue: Collegue) => {
                    this._collegueCourant.next(collegue);
                },
                error => this._collegueCourant.error('Erreur dans la récupération de l\'utilisateur connecté.')
            ));
    }

    recupererCollegueParMatricule(matricule: string): Observable<Collegue> {
        const httpOptions = {
            withCredentials: true
        };

        return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${matricule}`, httpOptions)
            .pipe(tap((collegue: Collegue) => {
                    this._collegueCourant.next(collegue);
                }
            ));
    }

    authentifier(identifiant: string, motDePasse: string): Observable<void> {

        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };

        return this._http.post<void>(`${URL_BACKEND}/auth`,
            {
                "identifiant": identifiant,
                "motDePasse": motDePasse
            }, httpOptions).pipe(
            tap(() => {
                    this.authenticate.next(true)
                }
            ))
    }
}
