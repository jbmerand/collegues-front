import {Component, Input} from '@angular/core';
import { collegueMock}  from './mock/collegue.mock';
import Collegue from "./Collegue";

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content text-dark">
      <h1 class="p-4 text-warning">
        Gestion des collègues
      </h1>
      <div class="row">
        <div class="col-5">
          <app-rechercher-collegue-par-nom></app-rechercher-collegue-par-nom>
        </div>
        <div class="col-1"></div>
        <div class="col-6">
          <app-collegue [col]="collegue"></app-collegue>
        </div>
        
      </div>
      
    </div>
      
    <!--<router-outlet></router-outlet>-->
  `,
  styles: []
})
export class AppComponent {

  collegue: Collegue = collegueMock;
}
