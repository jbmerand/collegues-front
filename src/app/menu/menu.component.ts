import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
      '.active-link { background-color: slategrey; color: whitesmoke}'
  ]
})
export class MenuComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

    seDeconnecter(): void {
      this.dataService.seDeconnecter().subscribe();
      this.router.navigate(['/login']);
    }

  ngOnInit() {
  }

}
