import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcquisitionComponent } from './components/acquisition/acquisition.component';
import { AcquisitionsComponent } from './components/acquisitions/acquisitions.component';
import { HistoricComponent } from './components/historic/historic.component';
import { CreateEntityComponent } from './components/create-entity/create-entity.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'acquisitions', component: AcquisitionsComponent
  },
  {
    path: 'acquisition', component: AcquisitionComponent
  },
  {
    path: 'historic', component: HistoricComponent
  },
  {
    path: 'create-entity', component: CreateEntityComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
