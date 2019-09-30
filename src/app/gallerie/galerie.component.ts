import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-gallerie',
    templateUrl: './galerie.component.html',
    styles: []
})
export class GalerieComponent implements OnInit {

    tableauDesUrlPhotosEtMatricules: string[];
    isErreurDeRecuperation = false;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.recupererToutesUrlPhotosEtMatricules().subscribe(
            (values: string[]) => {
                this.tableauDesUrlPhotosEtMatricules = values;
                this.isErreurDeRecuperation = false;
            },
            (() => this.isErreurDeRecuperation = true)
        )
    }

}
