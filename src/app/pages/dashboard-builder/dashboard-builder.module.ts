import { DashTileComponent } from './dash-tile/dash-tile.component';
import { NgModule } from "@angular/core";
import { DashboardBuilderComponent } from "./dashboard-builder.component";
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path     : '',
        component: DashboardBuilderComponent,
    }
  ];

@NgModule({
    declarations: [
        DashboardBuilderComponent,
        DashTileComponent,
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    exports: []
})
export class DashboardBuilderModule {
    
}   