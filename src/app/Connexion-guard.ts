import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {DataService} from "./services/data.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {

    constructor(private router: Router, private dataService: DataService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.dataService.isAuthentifie() || this.router.parseUrl('/login');
    }

}
