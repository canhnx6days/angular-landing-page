import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../../service/photo.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {
    constructor(
        public router: Router,
        private photoService: PhotoService
    ) {}

    images!: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5,
        },
        {
            breakpoint: '960px',
            numVisible: 4,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ];

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}
