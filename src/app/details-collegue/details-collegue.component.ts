import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DataService} from "../services/data.service";
import Collegue from "../Collegue";

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styles: []
})
export class DetailsCollegueComponent implements OnInit {

  isErreur: boolean = false;
  col: Collegue;
  matricule: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.matricule = route.snapshot.paramMap.get("matricule");
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const matricule = params.get('matricule');
    });
    this.dataService.recupererCollegueParMatricule(this.matricule).subscribe(
        (collegue) => {
          this.isErreur = false;
          this.col = collegue;
        },
        () => this.isErreur = true
    );
  }

}
