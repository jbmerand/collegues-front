import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `        
        <header class="bg-dark">
            <div style="text-align:center" class="content">
                <h1 class="p-4 text-warning">
                    Gestion des collègues
                </h1>
            </div>
            <app-menu></app-menu>
        </header>
        <main class="border-dark p-2">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: []
})
export class AppComponent {

}
