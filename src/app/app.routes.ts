import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {GalerieComponent} from './gallerie/galerie.component';
import {AProposComponent} from './apropos/apropos.component';
import {DetailsCollegueComponent} from "./details-collegue/details-collegue.component";
import {ConnexionGuard} from "./Connexion-guard";
import {AuthentificationComponent} from "./authentification/authentification.component";

export const ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login'},
    {path: 'login', component: AuthentificationComponent},
    {path: 'accueil', canActivate: [ConnexionGuard], component: AccueilComponent},
    {path: 'gallerie', canActivate: [ConnexionGuard], component: GalerieComponent},
    {path: 'gallerie/:matricule', canActivate: [ConnexionGuard], component: DetailsCollegueComponent},
    {path: 'a-propos', canActivate: [ConnexionGuard], component: AProposComponent}
];
