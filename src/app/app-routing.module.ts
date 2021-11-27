import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { Error404Component } from './error404/error404.component';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  {path: "", component: SummaryComponent},
  {path: "navigator", component: NavigatorComponent},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
