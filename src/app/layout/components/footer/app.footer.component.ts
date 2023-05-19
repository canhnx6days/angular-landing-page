import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
    constructor(public router: Router) {}
}
