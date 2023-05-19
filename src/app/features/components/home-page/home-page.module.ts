import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
    imports: [
        CommonModule,
        HomePageRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        GalleriaModule,
        ButtonModule,
    ],
    declarations: [HomePageComponent],
})
export class HomePageModule {}
